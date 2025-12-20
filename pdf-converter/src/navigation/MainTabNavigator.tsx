import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainTabParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import ImageToPDFScreen from '../screens/ImageToPDFScreen';
import MergePDFScreen from '../screens/MergePDFScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import { Colors, FontSizes } from '../constants/colors';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: FontSizes.xs,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: Colors.surface,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: Colors.border,
        },
        headerTitleStyle: {
          fontSize: FontSizes.lg,
          fontWeight: '700',
          color: Colors.text,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ImageToPDF"
        component={ImageToPDFScreen}
        options={{
          title: 'Image to PDF',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />
          ),
          tabBarLabel: 'Convert',
        }}
      />
      <Tab.Screen
        name="MergePDF"
        component={MergePDFScreen}
        options={{
          title: 'Merge PDFs',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="copy" size={size} color={color} />
          ),
          tabBarLabel: 'Merge',
        }}
      />
      <Tab.Screen
        name="Documents"
        component={DocumentsScreen}
        options={{
          title: 'Documents',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder-open" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
