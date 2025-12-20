# Quick Start Guide 🚀

Get your PDF Converter Pro app running in 5 minutes!

## Prerequisites Check

Before starting, verify you have:

- ✅ Node.js (v18+): Run `node --version`
- ✅ npm: Run `npm --version`
- ✅ Smartphone with Expo Go app installed

## Installation (3 steps)

### Step 1: Install Dependencies

```bash
cd pdf-converter
npm install
```

This will install all required packages (~60 packages).

### Step 2: Start Development Server

```bash
npm start
```

You should see a QR code in your terminal.

### Step 3: Run on Your Phone

**iPhone:**
1. Open Camera app
2. Scan the QR code
3. Tap the notification to open in Expo Go

**Android:**
1. Open Expo Go app
2. Tap "Scan QR Code"
3. Scan the QR code from terminal

## What You Should See

Upon launching, you'll see:

1. **Home Screen** with:
   - Welcome message
   - Stats card (Quick, Secure, Easy to Use)
   - 4 feature cards
   - Privacy information

2. **Bottom Navigation** with 4 tabs:
   - Home 🏠
   - Convert 🖼️
   - Merge 📑
   - Documents 📁

## Try These Features

### 1️⃣ Convert Images to PDF (30 seconds)

1. Tap **"Convert"** tab at bottom
2. Tap **"Pick Images"** button
3. Select 1-3 photos from your gallery
4. Tap **"Convert to PDF"**
5. View your PDF in **"Documents"** tab!

### 2️⃣ View Your Documents (10 seconds)

1. Tap **"Documents"** tab
2. See your created PDF
3. Tap the share icon to send it anywhere
4. Pull down to refresh the list

### 3️⃣ Take a Photo & Convert (20 seconds)

1. Go to **"Convert"** tab
2. Tap **"Take Photo"** button
3. Take a photo with your camera
4. Tap **"Convert to PDF"**
5. Done! 

## Troubleshooting

### QR Code Not Working?

**Solution 1:** Type the URL manually
- Look for the line: `exp://192.168.x.x:8081`
- Type this in Expo Go's "Enter URL manually"

**Solution 2:** Use tunnel mode
```bash
npm start -- --tunnel
```

### "Permission Denied" Error?

Make sure to:
- Allow camera access when prompted
- Allow photo library access when prompted
- Check Settings > [App Name] > Permissions

### App Won't Start?

Try clearing cache:
```bash
npm start -- --clear
```

### Still Having Issues?

1. Check you're on the same WiFi network (phone & computer)
2. Restart the Expo Go app
3. Restart the development server (`npm start`)
4. Check firewall settings

## Common Commands

```bash
# Start development server
npm start

# Start with cache cleared
npm start -- --clear

# Start with tunnel (slower, but works across networks)
npm start -- --tunnel

# Run on iOS simulator (macOS only)
npm run ios

# Run on Android emulator
npm run android

# Run on web browser (limited features)
npm run web
```

## Next Steps

Now that your app is running:

1. ✅ Try all features
2. ✅ Convert some images to PDF
3. ✅ Share a PDF to another app
4. ✅ Read the full README.md for advanced features
5. ✅ Customize colors in `src/constants/colors.ts`

## Development Tips

### Making Changes

1. Edit any `.tsx` file
2. Save the file
3. App reloads automatically!
4. See changes instantly

### Recommended First Edits

Try these safe edits to see hot reload:

**Change App Colors:**
```typescript
// src/constants/colors.ts
export const Colors = {
  primary: '#FF6B6B', // Change to red
  // ...
};
```

**Change Home Screen Text:**
```typescript
// src/screens/HomeScreen.tsx
<Text style={styles.greeting}>Welcome!</Text>
// Change to: <Text style={styles.greeting}>Hello, Developer!</Text>
```

Save and watch it update instantly! 🎉

## File Structure Overview

```
pdf-converter/
├── src/               # All app code
│   ├── components/    # Reusable UI components
│   ├── screens/       # App screens
│   ├── navigation/    # Navigation setup
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Helper functions
│   ├── types/         # TypeScript types
│   └── constants/     # Colors, theme, etc.
├── App.tsx           # Main entry point
└── README.md         # Full documentation
```

## Getting Help

- 📖 Read [README.md](./README.md) for full documentation
- 📚 Check [DOCUMENTATION.md](./DOCUMENTATION.md) for detailed info
- 🐛 Found a bug? Check [CONTRIBUTING.md](./CONTRIBUTING.md)
- 💬 [Expo Documentation](https://docs.expo.dev/)
- 💬 [React Native Documentation](https://reactnative.dev/)

## Success Checklist

After 5 minutes, you should have:

- ✅ App running on your phone
- ✅ Converted at least one image to PDF
- ✅ Viewed your PDF in Documents tab
- ✅ Shared a PDF to another app
- ✅ Understood the basic app structure

**Congratulations! You're all set! 🎉**

---

Need help? Check the full README.md or open an issue on GitHub.

Happy coding! 💻📱
