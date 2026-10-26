// StudyPrep for Windows: a window that opens the live app. The app's own offline cache
// keeps it working without internet after the first open, and every content update shows up by itself.
const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

const URL = 'https://3omid.github.io/studyprep/';
let win = null;

if (!app.requestSingleInstanceLock()) app.quit();
app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });

function create() {
  win = new BrowserWindow({
    width: 1280, height: 860, show: false, autoHideMenuBar: true, backgroundColor: '#0d1520',
    title: 'StudyPrep', icon: path.join(__dirname, 'icon.png'),
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  win.once('ready-to-show', () => { win.maximize(); win.show(); });
  // links that open a new window (Google Translate, help pages) go to the normal browser
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('did-fail-load', (e, code, desc, url, isMain) => {
    if (isMain && code !== -3) win.loadFile(path.join(__dirname, 'offline.html'));
  });
  win.loadURL(URL);
}

app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
