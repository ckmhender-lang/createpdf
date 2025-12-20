import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Colors, Spacing, FontSizes } from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'PDFViewer'>;

export default function PDFViewerScreen({ route }: Props) {
  const { uri, name } = route.params;

  // Note: For a complete PDF viewer, you would use react-native-pdf
  // or expo-document-picker with native PDF viewing capabilities
  // For this demo, we show a placeholder

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>PDF Viewer</Text>
        <Text style={styles.subtitle}>{name}</Text>
        <Text style={styles.info}>
          PDF viewing is available in native apps. Use the share button to open the PDF in your
          preferred viewer.
        </Text>
        <Text style={styles.path} numberOfLines={2}>
          {uri}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSizes.lg,
    color: Colors.textSecondary,
    marginBottom: Spacing.lg,
  },
  info: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: Spacing.lg,
  },
  path: {
    fontSize: FontSizes.xs,
    color: Colors.textLight,
    textAlign: 'center',
  },
});
