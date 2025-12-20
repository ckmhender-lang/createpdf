import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, FontSizes } from '../constants/colors';

export const WebPlatformNotice: React.FC = () => {
  if (Platform.OS !== 'web') {
    return null;
  }

  return (
    <View style={styles.container}>
      <Ionicons name="information-circle" size={48} color={Colors.warning} />
      <Text style={styles.title}>Limited Web Support</Text>
      <Text style={styles.description}>
        This app requires native features (file system, camera, image picker) that are not available in web browsers.
      </Text>
      <Text style={styles.suggestion}>
        For full functionality, please use the mobile app:
      </Text>
      <View style={styles.platformList}>
        <Text style={styles.platformItem}>• iOS (iPhone/iPad)</Text>
        <Text style={styles.platformItem}>• Android (phones/tablets)</Text>
      </View>
      <View style={styles.infoBox}>
        <Ionicons name="download-outline" size={20} color={Colors.primary} />
        <Text style={styles.infoText}>
          Install Expo Go and scan the QR code to use this app on your mobile device.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: '700',
    color: Colors.text,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  description: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: Spacing.lg,
    maxWidth: 500,
  },
  suggestion: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  platformList: {
    marginBottom: Spacing.lg,
  },
  platformItem: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    marginVertical: Spacing.xs,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: Colors.primary + '10',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginTop: Spacing.md,
    maxWidth: 500,
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    fontSize: FontSizes.sm,
    color: Colors.text,
    marginLeft: Spacing.sm,
    lineHeight: 20,
  },
});
