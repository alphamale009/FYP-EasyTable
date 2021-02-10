import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ResetForm from '../form/ResetForm';
import CodeForm from '../form/CodeForm';
import NewPasswordForm from '../form/NewPasswordForm';


const {Navigator, Screen }= createStackNavigator();

export default function ForgotPassword({navigation}) {
  return (
    <Navigator headerMode='none'>
      <Screen name="ResetForm" component={ResetForm}/>
      <Screen name="CodeForm" component={CodeForm}/>
      <Screen name="NewPasswordForm" component={NewPasswordForm}/>
    </Navigator>
  );
}
