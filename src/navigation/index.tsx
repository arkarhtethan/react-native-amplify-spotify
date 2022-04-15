/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Entypo, EvilIcons, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import PremiumScreen from '../screens/PremiumScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation ({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeRouteStack = createNativeStackNavigator();

function HomeNavigator () {
  return (
    <HomeRouteStack.Navigator initialRouteName='Home'>
      <HomeRouteStack.Screen name="AlbumScreen" component={AlbumScreen} options={{ headerShown: false }} />
      <HomeRouteStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </HomeRouteStack.Navigator>
  );
}
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator () {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo style={{ marginBottom: -3 }} name="home" size={30} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <EvilIcons style={{ marginBottom: -3 }} name="search" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="YourLibrary"
        component={LibraryScreen}
        options={{
          title: 'Your Library',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons style={{ marginBottom: -3 }} name="library" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          title: 'Premium',
          tabBarIcon: ({ color }) => <FontAwesome5 style={{ marginBottom: -3 }} name="spotify" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
