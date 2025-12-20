import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import { PDFDocument } from '../types';

// Type assertion for documentDirectory (available at runtime)
const DOCUMENT_DIRECTORY = (FileSystem as any).documentDirectory || '';

export const useDocuments = () => {
  const [documents, setDocuments] = useState<PDFDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const loadDocuments = async () => {
    try {
      setLoading(true);
      const pdfDir = `${DOCUMENT_DIRECTORY}pdfs/`;
      
      // Create directory if it doesn't exist
      const dirInfo = await FileSystem.getInfoAsync(pdfDir);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(pdfDir, { intermediates: true });
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
