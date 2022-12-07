import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TopNav from '../navigation/TopNav'
import BottomTabs from '../navigation/BottomTabs'
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, IconRegistry, Layout } from '@ui-kitten/components'
import AppNavigator from '../navigation/AppNavigator'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { default as theme } from '../theme.json'
import * as eva from '@eva-design/eva'

const AppStack = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Layout style={styles.container} level='1'>
          <AppNavigator />
        </Layout>
      </ApplicationProvider>
    </>
  )
}

export default AppStack


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  topnav: {
    justifyContent: 'flex-start',
    marginTop: 30,
  },
})