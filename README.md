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
- `audio/`: pre-recorded American English voice (Kokoro, voice `af_heart`) for cues, questions, notes and words. `idx.json` maps a text hash to a byte range in `w.bin` (single words) or `s.bin` (sentences). Missing text falls back to the device voice.
- Stats tab: study time, daily right/wrong, accuracy trend, week-over-week, scores. Data in `sp1_day`.
- Reading position is remembered (`sp1_rlast`, `sp1_rpos`).
