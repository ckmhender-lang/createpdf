# PDF Converter Pro 📄

A modern, feature-rich mobile application for converting images to PDFs and managing PDF documents. Built with React Native, Expo, and TypeScript.

## ✨ Features

- 📸 **Image to PDF Conversion**: Convert single or multiple images into PDF documents
- 🎥 **Camera Integration**: Take photos directly and convert them to PDF
- 🔗 **PDF Merging**: Combine multiple PDF files into one document
- 📁 **Document Management**: View, organize, and manage all your PDF files
- 🎨 **Modern UI**: Beautiful, intuitive interface with smooth animations
- 🔒 **Privacy First**: All processing happens locally on your device
- 📤 **Share Easily**: Share your PDFs with any app
- 🗑️ **File Management**: Delete unwanted PDFs with ease

## 🚀 Tech Stack

- **Framework**: React Native with Expo (SDK 52+)
- **Language**: TypeScript
- **Navigation**: React Navigation v6
- **UI Components**: Custom components with modern design
- **File Handling**: 
  - expo-image-picker for image selection
  - expo-document-picker for PDF selection
  - expo-file-system for file operations
  - expo-print for PDF generation
  - expo-sharing for sharing functionality
- **State Management**: React Hooks
- **Icons**: @expo/vector-icons (Ionicons)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (for testing)
- For iOS development: macOS with Xcode
- For Android development: Android Studio

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project directory):

```bash
cd pdf-converter
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm start
```

## 📱 Running the App

### On Physical Device (Recommended)

1. Install Expo Go from:
   - [App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)
   - [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)

2. Start the development server:
```bash
npm start
```

3. Scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

### On Simulator/Emulator

**iOS Simulator** (macOS only):
```bash
npm run ios
```

**Android Emulator**:
```bash
npm run android
```

**Web Browser** (limited functionality):
```bash
npm run web
```

## 📂 Project Structure

```
pdf-converter/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── ImageCard.tsx
│   │   ├── DocumentCard.tsx
│   │   └── EmptyState.tsx
│   ├── screens/            # App screens
│   │   ├── HomeScreen.tsx
│   │   ├── ImageToPDFScreen.tsx
│   │   ├── MergePDFScreen.tsx
│   │   ├── DocumentsScreen.tsx
│   │   └── PDFViewerScreen.tsx
│   ├── navigation/         # Navigation configuration
│   │   ├── RootNavigator.tsx
│   │   └── MainTabNavigator.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useDocuments.ts
│   │   └── useImagePicker.ts
│   ├── utils/             # Utility functions
│   │   └── pdfUtils.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   └── constants/         # App constants and theme
│       └── colors.ts
├── assets/                # Images and static files
├── App.tsx               # Main app component
├── app.json             # Expo configuration
├── package.json         # Dependencies
└── tsconfig.json       # TypeScript configuration
```

## 🎯 How to Use

### Converting Images to PDF

1. Navigate to the **"Image to PDF"** tab
2. Tap **"Pick Images"** to select images from your gallery, or **"Take Photo"** to use your camera
3. Selected images will appear in order
4. Optionally, enter a custom name for your PDF
5. Tap **"Convert to PDF"** to create your document
6. Find your PDF in the **"Documents"** tab

### Merging PDFs

1. Navigate to the **"Merge PDF"** tab
2. Tap **"Select PDF Files"** to choose multiple PDFs
3. PDFs will be listed in the order they'll be merged
4. Optionally, enter a custom name for the merged PDF
5. Tap **"Merge PDFs"** to combine them
6. The merged PDF will appear in your documents

### Managing Documents

1. Navigate to the **"Documents"** tab
2. View all your created PDFs
3. Tap on a PDF to view it
4. Use the share icon to share the PDF
5. Use the trash icon to delete unwanted PDFs
6. Pull down to refresh the list

## 🔧 Configuration

### Customizing Colors

Edit `src/constants/colors.ts` to customize the app's color scheme:

```typescript
export const Colors = {
  primary: '#6366F1',      // Main brand color
  secondary: '#EC4899',    // Accent color
  background: '#F8FAFC',   // App background
  // ... more colors
};
```

### App Permissions

The app requires the following permissions:
- **Camera**: To take photos for PDF conversion
- **Photo Library**: To select images for conversion
- **File System**: To save and manage PDFs

These are configured in `app.json` under iOS and Android sections.

## 📦 Building for Production

### Android APK

```bash
expo build:android
```

### iOS IPA

```bash
expo build:ios
```

### Using EAS Build (Recommended)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Configure EAS:
```bash
eas build:configure
```

3. Build for Android:
```bash
eas build --platform android
```

4. Build for iOS:
```bash
eas build --platform ios
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Images not showing after selection
- **Solution**: Ensure camera and photo library permissions are granted

**Issue**: PDF not generating
- **Solution**: Check that all images are valid and the device has sufficient storage

**Issue**: App crashes on startup
- **Solution**: Clear the cache with `expo start -c`

### Clearing Cache

```bash
expo start -c
```

or

```bash
npm start -- --clear
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- UI inspired by modern mobile design principles
- Icons from [Ionicons](https://ionic.io/ionicons)

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check the [Expo Documentation](https://docs.expo.dev/)
- Visit [React Native Documentation](https://reactnative.dev/)

## 🔮 Future Enhancements

- [ ] PDF compression
- [ ] Password protection for PDFs
- [ ] OCR (Optical Character Recognition)
- [ ] Cloud storage integration
- [ ] Dark mode support
- [ ] Batch processing
- [ ] PDF editing capabilities
- [ ] Custom watermarks

---

Made with ❤️ using React Native & Expo
