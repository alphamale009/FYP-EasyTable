import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
// import ForgotpasswordScreen from '../screens/ForgotpasswordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ForgotPassword from '../navigators/ForgotPassword';

const {Navigator, Screen }= createStackNavigator();

export default function RootStackScreen({navigation}) {
  return (
    <Navigator headerMode='none'>
      <Screen name="Login" component={LoginScreen}/>
      {/* <Screen name="Forgotpassword" component={ForgotpasswordScreen}/> */}
      <Screen name="Forgotpassword" component={ForgotPassword}/>
      <Screen name="Registration" component={RegistrationScreen}/>
    </Navigator>
  );
}
