import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import CSS from './src/screens/CSS'
const Stack = createNativeStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options = {{headerShown : false}}/>
          <Stack.Screen name='CSS' component={CSS} options = {{headerShown : false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default App

const styles = StyleSheet.create({})