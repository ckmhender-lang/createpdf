import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ImageFile } from '../types';
import { Colors, BorderRadius, Spacing, FontSizes } from '../constants/colors';
import { formatFileSize } from '../utils/pdfUtils';

interface ImageCardProps {
  image: ImageFile;
  index: number;
  onRemove: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, index, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.numberBadge}>
        <Text style={styles.numberText}>{index + 1}</Text>
      </View>
      
      <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
      
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {image.name}
        </Text>
        <Text style={styles.size}>{formatFileSize(image.size)}</Text>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Ionicons name="close-circle" size={24} color={Colors.error} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  numberText: {
    color: Colors.surface,
    fontSize: FontSizes.sm,
    fontWeight: '700',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.surfaceVariant,
  },
  info: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  name: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  size: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
  removeButton: {
    padding: Spacing.sm,
  },
});
