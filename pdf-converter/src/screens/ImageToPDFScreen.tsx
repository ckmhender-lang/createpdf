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
import { useImagePicker } from '../hooks/useImagePicker';
import { generatePDFFromImages } from '../utils/pdfUtils';
import { Button } from '../components/Button';
import { ImageCard } from '../components/ImageCard';
import { EmptyState } from '../components/EmptyState';
import { Colors, Spacing, BorderRadius, FontSizes } from '../constants/colors';

export default function ImageToPDFScreen() {
  const { images, pickImages, takePhoto, removeImage, clearImages } = useImagePicker();
  const [converting, setConverting] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleConvert = async () => {
    if (images.length === 0) {
      Alert.alert('No Images', 'Please add some images first');
      return;
    }

    const name = fileName.trim() || `PDF_${new Date().toISOString().split('T')[0]}`;

    try {
      setConverting(true);
      await generatePDFFromImages(images, name);
      
      Alert.alert(
        'Success!',
        'Your PDF has been created successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              clearImages();
              setFileName('');
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to create PDF. Please try again.');
      console.error(error);
    } finally {
      setConverting(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Image to PDF</Text>
          <Text style={styles.subtitle}>
            Convert your images into a single PDF document
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Pick Images"
            onPress={pickImages}
            icon={<Ionicons name="images" size={20} color={Colors.surface} />}
            style={styles.actionButton}
          />
          <Button
            title="Take Photo"
            onPress={takePhoto}
            variant="secondary"
            icon={<Ionicons name="camera" size={20} color={Colors.surface} />}
            style={styles.actionButton}
          />
        </View>

        {/* Image Count */}
        {images.length > 0 && (
          <View style={styles.countCard}>
            <Ionicons name="images" size={24} color={Colors.primary} />
            <Text style={styles.countText}>
              {images.length} {images.length === 1 ? 'image' : 'images'} selected
            </Text>
          </View>
        )}

        {/* File Name Input */}
        {images.length > 0 && (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>PDF Name (optional)</Text>
            <TextInput
              style={styles.input}
              value={fileName}
              onChangeText={setFileName}
              placeholder="Enter file name"
              placeholderTextColor={Colors.textLight}
            />
          </View>
        )}

        {/* Images List */}
        <View style={styles.imagesContainer}>
          {images.length === 0 ? (
            <EmptyState
              icon="image-outline"
              title="No Images Yet"
              description="Add images to start creating your PDF document"
            />
          ) : (
            images.map((image, index) => (
              <ImageCard
                key={image.id}
                image={image}
                index={index}
                onRemove={() => removeImage(image.id)}
              />
            ))
          )}
        </View>

        {/* Convert Button */}
        {images.length > 0 && (
          <View style={styles.convertContainer}>
            {converting ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={Colors.primary} />
                <Text style={styles.loadingText}>Creating your PDF...</Text>
              </View>
            ) : (
              <>
                <Button
                  title="Convert to PDF"
                  onPress={handleConvert}
                  size="large"
                  icon={<Ionicons name="document-text" size={24} color={Colors.surface} />}
                />
                <Button
                  title="Clear All"
                  onPress={() => {
                    clearImages();
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
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  actionButton: {
    flex: 1,
  },
  countCard: {
    backgroundColor: Colors.primary + '10',
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
  imagesContainer: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    minHeight: 200,
  },
  convertContainer: {
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
