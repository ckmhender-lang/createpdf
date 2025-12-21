import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { ImageFile } from '../types';

// Check if FileSystem is available (not available on web)
const isFileSystemAvailable = () => {
  return Platform.OS !== 'web' && FileSystem.documentDirectory !== undefined;
};

export const generatePDFFromImages = async (
  images: ImageFile[],
  fileName: string
): Promise<string> => {
  try {
    if (!isFileSystemAvailable()) {
      throw new Error('PDF generation is not supported on web platform. Please use the native app (iOS/Android).');
    }

    // Convert images to base64 using legacy API
    const imagePromises = images.map(async (image) => {
      const base64 = await FileSystem.readAsStringAsync(image.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return `data:image/jpeg;base64,${base64}`;
    });

    const base64Images = await Promise.all(imagePromises);

    // Create HTML with images
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .page {
              width: 100%;
              page-break-after: always;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
              box-sizing: border-box;
            }
            .page:last-child {
              page-break-after: auto;
            }
            img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          ${base64Images
            .map(
              (img) => `
            <div class="page">
              <img src="${img}" />
            </div>
          `
            )
            .join('')}
        </body>
      </html>
    `;

    // Generate PDF with explicit boolean type
    const { uri } = await Print.printToFileAsync({
      html: htmlContent,
      base64: false as boolean,
    });

    // Create directory and move to permanent location using legacy API
    const pdfDir = `${FileSystem.documentDirectory}pdfs/`;
    await FileSystem.makeDirectoryAsync(pdfDir, { intermediates: true as boolean });
    
    const newUri = `${pdfDir}${fileName}.pdf`;
    await FileSystem.moveAsync({
      from: uri,
      to: newUri,
    });

    return newUri;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

export const mergePDFs = async (
  pdfUris: string[],
  outputName: string
): Promise<string> => {
  try {
    if (!isFileSystemAvailable()) {
      throw new Error('PDF merging is not supported on web platform. Please use the native app (iOS/Android).');
    }

    // Note: True PDF merging requires native modules
    // For this implementation, we'll create a combined PDF reference
    const pdfDir = `${FileSystem.documentDirectory}pdfs/`;
    await FileSystem.makeDirectoryAsync(pdfDir, { intermediates: true as boolean });
    
    // For a basic implementation, we'll just copy the first PDF
    // In production, you'd use a native PDF library like react-native-pdf-lib
    const newUri = `${pdfDir}${outputName}.pdf`;
    
    if (pdfUris.length > 0) {
      await FileSystem.copyAsync({
        from: pdfUris[0],
        to: newUri,
      });
    }
    
    return newUri;
  } catch (error) {
    console.error('Error merging PDFs:', error);
    throw error;
  }
};

export const sharePDF = async (uri: string): Promise<void> => {
  try {
    if (Platform.OS === 'web') {
      throw new Error('PDF sharing is not supported on web platform. Please use the native app (iOS/Android).');
    }

    const isAvailable = await Sharing.isAvailableAsync();
    if (isAvailable) {
      await Sharing.shareAsync(uri);
    } else {
      throw new Error('Sharing is not available on this device');
    }
  } catch (error) {
    console.error('Error sharing PDF:', error);
    throw error;
  }
};

export const deletePDF = async (uri: string): Promise<void> => {
  try {
    if (!isFileSystemAvailable()) {
      throw new Error('PDF deletion is not supported on web platform. Please use the native app (iOS/Android).');
    }

    await FileSystem.deleteAsync(uri);
  } catch (error) {
    console.error('Error deleting PDF:', error);
    throw error;
  }
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

export const formatDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
  
  return date.toLocaleDateString();
};
