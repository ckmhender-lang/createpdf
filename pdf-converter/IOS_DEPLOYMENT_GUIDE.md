# iOS Deployment Guide 📱

Complete guide to deploy PDF Converter Pro on iOS devices.

## 🎯 Deployment Options

There are 3 main ways to deploy the app on iOS:

1. **Expo Go** (Quickest - Development/Testing)
2. **Development Build** (Custom native code)
3. **Production Build** (App Store/TestFlight)

---

## Method 1: Expo Go (Recommended for Testing) ⚡

**Best for**: Quick testing, development, sharing with testers

### Prerequisites
- iPhone or iPad
- Same WiFi network as your computer

### Steps:

#### 1. Install Expo Go on Your iPhone

Download from App Store: https://apps.apple.com/app/expo-go/id982107779

#### 2. Start Development Server

```bash
cd pdf-converter
npm start
```

#### 3. Connect Your iPhone

**Option A: Scan QR Code**
- Open Camera app on iPhone
- Point at the QR code in terminal
- Tap the notification to open in Expo Go

**Option B: Manual Connection**
- Open Expo Go app
- Tap "Enter URL manually"
- Type the URL from terminal (e.g., `exp://192.168.1.100:8081`)

#### 4. Test the App

The app will load on your iPhone with full functionality!

### Pros ✅
- ✅ Instant deployment (seconds)
- ✅ No Apple Developer account needed
- ✅ Easy sharing with testers
- ✅ Hot reloading during development

### Cons ⚠️
- ⚠️ Requires Expo Go app
- ⚠️ Can't customize app icon/splash in Expo Go
- ⚠️ Limited to Expo SDK features

---

## Method 2: Development Build (Custom Build) 🛠️

**Best for**: Testing custom native code, full customization

### Prerequisites
- Apple Developer Account ($99/year)
- macOS computer (for local builds) OR
- EAS Build account (for cloud builds)

### Option 2A: EAS Build (Cloud - Recommended)

#### 1. Install EAS CLI

```bash
npm install -g eas-cli
```

#### 2. Login to Expo Account

```bash
eas login
```

#### 3. Configure EAS Build

```bash
cd pdf-converter
eas build:configure
```

This creates `eas.json` configuration file.

#### 4. Build for iOS Device

```bash
eas build --platform ios --profile development
```

**What happens:**
- Build runs in the cloud
- Takes 10-20 minutes
- You'll get a download link

#### 5. Install on Your iPhone

**Option A: Download directly on iPhone**
- Open the build URL on your iPhone
- Tap "Install"
- Go to Settings > General > VPN & Device Management
- Trust the developer profile

**Option B: Install via Apple Configurator 2**
- Download the `.ipa` file on Mac
- Install Apple Configurator 2
- Connect iPhone via USB
- Drag `.ipa` to Apple Configurator

#### 6. Start Development Server

```bash
npm start
```

The app on your phone will connect to the dev server.

### Option 2B: Local Build (Requires macOS)

#### 1. Install Xcode

Download from Mac App Store (free, but large ~12GB)

#### 2. Install CocoaPods

```bash
sudo gem install cocoapods
```

#### 3. Build Locally

```bash
cd pdf-converter
eas build --platform ios --profile development --local
```

#### 4. Install the Generated `.ipa`

Use Xcode or Apple Configurator 2 to install on device.

### Pros ✅
- ✅ Full app customization
- ✅ Can use any native modules
- ✅ Looks like a real app
- ✅ No Expo Go needed

### Cons ⚠️
- ⚠️ Requires Apple Developer account
- ⚠️ Longer build time (10-20 min)
- ⚠️ More complex setup

---

## Method 3: Production Build (App Store Ready) 🚀

**Best for**: Final app release, TestFlight distribution

### Prerequisites
- Apple Developer Account ($99/year)
- App Store Connect access

### Steps:

#### 1. Configure App Identifier

Update `app.json`:

```json
{
  "expo": {
    "name": "PDF Converter Pro",
    "slug": "pdf-converter",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.yourcompany.pdfconverter",
      "buildNumber": "1"
    }
  }
}
```

#### 2. Create App in App Store Connect

1. Go to https://appstoreconnect.apple.com
2. Click "My Apps" > "+" > "New App"
3. Fill in app details
4. Use same bundle identifier as `app.json`

#### 3. Build for Production

```bash
eas build --platform ios --profile production
```

This creates an App Store-ready build.

#### 4. Submit to App Store

**Option A: Automatic Submit**
```bash
eas submit --platform ios
```

