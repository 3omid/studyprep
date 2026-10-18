@echo off
rem Double-click to open StudyPrep on Windows.
cd /d "%~dp0"
title StudyPrep

rem 1) Get the latest version (only if this folder was downloaded with git)
if exist ".git" (
  where git >nul 2>nul && git pull --ff-only -q
)

rem 2) Start the local server if it is not already running
powershell -NoProfile -Command "try{(New-Object Net.Sockets.TcpClient('localhost',8765)).Close();exit 0}catch{exit 1}"
if errorlevel 1 (
  start "StudyPrep server" /min powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0windows\serve.ps1"
  timeout /t 2 /nobreak >nul
)

rem 3) Open the app in its own window (Microsoft Edge comes with Windows)
start "" msedge --app=http://localhost:8765/ || start "" http://localhost:8765/
