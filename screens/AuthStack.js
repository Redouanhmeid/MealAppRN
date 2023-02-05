import { View, Text } from 'react-native'
import React from 'react'
import { ApplicationProvider } from '@ui-kitten/components'
import LoginScreen from './login'
import { default as theme } from '../theme.json'
import * as eva from '@eva-design/eva'
const AuthStack = () => {
  return (
    <>
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
          <LoginScreen />
        </ApplicationProvider>
    </>
  )
}

export default AuthStack