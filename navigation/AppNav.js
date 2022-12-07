import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { default as theme } from '../theme.json'
import LoginScreen from '../screens/login'
import AppStack from '../screens/AppStack'
import { AuthProvider, AuthContext } from '../context/AuthContext'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from '../screens/AuthStack'

const AppNav = ({children}) => {
  const {isLoading, userToken} = useContext(AuthContext)
    if(isLoading) {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
          </View>
        )  
    }
    return (
      <SafeAreaProvider>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </SafeAreaProvider>
    )
}

export default AppNav