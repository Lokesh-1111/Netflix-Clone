import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PlanScreen from '../screens/planScreen';
import ProfileScreen from '../screens/profileScreen';
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name='Loading' component={LoadingScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default MyStack

const styles = StyleSheet.create({})