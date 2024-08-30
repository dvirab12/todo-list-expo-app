import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TasksScreen from '../screens/TasksScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Register" component={RegisterScreen} />
        <stack.Screen name="Tasks" component={TasksScreen} />
      </stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator;