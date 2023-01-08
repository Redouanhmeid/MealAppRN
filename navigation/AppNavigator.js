import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Article from '../screens/Article'
import { BottomTabs } from './BottomTabs'
import Settings from '../screens/settings/Settings'
import Nutrution from '../screens/settings/Nutrution'
import Compte from '../screens/settings/Compte'
import Notifications from '../screens/settings/Notifications'
import Detailspersonels from '../screens/settings/Detailspersonels'
import Aide from '../screens/settings/Aide'
import Nousnoter from '../screens/settings/Nousnoter'

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name={'Accueil'} component={BottomTabs} />
            <Screen name={'Article'} component={Article} />
            <Screen name={'Paramètres'} component={Settings} />
            <Screen name={'Nutrution'} component={Nutrution} />
            <Screen name={'Compte'} component={Compte} />
            <Screen name={'Notifications'} component={Notifications} />
            <Screen name={'Détails personnels'} component={Detailspersonels} />
            <Screen name={'Aide'} component={Aide} />
            <Screen name={'Nous noter'} component={Nousnoter} />
        </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator