import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TopNav from '../navigation/TopNav'
import BottomTabs from '../navigation/BottomTabs'
import { BottomNavigation, BottomNavigationTab, Layout } from '@ui-kitten/components'
import AppNavigator from '../navigation/AppNavigator'

const AppStack = () => {
  return (
    <Layout style={styles.container} level='1'>
      <AppNavigator />
    </Layout>
    
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