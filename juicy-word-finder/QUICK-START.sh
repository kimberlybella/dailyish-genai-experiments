#!/bin/bash

echo "🍊 Juicy Word Finder - Quick Setup"
echo "=================================="
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.local.example .env.local
    echo ""
    echo "⚠️  IMPORTANT: Edit .env.local and add your Anthropic API key!"
    echo "   Get your key from: https://console.anthropic.com/"
    echo ""
    read -p "Press Enter after you've added your API key to .env.local..."
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Start dev server
echo ""
echo "🚀 Starting development server..."
echo "   Your app will open at http://localhost:3000"
echo ""
npm run dev
