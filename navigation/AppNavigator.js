import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeDrawerNavigator from './HomeDrawerNavigator'
import { createStackNavigator } from '@react-navigation/stack'
const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name={'Drawer'} component={HomeDrawerNavigator} />
        </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator