import { useState } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageFile } from '../types';

export const useImagePicker = () => {
  const [images, setImages] = useState<ImageFile[]>([]);

  const pickImages = async () => {
    try {
      // Check if running on web
      if (Platform.OS === 'web') {
        throw new Error('Image picking is limited on web. Please use the native app (iOS/Android) for full functionality.');
      }

      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        throw new Error('Permission to access media library was denied');
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: Platform.OS !== 'ios', // iOS doesn't support this option reliably
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        const newImages: ImageFile[] = result.assets.map((asset, index) => ({
          id: `${Date.now()}-${index}`,
          uri: asset.uri,
          name: asset.fileName || `Image ${images.length + index + 1}`,
          size: asset.fileSize || 0,
        }));

        setImages(prev => [...prev, ...newImages]);
      }
    } catch (error) {
      console.error('Error picking images:', error);
      throw error;
    }
  };

  const takePhoto = async () => {
    try {
      // Check if running on web
      if (Platform.OS === 'web') {
        throw new Error('Camera access is not available on web. Please use the native app (iOS/Android).');
      }

      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (status !== 'granted') {
        throw new Error('Permission to access camera was denied');
      }

      const result = await ImagePicker.launchCameraAsync({
        quality: 1,
        allowsEditing: false,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        const asset = result.assets[0];
        const newImage: ImageFile = {
          id: `${Date.now()}`,
          uri: asset.uri,
          name: asset.fileName || `Photo ${images.length + 1}`,
          size: asset.fileSize || 0,
        };

        setImages(prev => [...prev, newImage]);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      throw error;
    }
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const clearImages = () => {
    setImages([]);
  };

  const reorderImages = (fromIndex: number, toIndex: number) => {
    setImages(prev => {
      const newImages = [...prev];
      const [removed] = newImages.splice(fromIndex, 1);
      newImages.splice(toIndex, 0, removed);
      return newImages;
    });
  };

  return {
    images,
    pickImages,
    takePhoto,
    removeImage,
    clearImages,
    reorderImages,
  };
};
