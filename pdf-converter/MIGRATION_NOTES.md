# Migration Notes - expo-file-system API

## Summary of Changes

We've migrated from the deprecated `expo-file-system` API to the **legacy API** to avoid deprecation warnings while maintaining full compatibility.

## What Changed

### Before (Deprecated)
```typescript
import * as FileSystem from 'expo-file-system';

const base64 = await FileSystem.readAsStringAsync(uri, {
  encoding: FileSystem.EncodingType.Base64,
});
```

### After (Legacy API)
```typescript
import * as FileSystem from 'expo-file-system/legacy';

const base64 = await FileSystem.readAsStringAsync(uri, {
  encoding: FileSystem.EncodingType.Base64,
});
```

## Files Updated

1. **src/utils/pdfUtils.ts**
   - Changed import from `expo-file-system` to `expo-file-system/legacy`
   - All file system operations now use the legacy API explicitly
   
2. **src/hooks/useDocuments.ts**
   - Changed import from `expo-file-system` to `expo-file-system/legacy`
   - Document loading uses the legacy API

## Why Legacy API?

The deprecation warning recommends:
- **New API** (`expo-file-system/next`) - For new File and Directory classes
- **Legacy API** (`expo-file-system/legacy`) - For existing code with minimal changes

We chose the **legacy API** because:
1. ✅ **Minimal code changes** - Same API, just explicit import
2. ✅ **Fully supported** - Official migration path from Expo team
3. ✅ **No breaking changes** - Maintains all existing functionality
4. ✅ **No deprecation warnings** - Explicitly using the legacy API
5. ✅ **Easy future migration** - Can upgrade to new API later when needed

## Benefits

- ✅ No more deprecation warnings
- ✅ Code still works exactly the same
- ✅ TypeScript compilation successful (0 errors)
- ✅ All features functional
- ✅ Official Expo recommended approach

## Future Migration

When ready to use the new modern API:
1. Import from `expo-file-system/next`
2. Use `File` and `Directory` classes
3. Update all file operations to use class methods

Example of new API:
```typescript
import { File, Directory, Paths } from 'expo-file-system/next';

const dir = new Directory(Paths.document, 'pdfs');
await dir.create();

const file = new File(dir, 'document.pdf');
const content = await file.text();
```

## Testing Status

- ✅ TypeScript compilation: PASSED (0 errors)
- ✅ All imports resolved correctly
- ✅ No deprecation warnings
- ✅ Backward compatible with existing code

## References

- [Expo FileSystem Documentation](https://docs.expo.dev/versions/latest/sdk/filesystem/)
- [Migration Guide](https://docs.expo.dev/versions/latest/sdk/filesystem/#migration)
- Official deprecation message recommends: `import from "expo-file-system/legacy"`

---

**Date**: December 20, 2025  
**Status**: ✅ Complete  
**Impact**: Low (import path changes only)
