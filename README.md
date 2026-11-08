# StudyPrep

Offline-capable practice and exam app. Runs in any modern browser and installs as an app on iPhone, Android, Windows, Mac and Linux.

## Run locally
    python3 -m http.server 8080
Open http://localhost:8080

## Add a course
1. Put a pack file in `packs/` (see `packs/secplus.js` for the format).
2. Add one `<script src="packs/yourpack.js"></script>` line to `index.html`.
3. Add the file to the `FILES` list in `sw.js` and change `VERSION`.

Or paste/upload a pack JSON in the app under Courses > Add a course (no code needed).

## v4 additions
- `dict.js`: built-in English + Persian dictionary (works offline).
- `audio/`: pre-recorded American English voice (Kokoro-82M, voice af_heart, 96 kbps MP3) for cues, questions and every tappable word and glossary term. Single words are said as "<word>, please." and cut out by the model's timestamps, because a lone word said slowly got an extra sound in front of it. `idx.json` maps a text hash to a byte range in `w3.txt` (single words and short terms) or `s3.txt` (sentences). A new voice set gets new bundle names, because the app caches bundles by name. They are MP3 data; the `.txt` name keeps download managers such as IDM from grabbing them. Missing text falls back to the device voice.
  New recordings are added with `tools/voice/`: `node tools/voice/texts.js . /tmp/missing.json` lists every text the app can read aloud that has no recording yet (questions, notes lines, tappable words, glossary terms, cues), and `python tools/voice/build_voice.py /tmp/missing.json --minutes 180` records them with Kokoro af_heart into new bundles (`audio/v<date><letter>.txt`, at most 45 MB each) and adds them to `idx.json`. Old bundles never change. Kokoro needs Python 3.12 (one of its dependencies does not build on 3.13): `uv venv -p python3.12 kenv`, then install `torch` from the PyTorch CPU index and `kokoro soundfile pip` into it. A weekly scheduled session runs this and merges the result.
- Stats tab: study time, daily right/wrong, accuracy trend, week-over-week, scores. Data in `sp1_day`.
- Reading position is remembered (`sp1_rlast`, `sp1_rpos`).

## v5 additions
- Menu bar (Home, Learn, Courses, Stats, Settings) on every page, including practice, exams and reading.
- Bigger text by default, plus a Huge size.
- Dark / light background and 38 colour themes copied from Shift Priority (`themes.js`).
- Exam coach on Home: exam date countdown, readiness estimate, daily goal, weakest sections, next step, last studied.
- Backup to a file and restore from a file (all progress, stats, reading position, settings, courses).
- Windows: double-click `StudyPrep-Windows.bat` once. It starts a small local server (also at every Windows start) and opens the app. The server downloads the newest version from GitHub by itself when the app is opened, so closing and reopening the app is enough to get updates.

## v6 additions
- AI tutor: after answering a question (not in Exam mode), tap “Ask AI” to have it explained in Persian or English and ask follow-up questions. Set it up in Settings → AI tutor: pick a provider (Google Gemini, OpenRouter or Groq, all with free plans), paste your own free key and optionally a model name. The key stays in this browser only (`sp1_aikey`) and is not included in backups. Providers live in the `AIP` table in `app.js`; any OpenAI-compatible service can be added with one entry.

## Security+ course and textbook
- `packs/secplus*.js` (not `-book`) = the course modules (pack `secplus`, sections 1–14 and R7-8).
- `packs/secbook.js` + `packs/secplus-book<N>.js` = the textbook, Chapple & Seidl 9th ed. (pack `secbook`, chapters 1–17). Each chapter file adds section `'<N>'`, its questions and its notes. Question ids stay `secplus:b<N>_<n>` so progress made before the split is kept; old reading marks under `secplus:B<N>` are moved once at start-up.
- Learn shows one of them at a time (switch at the top). Home → **Security+ mock exam** = 90 questions in 90 minutes from both, including scenario questions.
- `packs/defsec2.js` (Sheridan Defensive Security 2) is loaded but starts switched off (`defOff`); turn it on in Courses.

## Android and Windows apps
`.github/workflows/apps.yml` builds `StudyPrep.apk` (Capacitor, `native/android`) and `StudyPrep-Setup.exe` (Electron, `native/windows`) and publishes them on the **apps** release:
- https://github.com/3omid/studyprep/releases/latest/download/StudyPrep.apk
- https://github.com/3omid/studyprep/releases/latest/download/StudyPrep-Setup.exe

Both open the live site (https://3omid.github.io/studyprep/), so content updates arrive without a new build. The workflow runs again only when `native/`, `icons/` or the workflow changes, or by hand from the Actions tab. The APK is signed with the fixed key in `native/android/debug.keystore`, so a newer APK installs over the old one.

## Game look and theme menu
- Settings → Look → **Colour theme** is one button that opens a theme sheet with three tabs (Game, Cars, Colours) and a preview of each theme. Tapping a theme applies it at once and keeps the page where it was.
- **Game themes** (`g-*` rows in `themes.js`): Arena, Royal Night, Jungle, Lava, Frost and Desert. Each has a picture background drawn in code as SVG (`window.SCENES`), so no image files are needed and it works offline.
- The game look (picture background, outlined panels, glossy 3D buttons, the Lilita One display font, dark menu bar, player bar on Home and Play) is on every page (`body.gskin`). Game themes add their own picture background; other themes use the Arena picture.

## Mock Final Quiz (150 questions)
- `packs/secfinal.js`, `secfinal2.js`, `secfinal3.js` = pack `secfinal`: the 150 questions of the Mock CompTIA Security+ Exam (Final Quiz) taken Nov 5, 2026 (first attempt 92.67%, 139/150), with Persian translation, hints and explanations, grouped into 7 parts with study notes. Each question keeps its original number (`n`); `x` marks the option chosen on the first attempt when it was wrong.
- Exam tab (and Home) → **Mock Final Quiz** opens its page:
  - **Take the exam again**: full exam in the original order, shuffled, or a 75-question half exam; timer on or off. Retake scores are kept (`sp1_fhist`) and compared with the first attempt.
  - **Learn these questions**: study all 150 one by one with explanations, drill the 11 original mistakes, smart review, the answer sheet, and notes + study session per part.
  - **Add to the general question pool**: the switch (same as the course switch in Courses) puts the 150 questions into Practice, Smart review, Play, custom exams and the Security+ mock exam, or keeps them only on this page. Parts can be switched one by one in Courses.
