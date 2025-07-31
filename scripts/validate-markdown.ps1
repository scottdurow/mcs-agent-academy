#!/usr/bin/env pwsh
# Simple Markdown Validation Script
# This script runs markdownlint and cSpell on all markdown files

Write-Host "Running markdownlint validation..." -ForegroundColor Cyan
markdownlint-cli2 "**/*.md" "!.venv"

Write-Host ""
Write-Host "Running spell check..." -ForegroundColor Cyan
cspell --no-progress --no-summary "**/*.md"
