import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import BottomTabs from '../navigation/BottomTabs'
import { BottomNavigation, BottomNavigationTab, Layout } from '@ui-kitten/components'
import TopNav from '../navigation/TopNav'

const AppStack = () => {
  return (
      <Layout style={styles.container} level='1'>
        <Layout /* style={styles.topnav} */ level='1'>
          <TopNav />
        </Layout>
        <Layout style={styles.layout} level='1'>
          <Text>AppStack</Text>
        </Layout>
        <Layout style={styles.bottom} level='1'>
          <BottomTabs />
        </Layout>
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