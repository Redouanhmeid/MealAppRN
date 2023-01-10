import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Layout, Menu, MenuItem, Divider, TopNavigationAction, TopNavigation, Text } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faArrowLeft, faPersonRunning, faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const DietIcon = () => (
  <FontAwesomeIcon icon={ faKitchenSet } size={ 24 } color='#C628A4' />
);
const SeanceIcon = () => (
  <FontAwesomeIcon icon={ faPersonRunning } size={ 24 } color='#C628A4' />
);

const Notifications = ({navigation}) => {
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
        <TopNavigation title='Notifications' accessoryLeft={renderBackAction} />
        <Layout style={styles.container} level='2'>
        <Divider />
        <Menu style={styles.menu}>
            <MenuItem title='Repas' style={styles.menuitem} accessoryLeft={DietIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Repas')}/>
            <MenuItem title="Séance d'entraînenent" style={styles.menuitem} accessoryLeft={SeanceIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate("Séance d'entraînenent")}/>
        </Menu>
        </Layout>
    </SafeAreaView>
  )
}

export default Notifications

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
  }
});