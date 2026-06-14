$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")

Get-ChildItem -LiteralPath $Root -Recurse -Filter "*.ps1" | ForEach-Object {
  $null = [scriptblock]::Create((Get-Content -LiteralPath $_.FullName -Raw))
}

Get-ChildItem -LiteralPath $Root -Recurse -Filter "*.mjs" | ForEach-Object {
  & node --check $_.FullName | Out-Null
}

$bash = Get-Command bash -ErrorAction SilentlyContinue
if ($bash) {
  Get-ChildItem -LiteralPath $Root -Recurse -Filter "*.sh" | ForEach-Object {
    & bash -n $_.FullName
  }
}

Write-Host "OK: script syntax"
