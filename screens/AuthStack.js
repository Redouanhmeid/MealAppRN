import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
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