**Option B: Manual Submit**
1. Download the `.ipa` file
2. Use Xcode or Transporter app
3. Upload to App Store Connect

#### 5. TestFlight Distribution

1. Go to App Store Connect
2. Select your app
3. Go to TestFlight tab
4. Add internal/external testers
5. Distribute build

Testers can install via TestFlight app!

### Pros ✅
- ✅ Professional distribution
- ✅ TestFlight for beta testing
- ✅ App Store ready
- ✅ Automatic updates

### Cons ⚠️
- ⚠️ Requires Apple Developer account
- ⚠️ App Store review process
- ⚠️ More complex setup

---

## 🔧 Troubleshooting

### Issue: "Unable to install app"

**Solution:**
```bash
# Check provisioning profile
eas credentials

# Rebuild with new profile
eas build --platform ios --clear-cache
```

### Issue: "App crashes on launch"

**Solution:**
```bash
# Check logs
eas build:list
eas build:view [BUILD_ID]

# Clear cache and rebuild
npm start -- --clear
eas build --platform ios --clear-cache
```

### Issue: "Cannot connect to dev server"

**Solution:**
- Ensure iPhone and computer are on same WiFi
- Disable VPN on both devices
- Use tunnel mode: `npm start -- --tunnel`

### Issue: Build fails with "No valid code signing"

**Solution:**
```bash
# Configure credentials
eas credentials

# Let EAS manage credentials automatically
eas build --platform ios
```

---

## 📱 Quick Comparison

| Method | Time | Cost | Best For |
|--------|------|------|----------|
| **Expo Go** | 1 min | Free | Development, quick testing |
| **Development Build** | 15 min | $99/year* | Custom features, testing |
| **Production Build** | 20 min | $99/year* | App Store, TestFlight |

*Apple Developer Account required

---

## 🎯 Recommended Workflow

### For Development
```bash
# Use Expo Go
npm start
# Scan QR code with iPhone
```

### For Beta Testing
```bash
# Build development version
eas build --platform ios --profile development

# Or use TestFlight
eas build --platform ios --profile production
eas submit --platform ios
```

### For Production
```bash
# Build for App Store
eas build --platform ios --profile production
eas submit --platform ios
```

---

## 💡 Pro Tips

### 1. Sharing with Testers (Expo Go)

Create a shareable link:
```bash
npm start
# Share the QR code or URL with testers
```

### 2. Internal Distribution (No App Store)

Use Ad-hoc provisioning:
```json
// eas.json
{
  "build": {
    "adhoc": {
      "ios": {
        "distribution": "adhoc"
      }
    }
  }
}
```

```bash
eas build --platform ios --profile adhoc
```

### 3. Automatic Version Bumping

Update version in `app.json` before each build:
```json
{
  "version": "1.0.1",
  "ios": {
    "buildNumber": "2"
  }
}
```

---

## 🚀 Getting Started Now

### Quickest Way (1 minute):

```bash
cd pdf-converter
npm start
```

Then on your iPhone:
1. Open App Store
2. Download "Expo Go"
3. Scan QR code from terminal
4. App loads! ✨

### Professional Way (20 minutes):

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build
eas build --platform ios --profile development

# Install on device
# Follow the download link sent to you
```

---

## 📚 Additional Resources

- [Expo Go App](https://apps.apple.com/app/expo-go/id982107779)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [Apple Developer Program](https://developer.apple.com/programs/)
- [App Store Connect](https://appstoreconnect.apple.com/)
- [TestFlight Guide](https://developer.apple.com/testflight/)

---

## ✅ Checklist

Before deploying:
- [ ] Tested app in Expo Go
- [ ] Updated app version in `app.json`
- [ ] Configured bundle identifier (for native builds)
- [ ] Apple Developer Account (for native builds)
- [ ] Updated app icon and splash screen
- [ ] Tested on target iOS version
- [ ] Reviewed app permissions
- [ ] Prepared app store assets (if publishing)

---

## 🆘 Need Help?

Common commands:
```bash
# Check build status
eas build:list

# View build details
eas build:view [BUILD_ID]

# Cancel running build
eas build:cancel

# Check credentials
eas credentials

# Clear cache
npm start -- --clear
```

---

**Choose the method that fits your needs and follow the steps above!**

For quick testing: **Use Expo Go** (Method 1)  
For full features: **Use EAS Build** (Method 2)  
For App Store: **Use Production Build** (Method 3)

🎉 **Happy deploying!** 🎉
