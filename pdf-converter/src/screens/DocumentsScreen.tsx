import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  RefreshControl,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useDocuments } from '../hooks/useDocuments';
import { sharePDF, deletePDF } from '../utils/pdfUtils';
import { DocumentCard } from '../components/DocumentCard';
import { EmptyState } from '../components/EmptyState';
import { RootStackParamList, MainTabParamList } from '../types';
import { Colors, Spacing, FontSizes } from '../constants/colors';

type DocumentsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Documents'>,
  NativeStackNavigationProp<RootStackParamList>
>;

interface Props {
  navigation: DocumentsScreenNavigationProp;
}

export default function DocumentsScreen({ navigation }: Props) {
  const { documents, loading, refresh } = useDocuments();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  }, [refresh]);

  const handleShare = async (uri: string) => {
    try {
      await sharePDF(uri);
    } catch (error) {
      Alert.alert('Error', 'Failed to share PDF');
      console.error(error);
    }
  };

  const handleDelete = (uri: string, name: string) => {
    Alert.alert(
      'Delete PDF',
      `Are you sure you want to delete "${name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deletePDF(uri);
              await refresh();
              Alert.alert('Success', 'PDF deleted successfully');
            } catch (error) {
              Alert.alert('Error', 'Failed to delete PDF');
              console.error(error);
            }
          },
        },
      ]
    );
  };

  const handleViewPDF = (uri: string, name: string) => {
    navigation.navigate('PDFViewer', { uri, name });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={Colors.primary}
          />
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Documents</Text>
          <Text style={styles.subtitle}>
            {documents.length} {documents.length === 1 ? 'document' : 'documents'}
          </Text>
        </View>

        {/* Stats */}
        {documents.length > 0 && (
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <Ionicons name="document-text" size={28} color={Colors.primary} />
              <View style={styles.statContent}>
                <Text style={styles.statValue}>{documents.length}</Text>
                <Text style={styles.statLabel}>Total PDFs</Text>
              </View>
            </View>
          </View>
        )}

        {/* Documents List */}
        <View style={styles.documentsContainer}>
          {loading ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          ) : documents.length === 0 ? (
            <EmptyState
              icon="folder-open-outline"
              title="No Documents Yet"
              description="Start converting images or merging PDFs to see your documents here"
            />
          ) : (
            documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onPress={() => handleViewPDF(doc.uri, doc.name)}
                onShare={() => handleShare(doc.uri)}
                onDelete={() => handleDelete(doc.uri, doc.name)}
              />
            ))
          )}
        </View>

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
  },
  statsCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: Spacing.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statContent: {
    marginLeft: Spacing.md,
  },
  statValue: {
    fontSize: FontSizes.xxl,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  documentsContainer: {
    paddingHorizontal: Spacing.lg,
    minHeight: 200,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  loadingText: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
  },
  bottomPadding: {
    height: Spacing.xl,
  },
});
