import { ImageBackground, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Divider, Drawer, DrawerItem, IndexPath, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faInfoCircle ,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AboutScreen from '../screens/AboutScreen';
import { BottomTabs } from './BottomTabs';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/login';

const { Navigator, Screen } = createDrawerNavigator();
const HouseIcon = () => (
  <FontAwesomeIcon icon={ faHouse } />
);
const InfoIcon = () => (
  <FontAwesomeIcon icon={ faInfoCircle } />
);
const LeftIcon = () => (
  <FontAwesomeIcon icon={ faArrowRightFromBracket } />
);

const DrawerContent = ({ navigation, state }) => {
  const styles = useStyleSheet(themedStyles);
  const {logout} = useContext(AuthContext);

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
          <DrawerItem title='Accueil' accessoryLeft={HouseIcon}/>
          <DrawerItem title='About' accessoryLeft={InfoIcon}/>
          <DrawerItem title='Déconnexion' onPress={() => {logout()}} accessoryLeft={LeftIcon}/>
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
      <Screen name='Déconnexion' options={{headerShown: false}} component={LoginScreen} />
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