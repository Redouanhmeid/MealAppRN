import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Drawer, DrawerItem, Layout, StyleService, Text } from '@ui-kitten/components'

const HomeDrawerNavigator = ({ navigation, state }) => {
  const Header = () => (
    <Layout style={styles.header}>
      <View style={styles.profileContainer}>
      <Avatar
        size="giant"
        source={require("../assets/logo.png")}
      />
        <Text style={styles.profileName} category="h6">
          Rocktech
        </Text>
      </View>
    </Layout>
  )
  return (
    <SafeAreaView>
      <Drawer
      header={Header}
      >
        <DrawerItem title='Home' /* accessoryLeft={HomeIcon} *//>
        <DrawerItem title='About' /* accessoryLeft={InfoIcon} *//>
        <DrawerItem title='Login' /* accessoryLeft={LoginIcon} *//>
      </Drawer>
      <Text>hhh</Text>
    </SafeAreaView>
  )
}

export default HomeDrawerNavigator

const styles = StyleService.create({  
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    marginHorizontal: 16,
  },
  
  icon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
}); 