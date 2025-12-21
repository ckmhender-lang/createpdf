import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import { PDFDocument } from '../types';

// Check if FileSystem is available (not available on web)
const isFileSystemAvailable = () => {
  return Platform.OS !== 'web' && FileSystem.documentDirectory !== undefined;
};

export const useDocuments = () => {
  const [documents, setDocuments] = useState<PDFDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const loadDocuments = async () => {
    try {
      setLoading(true);
      
      if (!isFileSystemAvailable()) {
        // On web, show empty state
        console.log('Document management is not available on web platform');
        setDocuments([]);
        return;
      }

      const pdfDir = `${FileSystem.documentDirectory}pdfs/`;
      
      // Create directory if it doesn't exist
      const dirInfo = await FileSystem.getInfoAsync(pdfDir);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(pdfDir, { intermediates: true as boolean });
        setDocuments([]);
        return;
      }

      // Read directory
      const files = await FileSystem.readDirectoryAsync(pdfDir);
      const pdfFiles = files.filter(file => file.endsWith('.pdf'));

      // Get file info
      const documentsPromises = pdfFiles.map(async (file) => {
        const uri = `${pdfDir}${file}`;
        const info = await FileSystem.getInfoAsync(uri);
        
        return {
          id: file,
          name: file.replace('.pdf', ''),
          uri,
          size: (info.exists && 'size' in info) ? info.size : 0,
          createdAt: (info.exists && 'modificationTime' in info) 
            ? new Date(info.modificationTime * 1000) 
            : new Date(),
        };
      });

      const docs = await Promise.all(documentsPromises);
      // Sort by date, newest first
      docs.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      
      setDocuments(docs);
    } catch (error) {
      console.error('Error loading documents:', error);
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  return {
    documents,
    loading,
    refresh: loadDocuments,
  };
};
