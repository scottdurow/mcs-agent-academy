#!/usr/bin/env pwsh
# Simple MkDocs Server Script
# This script checks dependencies and serves the documentation site

Write-Host "MkDocs Documentation Server" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is available
Write-Host "Checking Python..." -ForegroundColor Yellow
try {
    $pythonVersion = python --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ $pythonVersion" -ForegroundColor Green
    } else {
        throw "Python not found"
    }
} catch {
    Write-Host "❌ Python not found. Please install Python 3.8+ or activate your virtual environment." -ForegroundColor Red
    exit 1
}

# Check if MkDocs is installed
Write-Host "Checking MkDocs..." -ForegroundColor Yellow
try {
    $mkdocsVersion = mkdocs --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ $mkdocsVersion" -ForegroundColor Green
    } else {
        throw "MkDocs not found"
    }
} catch {
    Write-Host "❌ MkDocs not found. Installing..." -ForegroundColor Yellow
    pip install mkdocs
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install MkDocs" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ MkDocs installed" -ForegroundColor Green
}

# Check if Material theme is installed
Write-Host "Checking Material theme..." -ForegroundColor Yellow
try {
    python -c "import material" 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Material theme available" -ForegroundColor Green
    } else {
        throw "Material theme not found"
    }
} catch {
    Write-Host "❌ Material theme not found. Installing..." -ForegroundColor Yellow
    pip install mkdocs-material
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install Material theme" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Material theme installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Starting MkDocs server..." -ForegroundColor Green
Write-Host "📖 Documentation will be available at: http://127.0.0.1:8000/agent-academy/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the MkDocs server
mkdocs serve
