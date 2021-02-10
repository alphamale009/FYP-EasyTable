import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import RootStakeScreen from './src/navigators/RootStackScreen';
import MainStackScreen from './src/navigators/MainStackScreen';
import ForgotPassword from './src/navigators/ForgotPassword';



export default function App() {

  const {Navigator,Screen} = createStackNavigator();

   

  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        <Screen name="RootStakeScreen"  component={RootStakeScreen}/>
        <Screen name="MainStackScreen"  component={MainStackScreen}/>
        <Screen name="ForgotPassword"  component={ForgotPassword}/>
      </Navigator>
    </NavigationContainer>
      

        
  );
}
