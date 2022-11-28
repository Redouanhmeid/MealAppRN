import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name='Feed' component={Feed} />
    </Drawer.Navigator>
  )
}
const TopNav = () => {
  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
    </NavigationContainer>
  )
}

export default TopNav