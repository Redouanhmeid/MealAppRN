import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Article from '../screens/Article'
import { BottomTabs } from './BottomTabs'
import Settings from '../screens/settings/Settings'

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name={'Accueil'} component={BottomTabs} />
            <Screen name={'Article'} component={Article} />
            <Screen name={'Paramètres'} component={Settings} />
        </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator