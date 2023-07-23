import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import MyStack from './components/MyStack';
import {ProfileContext} from './Context'

const App = ()=>{
  return(
    <ProfileContext>
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </ProfileContext>
  )
}

export default App;