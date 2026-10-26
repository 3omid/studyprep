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

## Android and Windows apps
`.github/workflows/apps.yml` builds `StudyPrep.apk` (Capacitor, `native/android`) and `StudyPrep-Setup.exe` (Electron, `native/windows`) and publishes them on the **apps** release:
- https://github.com/3omid/studyprep/releases/latest/download/StudyPrep.apk
- https://github.com/3omid/studyprep/releases/latest/download/StudyPrep-Setup.exe

Both open the live site (https://3omid.github.io/studyprep/), so content updates arrive without a new build. The workflow runs again only when `native/`, `icons/` or the workflow changes, or by hand from the Actions tab. The APK is signed with the fixed key in `native/android/debug.keystore`, so a newer APK installs over the old one.
