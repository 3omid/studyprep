# Tiny local web server for StudyPrep on Windows (no install needed).
# Started by StudyPrep-Windows.bat / with Windows. Serves the app folder at http://localhost:8765/
# and fetches the newest version from GitHub when the app is opened (at most every 2 minutes).
param([int]$Port = 8765)
$root = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
. (Join-Path $PSScriptRoot 'update.ps1')
Update-StudyPrep $root
$lastCheck = Get-Date
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
  '.json'='application/json'; '.webmanifest'='application/manifest+json'; '.png'='image/png'; '.svg'='image/svg+xml';
  '.txt'='text/plain'; '.mp3'='audio/mpeg' }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
while ($l.IsListening) {
  $c = $l.GetContext()
  try {
    $p = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath).TrimStart('/')
    if ($p -eq '') { $p = 'index.html' }
    if ($p -eq 'index.html' -and ((Get-Date) - $lastCheck).TotalMinutes -ge 2) { Update-StudyPrep $root; $lastCheck = Get-Date }
    $f = [IO.Path]::GetFullPath((Join-Path $root $p))
    if ($f.StartsWith($root) -and (Test-Path -LiteralPath $f -PathType Leaf) -and ($f -notmatch '\\\.git\\')) {
      $b = [IO.File]::ReadAllBytes($f)
      $t = $types[[IO.Path]::GetExtension($f).ToLower()]
      if (-not $t) { $t = 'application/octet-stream' }
      $c.Response.ContentType = $t
      $c.Response.Headers.Add('Cache-Control', 'no-cache')
      $c.Response.Headers.Add('X-StudyPrep', '2')
      $c.Response.ContentLength64 = $b.Length
      $c.Response.OutputStream.Write($b, 0, $b.Length)
    } else { $c.Response.StatusCode = 404 }
  } catch {} finally { $c.Response.Close() }
}
