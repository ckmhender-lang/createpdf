# FIX: Entry File Issue on Windows ✅

## Your Error
```
Unable to resolve module ../../App from 
D:\AI PROJECTS\CURSOR\cursorpdf-writer-new\createpdf\node_modules\expo\AppEntry.js
```

## The Problem

You're running an **old version** of the code from a different directory. The fix has already been committed to GitHub, but you need to pull the latest changes.

---

## SOLUTION: Pull Latest Changes from GitHub

### Step 1: Open Terminal in Your Windows Project

Navigate to your project folder:
```bash
cd "D:\AI PROJECTS\CURSOR\cursorpdf-writer-new\createpdf"
```

### Step 2: Pull Latest Changes

```bash
git pull origin cursor/pdf-converter-mobile-app-0f5c
```

This will download the fixed `index.js` and updated `package.json`.

### Step 3: Clear All Caches

```bash
# Clear Expo cache
rmdir /s /q .expo

# Clear Metro cache (if exists)
rmdir /s /q node_modules\.cache

# Or on Windows PowerShell:
Remove-Item -Recurse -Force .expo
Remove-Item -Recurse -Force node_modules\.cache
```

### Step 4: Restart with Clean Cache

```bash
npm start -- --clear
```

---

## OR: Manual Fix (If Git Pull Doesn't Work)

If you can't pull from Git, manually create these files:

### 1. Create index.js

Create file: `D:\AI PROJECTS\CURSOR\cursorpdf-writer-new\createpdf\index.js`

```javascript
import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './App';

registerRootComponent(App);
```

### 2. Update package.json

Edit: `D:\AI PROJECTS\CURSOR\cursorpdf-writer-new\createpdf\package.json`

Find this line:
```json
"main": "whatever it says here",
```

Change it to:
```json
"main": "index.js",
```

### 3. Clear Caches (Windows)

```bash
# In Command Prompt
rmdir /s /q .expo
rmdir /s /q node_modules\.cache

# Then restart
npm start -- --clear
```

---

## Verification

After pulling/creating files, verify:

### Check index.js exists:
```bash
dir index.js
```

### Check package.json main field:
```bash
type package.json | findstr "main"
```

Should show: `"main": "index.js",`

### Check App.tsx exists:
```bash
dir App.tsx
```

---

## Start the App

```bash
npm start
```

You should see:
```
Starting Metro Bundler
iOS Bundling complete ✅
✅ No more "Unable to resolve" error!
```

---

## Why This Happens

Your Windows directory is different from the GitHub repo location:
- **Windows**: `D:\AI PROJECTS\CURSOR\cursorpdf-writer-new\createpdf\`
- **GitHub**: Latest commits with fixes

The fix (custom `index.js`) is already in GitHub, you just need to pull it!

---

## Quick Fix Commands (Copy & Paste)

### Option A: Pull from GitHub (Recommended)
```bash
cd "D:\AI PROJECTS\CURSOR\cursorpdf-writer-new\createpdf"
git pull origin cursor/pdf-converter-mobile-app-0f5c
rmdir /s /q .expo
npm start -- --clear
```

### Option B: Manual Fix
1. Create `index.js` with the content above
2. Edit `package.json` → change main to `"index.js"`
3. Run: `npm start -- --clear`

---

## Summary

| Issue | Solution |
|-------|----------|
| **Old code** | Pull latest from GitHub |
| **Missing index.js** | Create custom entry file |
| **Wrong main entry** | Update package.json |
| **Cache issues** | Clear .expo directory |

---

## After Fix

Your project structure should be:
```
createpdf/
├── index.js          ← New entry file
├── App.tsx           ← Existing app
└── package.json      ← Updated main field
```

Then run: `npm start` and it will work! 🎉

---

**The fix is already in GitHub - just pull the latest changes!** 🚀
