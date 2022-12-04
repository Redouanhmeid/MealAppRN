import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { BottomNavigation, BottomNavigationTab, Layout } from '@ui-kitten/components'
import { BottomTabs } from './BottomTabs'
import HomeDrawerNavigator from './HomeDrawerNavigator'

function Home() {
  return (
    <Layout style={styles.container} level='1'>
      <Layout style={styles.layout} level='1'>
        <Text>AppStack</Text>
      </Layout>
      <Layout style={styles.bottom} level='1'>
        <BottomTabs />
      </Layout>
    </Layout>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={false}>
      <Drawer.Screen name="Home" component={HomeDrawerNavigator} />
    </Drawer.Navigator>
  )
}
const TopNav = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default TopNav

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