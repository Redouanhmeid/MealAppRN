import { ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Divider, Drawer, DrawerItem, IndexPath, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import { BottomTabs } from './BottomTabs';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerContent = ({ navigation, state }) => {
  const styles = useStyleSheet(themedStyles);

  const Header = (props) => (
    <React.Fragment>
      <ImageBackground
      style={[props.style, styles.header]}
      source={require('../assets/bgheader.jpg')}
      />
      <Divider/>
    </React.Fragment>
  )
  
  return (
    <SafeAreaView>
      <Drawer
        header={Header}
        selectedIndex={new IndexPath(state.index)}
        onSelect={index => navigation.navigate(state.routeNames[index.row])}>
          <DrawerItem title='Accueil'/*  accessoryLeft={HomeIcon} *//>
          <DrawerItem title='About' /* accessoryLeft={InfoIcon} *//>
      </Drawer>
    </SafeAreaView>
  )
}

const HomeDrawerNavigator = ({ }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Screen name='Accueil' component={BottomTabs} />
      <Screen name='About' component={AboutScreen} />
    </Navigator>
  )
}

export default HomeDrawerNavigator

const themedStyles = StyleService.create({  
  header: {
    height: 160,
    flexDirection: 'row',
    alignItems: 'center',
  },/* 
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
  }, */
}); 