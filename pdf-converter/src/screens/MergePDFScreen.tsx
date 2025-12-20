import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { mergePDFs } from '../utils/pdfUtils';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { Colors, Spacing, BorderRadius, FontSizes } from '../constants/colors';

interface SelectedPDF {
  id: string;
  name: string;
  uri: string;
  size: number;
}

export default function MergePDFScreen() {
  const [pdfs, setPdfs] = useState<SelectedPDF[]>([]);
  const [merging, setMerging] = useState(false);
  const [fileName, setFileName] = useState('');

  const pickPDFs = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: true,
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets) {
        const newPdfs: SelectedPDF[] = result.assets.map((asset, index) => ({
          id: `${Date.now()}-${index}`,
          name: asset.name,
          uri: asset.uri,
          size: asset.size || 0,
        }));

        setPdfs((prev) => [...prev, ...newPdfs]);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick PDFs');
      console.error(error);
    }
  };

  const removePDF = (id: string) => {
    setPdfs((prev) => prev.filter((pdf) => pdf.id !== id));
  };

  const handleMerge = async () => {
    if (pdfs.length < 2) {
      Alert.alert('Need More Files', 'Please select at least 2 PDF files to merge');
      return;
    }

    const name = fileName.trim() || `Merged_${new Date().toISOString().split('T')[0]}`;

    try {
      setMerging(true);
      const uris = pdfs.map((pdf) => pdf.uri);
      await mergePDFs(uris, name);

      Alert.alert(
        'Success!',
        'Your PDFs have been merged successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              setPdfs([]);
              setFileName('');
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to merge PDFs. Please try again.');
      console.error(error);
    } finally {
      setMerging(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Merge PDFs</Text>
          <Text style={styles.subtitle}>
            Combine multiple PDF files into a single document
          </Text>
        </View>

        {/* Action Button */}
        <View style={styles.actionButtons}>
          <Button
            title="Select PDF Files"
            onPress={pickPDFs}
            icon={<Ionicons name="folder-open" size={20} color={Colors.surface} />}
          />
        </View>

        {/* PDF Count */}
        {pdfs.length > 0 && (
          <View style={styles.countCard}>
            <Ionicons name="documents" size={24} color={Colors.secondary} />
            <Text style={styles.countText}>
              {pdfs.length} {pdfs.length === 1 ? 'PDF' : 'PDFs'} selected
            </Text>
          </View>
        )}

        {/* File Name Input */}
        {pdfs.length > 1 && (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Output File Name (optional)</Text>
            <TextInput
              style={styles.input}
              value={fileName}
              onChangeText={setFileName}
              placeholder="Enter file name"
              placeholderTextColor={Colors.textLight}
            />
          </View>
        )}

        {/* PDFs List */}
        <View style={styles.pdfsContainer}>
          {pdfs.length === 0 ? (
            <EmptyState
              icon="documents-outline"
              title="No PDFs Selected"
              description="Select PDF files to merge them into one document"
            />
          ) : (
            pdfs.map((pdf, index) => (
              <View key={pdf.id} style={styles.pdfCard}>
                <View style={styles.numberBadge}>
                  <Text style={styles.numberText}>{index + 1}</Text>
                </View>

                <View style={styles.pdfIconContainer}>
                  <Ionicons name="document-text" size={24} color={Colors.secondary} />
                </View>

                <View style={styles.pdfInfo}>
                  <Text style={styles.pdfName} numberOfLines={1}>
                    {pdf.name}
                  </Text>
                  <Text style={styles.pdfSize}>{formatFileSize(pdf.size)}</Text>
                </View>

                <View style={styles.removeButton}>
                  <Button
                    title=""
                    onPress={() => removePDF(pdf.id)}
                    variant="ghost"
                    icon={<Ionicons name="close-circle" size={24} color={Colors.error} />}
                  />
                </View>
              </View>
            ))
          )}
        </View>

        {/* Merge Button */}
        {pdfs.length > 1 && (
          <View style={styles.mergeContainer}>
            {merging ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={Colors.secondary} />
                <Text style={styles.loadingText}>Merging your PDFs...</Text>
              </View>
            ) : (
              <>
                <Button
                  title="Merge PDFs"
                  onPress={handleMerge}
                  variant="secondary"
                  size="large"
                  icon={<Ionicons name="git-merge" size={24} color={Colors.surface} />}
                />
                <Button
                  title="Clear All"
                  onPress={() => {
                    setPdfs([]);
                    setFileName('');
                  }}
                  variant="ghost"
                  style={styles.clearButton}
                />
              </>
            )}
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: Spacing.lg,
    paddingTop: Spacing.md,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  actionButtons: {
    paddingHorizontal: Spacing.lg,
  },
  countCard: {
    backgroundColor: Colors.secondary + '10',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: Spacing.md,
  },
  inputContainer: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
  },
  inputLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    fontSize: FontSizes.md,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  pdfsContainer: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    minHeight: 200,
  },
  pdfCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  numberBadge: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  numberText: {
    color: Colors.surface,
    fontSize: FontSizes.sm,
    fontWeight: '700',
  },
  pdfIconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.secondary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  pdfInfo: {
    flex: 1,
  },
  pdfName: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  pdfSize: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
  removeButton: {
    marginLeft: Spacing.sm,
  },
  mergeContainer: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
  },
  loadingContainer: {
    alignItems: 'center',
    padding: Spacing.xl,
  },
  loadingText: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    marginTop: Spacing.md,
  },
  clearButton: {
    marginTop: Spacing.md,
  },
  bottomPadding: {
    height: Spacing.xl,
  },
});
