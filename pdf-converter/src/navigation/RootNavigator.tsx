import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { MainTabNavigator } from './MainTabNavigator';
import PDFViewerScreen from '../screens/PDFViewerScreen';
import { Colors, FontSizes } from '../constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.surface,
          },
          headerTitleStyle: {
            fontSize: FontSizes.lg,
            fontWeight: '700',
            color: Colors.text,
          },
          headerTintColor: Colors.primary,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PDFViewer"
          component={PDFViewerScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerBackTitle: 'Back',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
