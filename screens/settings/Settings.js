import { View, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Layout, Menu, MenuItem, Divider, TopNavigationAction, TopNavigation } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faArrowLeft, faArrowRightFromBracket, faStar, faInfo, faClipboardList, faBell, faUserAlt, faPlateWheat } from '@fortawesome/free-solid-svg-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Nutrution from './Nutrution'
import Compte from './Compte'
import Notifications from './Notifications'
import Detailspersonels from './Detailspersonels'
import Aide from './Aide'
import Nousnoter from './Nousnoter'

const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const DietIcon = () => (
  <FontAwesomeIcon icon={ faPlateWheat } size={ 24 } color='#C628A4' />
);
const UserIcon = () => (
  <FontAwesomeIcon icon={ faUserAlt } size={ 24 } color='#C628A4' />
);
const NotificationsIcon = () => (
  <FontAwesomeIcon icon={ faBell } size={ 24 } color='#C628A4' />
);
const DetailsIcon = () => (
  <FontAwesomeIcon icon={ faClipboardList } size={ 24 } color='#C628A4' />
);
const HelpIcon = () => (
  <FontAwesomeIcon icon={ faInfo } size={ 24 } color='#C628A4' />
);
const StarIcon = () => (
  <FontAwesomeIcon icon={ faStar } size={ 24 } color='#C628A4' />
);
const LogoutIcon = () => (
  <FontAwesomeIcon icon={ faArrowRightFromBracket } size={ 24 } color='#C628A4' />
);

const Settings = ({navigation, state}) => {
  const {logout} = useContext(AuthContext);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='Paramètres' accessoryLeft={renderBackAction} />
      <Layout style={styles.container} level='2'>
      <Divider />
        <Menu
          style={styles.menu}
          selectedIndex={selectedIndex}
          onSelect={(index) => {setSelectedIndex(index), console.log(index)}}>
          <MenuItem title='Nutrution' style={styles.menuitem} accessoryLeft={DietIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Nutrution')} />
          <MenuItem title='Compte' style={styles.menuitem} accessoryLeft={UserIcon} accessoryRight={RightIcon} />
          <MenuItem title='Notifications' style={styles.menuitem} accessoryLeft={NotificationsIcon} accessoryRight={RightIcon} />
        
          <MenuItem title='Détails personnels' style={styles.menuitem, styles.menutop} accessoryLeft={DetailsIcon} accessoryRight={RightIcon} />
        
          <MenuItem title='Aide' style={styles.menuitem, styles.menutop} accessoryLeft={HelpIcon} accessoryRight={RightIcon} />
          <MenuItem title='Nous noter' style={styles.menuitem} accessoryLeft={StarIcon} accessoryRight={RightIcon}/>
        
          <MenuItem title='Se déconnecter' style={styles.menuitem, styles.menutop} accessoryLeft={LogoutIcon} onPress={() => logout()} />
        </Menu>
      </Layout>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  menu: {
    flex: 1,
    marginTop: 10,
  },
  menuitem: {
    paddingHorizontal: 12,
    height: 65,
  },
  menutop: {
    paddingHorizontal: 12,
    height: 65,
    marginTop: 20,
  }
});