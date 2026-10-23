# Commits and pushes edits to PLAN.md and milestones/*.md.
# Called by a Claude Code PostToolUse hook; the hook JSON arrives on stdin.
$ErrorActionPreference = 'Stop'
$env:Path += ";C:\Program Files\Git\cmd"

$raw = [Console]::In.ReadToEnd()
if (-not $raw) { exit 0 }
$path = ($raw | ConvertFrom-Json).tool_input.file_path
if (-not $path) { exit 0 }

$repo = Split-Path -Parent $PSScriptRoot
$full = [System.IO.Path]::GetFullPath($path)
$rel = $full.Substring([Math]::Min($repo.Length, $full.Length)).TrimStart('\','/') -replace '\\','/'
if (-not $full.StartsWith($repo, [System.StringComparison]::OrdinalIgnoreCase)) { exit 0 }
if ($rel -ne 'PLAN.md' -and $rel -notlike 'milestones/*.md') { exit 0 }

Set-Location $repo
git add -- PLAN.md milestones
git diff --cached --quiet -- PLAN.md milestones
if ($LASTEXITCODE -eq 0) { exit 0 }   # nothing staged

git commit -m "Update plan: $rel" -- PLAN.md milestones | Out-Null
git push -u origin HEAD | Out-Null
Write-Output "Plan edit pushed ($rel)"
