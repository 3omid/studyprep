# Tiny local web server for StudyPrep on Windows (no install needed).
# Started by StudyPrep-Windows.bat. Serves the app folder at http://localhost:8765/
param([int]$Port = 8765)
$root = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
  '.json'='application/json'; '.webmanifest'='application/manifest+json'; '.png'='image/png'; '.svg'='image/svg+xml';
  '.bin'='application/octet-stream'; '.mp3'='audio/mpeg' }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
while ($l.IsListening) {
  $c = $l.GetContext()
  try {
    $p = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath).TrimStart('/')
    if ($p -eq '') { $p = 'index.html' }
    $f = [IO.Path]::GetFullPath((Join-Path $root $p))
    if ($f.StartsWith($root) -and (Test-Path -LiteralPath $f -PathType Leaf) -and ($f -notmatch '\\\.git\\')) {
      $b = [IO.File]::ReadAllBytes($f)
      $t = $types[[IO.Path]::GetExtension($f).ToLower()]
      if (-not $t) { $t = 'application/octet-stream' }
      $c.Response.ContentType = $t
      $c.Response.Headers.Add('Cache-Control', 'no-cache')
      $c.Response.ContentLength64 = $b.Length
      $c.Response.OutputStream.Write($b, 0, $b.Length)
    } else { $c.Response.StatusCode = 404 }
  } catch {} finally { $c.Response.Close() }
}
