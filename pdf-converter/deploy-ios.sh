#!/bin/bash

# PDF Converter Pro - iOS Quick Deploy Script
# Deploys the app using Expo Go (easiest method)

set -e

echo "╔═══════════════════════════════════════════╗"
echo "║   PDF Converter Pro - iOS Deployment    ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the pdf-converter directory"
    exit 1
fi

echo "📱 Method: Expo Go (Quick Deploy)"
echo ""
echo "Prerequisites:"
echo "1. ✅ Install Expo Go on your iPhone"
echo "   → App Store: https://apps.apple.com/app/expo-go/id982107779"
echo ""
echo "2. ✅ Connect iPhone and computer to SAME WiFi network"
echo ""
echo "Press Enter when ready..."
read

echo ""
echo "🚀 Starting development server..."
echo ""

# Start Expo development server
npm start

echo ""
echo "═══════════════════════════════════════════"
echo "Deployment complete! 🎉"
echo ""
echo "Next steps:"
echo "1. Open Camera app on iPhone"
echo "2. Scan the QR code above"
echo "3. Tap notification to open in Expo Go"
echo "4. App will load on your iPhone!"
echo "═══════════════════════════════════════════"
