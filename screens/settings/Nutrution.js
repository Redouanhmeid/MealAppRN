import { View, StyleSheet } from 'react-native'
import React, { useState, useContext, useEffect, useLayoutEffect }  from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Layout, Menu, MenuItem, Divider, TopNavigationAction, TopNavigation, Text } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faArrowLeft, faCalendarAlt, faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { BASE_URL } from '../../client-config'

const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const DietIcon = () => (
  <FontAwesomeIcon icon={ faKitchenSet } size={ 24 } color='#C628A4' />
);
const CalendarIcon = () => (
  <FontAwesomeIcon icon={ faCalendarAlt } size={ 24 } color='#C628A4' />
);

const Nutrution = ({navigation}) => {
  const {programId} = useContext(AuthContext)
  const [MinDate, setMinDate] = useState()

  useEffect(()=>{
    getfirstdate(programId)
    console.log(MinDate)
  }, [MinDate])
  
  const getfirstdate = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/mindate/${programId}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      } 
      const res = await axios(params)
      var dt = new Date(res.data[0].Date)
      let dte = dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear()
      setMinDate(dte)
    } catch (error) {
      console.error(error);
    }
  }

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  const renderFirstDate = () => (
    <Text category='h6'>{MinDate}</Text>
  )
  return (
    <SafeAreaView style={styles.container}>
        <TopNavigation title='Nutrution' accessoryLeft={renderBackAction} />
        <Layout style={styles.container} level='2'>
        <Divider />
        <Menu style={styles.menu}>
          <MenuItem title='Premier jour' style={styles.menuitem} accessoryLeft={CalendarIcon} accessoryRight={renderFirstDate} />
          <MenuItem title='Repas par jour' style={styles.menuitem} accessoryLeft={DietIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Repas Par Jour')}/>
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