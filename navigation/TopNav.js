import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { MenuItem, OverflowMenu, Avatar, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faInfo, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MenuIcon = () => (
  <FontAwesomeIcon icon={ faBars } size={32} />
);
const InfoIcon = () => (
  <FontAwesomeIcon icon={ faInfo } />
);
const LogoutIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } />
);

const TopNav = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  );

  const renderOverflowMenuAction = () => (
    <>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title='About'/>
        <MenuItem accessoryLeft={LogoutIcon} title='Logout'/>
      </OverflowMenu>
    </>
  );

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </View>
  );

  return (
    <TopNavigation
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
    />
  )
}

export default TopNav

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 144,
      height: 40,
      marginHorizontal: 16,
    },
});
