param(
  [switch]$History
)

$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
$gitleaks = Get-Command gitleaks -ErrorAction SilentlyContinue

if (-not $gitleaks) {
  throw "gitleaks is required for release validation. Install it or run an equivalent secret scan."
}

$args = @("detect", "--source", $Root, "--redact", "--verbose")
if (-not $History) {
  $args += "--no-git"
}

$previousCount = $env:GIT_CONFIG_COUNT
$previousKey = $env:GIT_CONFIG_KEY_0
$previousValue = $env:GIT_CONFIG_VALUE_0

if ($History) {
  $env:GIT_CONFIG_COUNT = "1"
  $env:GIT_CONFIG_KEY_0 = "safe.directory"
  $env:GIT_CONFIG_VALUE_0 = $Root
}

try {
  $previousPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  $output = & $gitleaks.Source @args 2>&1
  $exit = $LASTEXITCODE
}
finally {
  $ErrorActionPreference = $previousPreference
  $env:GIT_CONFIG_COUNT = $previousCount
  $env:GIT_CONFIG_KEY_0 = $previousKey
  $env:GIT_CONFIG_VALUE_0 = $previousValue
}

foreach ($item in $output) {
  if ($item -is [System.Management.Automation.ErrorRecord]) {
    $line = $item.Exception.Message
  } else {
    $line = [string]$item
  }
  if (-not [string]::IsNullOrWhiteSpace($line)) {
    Write-Host $line
  }
}
if ($exit -ne 0) {
  throw "gitleaks failed with exit code $exit"
}

if ($History) {
  $commitCount = & git -c safe.directory="$Root" rev-list --count HEAD
  if ([int]$commitCount -gt 0 -and (($output -join "`n") -match "0 commits scanned")) {
    throw "history scan did not inspect git commits"
  }
}

Write-Host "OK: secret scan"
