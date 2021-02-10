import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
// const Tab = createMaterialBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyReservationScreen from '../screens/MyReservationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';


// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const MyReservationStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function MainStackScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e8e8e8"
      labelStyle={{ fontSize: 12 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#30475e',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={24} color="#e8e8e8" />
          ),
        }}
      />
      <Tab.Screen
        name="MyReservation"
        component={MyReservationScreen}
        options={{
          tabBarLabel: 'MyReservation',
          tabBarColor: '#30475e',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-restaurant" size={24} color="#e8e8e8" />
          ),
        }}
      /> 
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#30475e',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-search" size={24} color="#e8e8e8" />
          ),
        }}
      />           
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#30475e',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications" size={24} color="#e8e8e8" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#30475e',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-albums" size={24} color="#e8e8e8" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       activeColor="#e91e63"
//       style={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="ios-home" size={24} color="black" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           tabBarLabel: 'Search',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="ios-search" size={24} color="black" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="MyReservation"
//         component={MyReservationScreen}
//         options={{
//           tabBarLabel: 'MyReservation',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="ios-restaurant" size={24} color="black" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notification"
//         component={NotificationScreen}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="ios-notifications" size={24} color="black" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="ios-albums" size={24} color="black" />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
