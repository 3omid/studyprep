# Brings the app folder up to date with the main branch on GitHub.
# Used by serve.ps1. Does nothing when offline or already up to date.
function Update-StudyPrep([string]$root) {
  try {
    if (Test-Path (Join-Path $root '.git')) { git -C $root pull --ff-only -q 2>$null; return }
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $verFile = Join-Path $root 'windows/installed.txt'
    $sha = (Invoke-RestMethod -Uri 'https://api.github.com/repos/3omid/studyprep/commits/main' -Headers @{ 'User-Agent' = 'StudyPrep' } -TimeoutSec 8).sha
    $have = ''
    if (Test-Path $verFile) { $have = (Get-Content $verFile -Raw).Trim() }
    if (-not $sha -or $sha -eq $have) { return }
    $tmp = Join-Path $env:TEMP ('studyprep-' + $sha.Substring(0, 7))
    $zip = "$tmp.zip"
    Invoke-WebRequest -Uri "https://codeload.github.com/3omid/studyprep/zip/$sha" -OutFile $zip -UseBasicParsing -TimeoutSec 300
    if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
    Expand-Archive -Path $zip -DestinationPath $tmp -Force
    $src = Get-ChildItem $tmp -Directory | Select-Object -First 1
    Copy-Item -Path (Join-Path $src.FullName '*') -Destination $root -Recurse -Force
    Set-Content -Path $verFile -Value $sha
    Remove-Item $zip, $tmp -Recurse -Force -ErrorAction SilentlyContinue
  } catch {}
}
