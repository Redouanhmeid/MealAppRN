import { View, StyleSheet } from 'react-native'
import React, { useState, useContext }  from 'react'
import { Layout, Menu, MenuItem, Divider, TopNavigationAction, TopNavigation } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faArrowLeft, faCalendar, faPlateWheat } from '@fortawesome/free-solid-svg-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const DietIcon = () => (
  <FontAwesomeIcon icon={ faPlateWheat } size={ 24 } color='#C628A4' />
);
const CalendarIcon = () => (
  <FontAwesomeIcon icon={ faCalendar } size={ 24 } color='#C628A4' />
);

const Nutrution = ({navigation}) => {
const [selectedIndex, setSelectedIndex] = useState(null)
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
);
  return (
    <SafeAreaView style={styles.container}>
        <TopNavigation title='Nutrution' accessoryLeft={renderBackAction} />
        <Layout style={styles.container} level='2'>
        <Divider />
        <Menu
            style={styles.menu}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}>
            <MenuItem title='Premier jour' style={styles.menuitem} accessoryLeft={DietIcon} />
            <MenuItem title='Repas par jour' style={styles.menuitem} accessoryLeft={CalendarIcon} accessoryRight={RightIcon} />
        </Menu>
        </Layout>
    </SafeAreaView>
  )
}

export default Nutrution

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