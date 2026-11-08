#!/usr/bin/env python3
"""Record the app's missing English voice clips with Kokoro-82M (voice af_heart, American English).

Run from the repository root:
    node tools/voice/texts.js . /tmp/missing.json        # what has no recording yet
    python3 tools/voice/build_voice.py /tmp/missing.json --minutes 240

It records short items first (words and glossary terms people tap), then questions, then notes lines,
until the time budget runs out, and saves after every batch. The clips go into NEW bundle files
(audio/v<date>[letter].txt, at most ~45 MB each, MP3 at 96 kbps) and their byte ranges are added to
audio/idx.json, so old bundles never change and the app (which caches bundles by name) just downloads
the new ones. Running it again records whatever is still missing, so a stopped run loses nothing.

Single words are said as "<word>, please." and cut at the end of the word using the model's timestamps,
because a lone word said by itself got an extra sound in front of it (same as the original recordings).
Needs: pip install torch --index-url https://download.pytorch.org/whl/cpu ; pip install kokoro soundfile ; ffmpeg.
"""
import argparse, datetime, json, os, subprocess, sys, tempfile, time

import numpy as np

SR = 24000
MAX_BUNDLE = 45 * 1024 * 1024
ORDER = {'cues': 0, 'terms': 1, 'words': 2, 'questions': 3, 'notes': 4}


def to_mp3(audio):
    """One standalone MP3 clip (the app plays each byte range as its own file)."""
    audio = np.asarray(audio, dtype=np.float32)
    peak = float(np.max(np.abs(audio))) if audio.size else 0
    if peak > 0:
        audio = audio * (0.89 / peak)  # about -1 dBFS, so every clip is equally loud
    pad = np.zeros(int(SR * 0.06), dtype=np.float32)
    audio = np.concatenate([pad, audio, pad])
    pcm = (np.clip(audio, -1, 1) * 32767).astype('<i2').tobytes()
    r = subprocess.run(['ffmpeg', '-loglevel', 'error', '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', 'pipe:0',
                        '-codec:a', 'libmp3lame', '-b:a', '96k', '-f', 'mp3', 'pipe:1'],
                       input=pcm, capture_output=True, check=True)
    return r.stdout


def say(pipe, text):
    """Whole text as one array; long texts come back in several chunks."""
    parts = [r.audio.numpy() if hasattr(r.audio, 'numpy') else np.asarray(r.audio)
             for r in pipe(text, voice='af_heart', speed=1.0) if r.audio is not None]
    return np.concatenate(parts) if parts else np.zeros(0, dtype=np.float32)


def say_word(pipe, word):
    """'<word>, please.' cut at the end of the word; falls back to the word alone."""
    try:
        for r in pipe(word + ', please.', voice='af_heart', speed=1.0):
            toks = getattr(r, 'tokens', None) or []
            audio = r.audio.numpy() if hasattr(r.audio, 'numpy') else np.asarray(r.audio)
            end = None
            for t in toks:
                if t.text.strip() in (',', 'please', '.'):
                    break
                if t.end_ts is not None:
                    end = t.end_ts
            if end:
                return audio[:int((end + 0.08) * SR)]
            break
    except Exception as e:  # noqa: BLE001 - any model hiccup: just say the word alone
        print('  word fallback:', word, e, file=sys.stderr)
    return say(pipe, word)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('missing')
    ap.add_argument('--minutes', type=float, default=240)
    ap.add_argument('--limit', type=int, default=0, help='stop after this many clips (0 = no limit)')
    ap.add_argument('--root', default='.')
    a = ap.parse_args()

    items = json.load(open(a.missing))['items']
    items.sort(key=lambda x: (ORDER.get(x['group'], 9), len(x['t'])))
    if a.limit:
        items = items[:a.limit]
    idx_path = os.path.join(a.root, 'audio', 'idx.json')
    idx = json.load(open(idx_path))
    items = [x for x in items if x['k'] not in idx['k']]
    print(f'{len(items)} clips to record, budget {a.minutes} min', flush=True)
    if not items:
        return

    from kokoro import KPipeline
    pipe = KPipeline(lang_code='a')  # American English

    day = datetime.date.today().strftime('%Y%m%d')
    letter, bundle, f, size = 0, None, None, 0

    def open_bundle():
        nonlocal letter, bundle, f, size
        while True:
            name = f'audio/v{day}{"abcdefghijklmnopqrstuvwxyz"[letter]}.txt'
            letter += 1
            if name not in idx['b'] and not os.path.exists(os.path.join(a.root, name)):
                break
        idx['b'].append(name)
        bundle, size = len(idx['b']) - 1, 0
        f = open(os.path.join(a.root, name), 'wb')
        print('new bundle', name, flush=True)

    def save():
        f.flush()
        tmp = idx_path + '.tmp'
        with open(tmp, 'w') as o:
            json.dump(idx, o, separators=(',', ':'))
        os.replace(tmp, idx_path)

    open_bundle()
    t0, done, last_save = time.time(), 0, time.time()
    for x in items:
        if time.time() - t0 > a.minutes * 60:
            print('time budget reached', flush=True)
            break
        try:
            audio = say_word(pipe, x['t']) if x['kind'] == 'w' else say(pipe, x['t'])
            if audio.size < SR * 0.1:
                print('  skipped (no audio):', x['t'][:60], file=sys.stderr)
                continue
            mp3 = to_mp3(audio)
        except Exception as e:  # noqa: BLE001 - one bad text must not stop the run
            print('  failed:', x['t'][:60], e, file=sys.stderr)
            continue
        if size + len(mp3) > MAX_BUNDLE:
            save(); f.close(); open_bundle()
        f.write(mp3)
        idx['k'][x['k']] = [bundle, size, len(mp3)]
        size += len(mp3)
        done += 1
        if done % 25 == 0 or time.time() - last_save > 60:
            save(); last_save = time.time()
            print(f'{done}/{len(items)} · {(time.time() - t0) / 60:.1f} min · {x["group"]}', flush=True)
    save(); f.close()
    if size == 0:  # nothing written to the last bundle: drop it again
        os.remove(os.path.join(a.root, idx['b'][bundle]))
        idx['b'].pop()
        for k, v in list(idx['k'].items()):
            if v[0] == bundle:
                del idx['k'][k]
        save()
    print(f'recorded {done} clips in {(time.time() - t0) / 60:.1f} min', flush=True)


if __name__ == '__main__':
    main()
