# iOS Deployment - Quick Reference

## 🚀 3 Ways to Deploy

### 1. Expo Go (Fastest - 1 minute)

**Perfect for**: Testing, development, demos

```bash
cd pdf-converter
npm start
```

Then on iPhone:
1. Install Expo Go from App Store
2. Scan QR code with Camera app
3. App opens! ✨

**Pros**: Instant, no setup needed
**Cons**: Shows Expo branding, requires Expo Go app

---

### 2. Development Build (20 minutes)

**Perfect for**: Full app experience, custom branding

```bash
# One-time setup
npm install -g eas-cli
eas login
eas build:configure

# Build
eas build --platform ios --profile development
```

Then:
1. Click download link on iPhone
2. Install the app
3. Trust developer in Settings

**Pros**: Real app, custom icon
**Cons**: Needs Apple Developer account ($99/year)

---

### 3. TestFlight/App Store (30 minutes)

**Perfect for**: Beta testing, production release

```bash
# Build
eas build --platform ios --profile production

# Submit
eas submit --platform ios
```

Then:
1. Go to App Store Connect
2. Distribute via TestFlight
3. Testers install via TestFlight app

**Pros**: Professional distribution
**Cons**: Needs Apple Developer account, review process

---

## 🎯 Recommendation

**For you right now**: Use **Method 1 (Expo Go)**

It's the fastest way to see your app running on your iPhone!

### Quick Start:

```bash
cd pdf-converter
./deploy-ios.sh
```

Or manually:

```bash
cd pdf-converter
npm start
```

Then scan the QR code! 📱

---

## 📋 Prerequisites by Method

| What You Need | Expo Go | Dev Build | Production |
|---------------|---------|-----------|------------|
| iPhone | ✅ | ✅ | ✅ |
| Same WiFi | ✅ | - | - |
| Expo Go app | ✅ | - | - |
| Apple Developer ($99/year) | - | ✅ | ✅ |
| macOS (optional) | - | Optional | Optional |

---

## 🆘 Common Issues

### "Cannot connect to dev server"
```bash
# Use tunnel mode
npm start -- --tunnel
```

### "Build failed"
```bash
# Clear cache and retry
eas build --platform ios --clear-cache
```

### "App won't install"
- Go to Settings > General > VPN & Device Management
- Trust the developer profile

---

## 📚 Full Guide

See **IOS_DEPLOYMENT_GUIDE.md** for complete instructions!

---

## ✨ Quick Commands

```bash
# Start with Expo Go
npm start

# Build development version
eas build --platform ios --profile development

# Build production version
eas build --platform ios --profile production

# Submit to App Store
eas submit --platform ios

# Check build status
eas build:list

# Use easy deploy script
./deploy-ios.sh
```

---

## 🎉 Ready to Deploy?

### Try it now:

1. **On your iPhone**: Install Expo Go from App Store
2. **On your computer**: Run `cd pdf-converter && npm start`
3. **Scan QR code** with iPhone Camera app
4. **Enjoy!** Your app is running on your iPhone! 🎊

---

**Choose your method and start deploying!** 🚀
