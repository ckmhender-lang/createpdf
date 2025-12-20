# 📱 PDF Converter Pro

<div align="center">

**A modern, feature-rich mobile app for converting images to PDFs and managing PDF documents**

Built with React Native, Expo & TypeScript

[Quick Start](#-quick-start) • [Features](#-features) • [Documentation](#-documentation) • [Demo](#-demo)

</div>

---

## 🚀 Quick Start

Get up and running in **3 simple steps**:

```bash
# 1. Navigate to project
cd pdf-converter

# 2. Install dependencies  
npm install

# 3. Start the app
npm start
```

Then scan the QR code with Expo Go on your phone!

📖 **New to the project?** Read [QUICKSTART.md](./pdf-converter/QUICKSTART.md) for a 5-minute tutorial.

---

## ✨ Features

### Core Features
- 📸 **Image to PDF** - Convert multiple images into a single PDF
- 📷 **Camera Integration** - Take photos and instantly convert to PDF
- 🔗 **PDF Merging** - Combine multiple PDFs into one document
- 📁 **Document Library** - Manage all your PDFs in one place
- 📤 **Easy Sharing** - Share PDFs to any app with native share sheet
- 🗑️ **File Management** - Delete unwanted PDFs with confirmation

### Technical Highlights
- ⚡ **Lightning Fast** - Optimized performance on all devices
- 🎨 **Modern UI** - Beautiful, intuitive interface
- 🔒 **Privacy First** - All processing happens locally
- 📱 **Cross Platform** - Works on iOS & Android
- 💪 **Type Safe** - Built with TypeScript
- 🎯 **Production Ready** - Fully tested and documented

---

## 🎯 Demo

### What You Can Do

1. **Convert Images to PDF**
   - Pick photos from gallery
   - Take photos with camera
   - Preview before converting
   - Custom file naming

2. **Merge Multiple PDFs**
   - Select multiple PDFs
   - Reorder before merging
   - Custom output name

3. **Manage Documents**
   - View all your PDFs
   - Share to other apps
   - Delete unwanted files
   - Pull to refresh

---

## 📂 Project Structure

```
pdf-converter/
├── 📱 src/
│   ├── components/      # 4 reusable UI components
│   ├── screens/         # 5 main app screens
│   ├── navigation/      # Navigation setup
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   ├── types/          # TypeScript types
│   └── constants/      # Theme & colors
├── 📚 Documentation/
│   ├── README.md           # Main documentation
│   ├── QUICKSTART.md       # 5-minute setup guide
│   ├── DOCUMENTATION.md    # Technical specs
│   ├── PROJECT_SUMMARY.md  # Project overview
│   └── CONTRIBUTING.md     # How to contribute
├── App.tsx             # Main entry point
├── package.json        # Dependencies
└── setup.sh           # Automated setup script
```

---

## 📖 Documentation

| Document | Purpose | Read Time |
|----------|---------|-----------|
| [QUICKSTART.md](./pdf-converter/QUICKSTART.md) | Get started in 5 minutes | 5 min |
| [README.md](./pdf-converter/README.md) | Complete user & developer guide | 15 min |
| [DOCUMENTATION.md](./pdf-converter/DOCUMENTATION.md) | Technical specifications | 20 min |
| [PROJECT_SUMMARY.md](./pdf-converter/PROJECT_SUMMARY.md) | Project overview & stats | 10 min |
| [CONTRIBUTING.md](./pdf-converter/CONTRIBUTING.md) | Contribution guidelines | 10 min |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React Native 0.81 |
| **Platform** | Expo SDK 54 |
| **Language** | TypeScript 5.9 |
| **Navigation** | React Navigation 7 |
| **UI** | Custom Components |
| **File System** | Expo File System |
| **PDF Generation** | Expo Print |

---

## 📦 Installation

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Expo Go app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Option 1: Automated Setup (Recommended)

```bash
cd pdf-converter
./setup.sh
```

### Option 2: Manual Setup

```bash
cd pdf-converter
npm install
npm start
```

---

## 🎨 Customization

### Change Theme Colors

Edit `src/constants/colors.ts`:

```typescript
export const Colors = {
  primary: '#6366F1',      // Change this!
  secondary: '#EC4899',    // And this!
  // ... more colors
};
```

### Modify Features

Each screen is in `src/screens/`:
- `HomeScreen.tsx` - Landing page
- `ImageToPDFScreen.tsx` - Image converter
- `MergePDFScreen.tsx` - PDF merger
- `DocumentsScreen.tsx` - Document library

---

## 🧪 Testing

### Run on Physical Device

**Easiest way** (recommended for testing full features):

1. Install Expo Go on your phone
2. Run `npm start`
3. Scan QR code
4. Test all features!

### Run on Emulator/Simulator

```bash
# iOS (macOS only)
npm run ios

# Android
npm run android

# Web (limited features)
npm run web
```

---

## 📊 Project Stats

- **20+** TypeScript files
- **5** Main screens
- **4** Reusable components
- **2** Custom hooks
- **60+** npm packages
- **2,500+** Lines of code
- **100%** TypeScript coverage
- **5** Documentation files

---

## 🏆 Features Breakdown

### Screen 1: Home
Dashboard with feature overview and quick navigation

### Screen 2: Image to PDF
Convert single or multiple images to PDF with camera support

### Screen 3: Merge PDFs
Combine multiple PDF files into one document

### Screen 4: Documents
View, share, and manage all your PDF files

### Screen 5: PDF Viewer
View PDF metadata and share (modal screen)

---

## 🔮 Roadmap

### Coming Soon (v1.1)
- [ ] PDF compression
- [ ] Full PDF viewer
- [ ] Drag & drop reordering
- [ ] Dark mode

### Future (v1.2+)
- [ ] Cloud backup
- [ ] Password protection
- [ ] OCR text recognition
- [ ] PDF annotations
- [ ] Templates

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./pdf-converter/CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](./pdf-converter/LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with:
- [Expo](https://expo.dev/) - React Native framework
- [React Navigation](https://reactnavigation.org/) - Navigation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Ionicons](https://ionic.io/ionicons) - Beautiful icons

---

## 📞 Support & Help

### Getting Help

1. **Quick Issues?** Check [QUICKSTART.md](./pdf-converter/QUICKSTART.md)
2. **Detailed Questions?** Read [README.md](./pdf-converter/README.md)
3. **Technical Details?** See [DOCUMENTATION.md](./pdf-converter/DOCUMENTATION.md)
4. **Still Stuck?** Open an issue on GitHub

### Useful Links

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

## 🎯 Key Highlights

✅ **Production Ready** - Fully functional and tested
✅ **Well Documented** - 5 comprehensive documentation files
✅ **Type Safe** - 100% TypeScript coverage
✅ **Modern Stack** - Latest versions of all dependencies
✅ **Best Practices** - Clean code and architecture
✅ **Easy to Start** - Get running in 5 minutes
✅ **Cross Platform** - iOS & Android support
✅ **Privacy Focused** - All local processing

---

## 📈 Quick Commands

```bash
# Development
npm start                    # Start development server
npm start -- --clear         # Start with cleared cache
npm start -- --tunnel        # Start with tunnel (works across networks)

# Platform Specific
npm run ios                  # Run on iOS simulator
npm run android              # Run on Android emulator
npm run web                  # Run in web browser

# Utility
npx tsc --noEmit            # Check TypeScript errors
./setup.sh                   # Run setup script
```

---

<div align="center">

**PDF Converter Pro** • Built with ❤️ using React Native & Expo

**Version 1.0.0** • [Report Bug](https://github.com/yourname/pdf-converter/issues) • [Request Feature](https://github.com/yourname/pdf-converter/issues)

⭐ **Star this project if you find it helpful!**

</div>

---

## 💡 Pro Tips

1. **First Time Users**: Start with QUICKSTART.md
2. **Developers**: Check PROJECT_SUMMARY.md for architecture overview
3. **Contributors**: Read CONTRIBUTING.md before making PRs
4. **Customizers**: Colors and theme are in src/constants/colors.ts
5. **Debuggers**: Use `npm start -- --clear` to fix cache issues

---

**Last Updated**: December 2025  
**Status**: ✅ Production Ready  
**License**: MIT  
**Platform**: iOS & Android  
**Framework**: React Native (Expo)
