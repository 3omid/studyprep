# Started by StudyPrep-Windows.bat: makes sure the local server runs (and starts with
# Windows), then opens the app. The server keeps the app up to date by itself.
$root = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$serve = Join-Path $root 'windows\serve.ps1'
function Test-Up { try { (New-Object Net.Sockets.TcpClient('localhost', 8765)).Close(); $true } catch { $false } }

# Start the server with Windows, so the app icon always works and always updates
try {
  $lnk = Join-Path ([Environment]::GetFolderPath('Startup')) 'StudyPrep server.lnk'
  $s = (New-Object -ComObject WScript.Shell).CreateShortcut($lnk)
  $s.TargetPath = 'powershell.exe'
  $s.Arguments = "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$serve`""
  $s.WindowStyle = 7
  $s.Save()
} catch {}

# A server from an older version (without self-update) is replaced by the new one
if (Test-Up) {
  $new = $false
  try { $new = [bool]((Invoke-WebRequest -Uri 'http://localhost:8765/index.html' -UseBasicParsing -TimeoutSec 5).Headers['X-StudyPrep']) } catch {}
  if (-not $new) {
    Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" | Where-Object { $_.CommandLine -like '*serve.ps1*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
    Start-Sleep -Seconds 1
  }
}

if (-not (Test-Up)) {
  Write-Host 'Starting StudyPrep (checking for updates)...'
  Start-Process powershell -WindowStyle Hidden -ArgumentList '-NoProfile', '-ExecutionPolicy', 'Bypass', '-WindowStyle', 'Hidden', '-File', "`"$serve`""
  for ($i = 0; $i -lt 300 -and -not (Test-Up); $i++) { Start-Sleep -Milliseconds 500 }
}
try { Start-Process msedge -ArgumentList '--app=http://localhost:8765/', '--start-maximized' -ErrorAction Stop }
catch { Start-Process 'http://localhost:8765/' }
