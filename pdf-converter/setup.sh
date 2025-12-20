#!/bin/bash

# PDF Converter Pro - Setup Script
# This script helps you get started with the app

set -e

echo "📱 PDF Converter Pro - Setup Script"
echo "======================================"
echo ""

# Check Node.js
echo "Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js $NODE_VERSION found"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm $NPM_VERSION found"

echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Next steps:"
echo ""
echo "1. Start the development server:"
echo "   npm start"
echo ""
echo "2. Install Expo Go on your phone:"
echo "   iOS: https://apps.apple.com/app/expo-go/id982107779"
echo "   Android: https://play.google.com/store/apps/details?id=host.exp.exponent"
echo ""
echo "3. Scan the QR code with:"
echo "   iOS: Camera app"
echo "   Android: Expo Go app"
echo ""
echo "📚 For more information:"
echo "   - Read QUICKSTART.md for a 5-minute guide"
echo "   - Read README.md for complete documentation"
echo "   - Read DOCUMENTATION.md for technical details"
echo ""
echo "Happy coding! 🎉"
