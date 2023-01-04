import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text, Avatar, Modal, Button, ListItem, Layout, Spinner } from '@ui-kitten/components'
import propTypes from 'prop-types'
import Foods from '../assets/food2.json'
import axios from 'axios'
import { BASE_URL } from '../client-config'
import ModalBreakfast from './ModalBreakfast'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


const PlanMealChild = ({getD, getMinDate, getMaxDate}) => {
  const {userInfo, leadId} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas
  const [ProgramId, setProgramId] = useState()
  const [isLoaded, setIsLoaded] = useState(true)
  const [visible, setVisible] = useState(false)
  const [Repas1, setRepas1] = useState()
  const [Repas2, setRepas2] = useState()
  const [Repas3, setRepas3] = useState()
  const [Repas4, setRepas4] = useState()
  const [Repas5, setRepas5] = useState()

  const [day, setDay] = useState()
  let tempDate = new Date()
  let ftodayDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
  
  useEffect(() => {
    requestProgramId()
  }, [ProgramId])

  useEffect(() => {
    if (getD === "Aujourd'hui") {setDay(ftodayDate)}
    else { setDay(getD) }
  }, [getD])

  useEffect(() => {
    setIsLoaded(true)
    if(ProgramId !== undefined || null){
      getrangedate(ProgramId)
      requestRepas(ProgramId, day)
    }
  }, [day, ProgramId])

  const requestProgramId = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/idprogrambylead/${LeadId}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      setProgramId(res.data[0].Id_Program)
    } catch (error) {
      console.error(error);
    }
  }
  const getrangedate = async (Item) => {
    try {
      var paramsmin = {
        url: `${BASE_URL}/wp-json/repas/mindate/${Item}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      } 
      var paramsmax = {
        url: `${BASE_URL}/wp-json/repas/maxdate/${Item}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      } 
      const resmin = await axios(paramsmin)
      const resmax = await axios(paramsmax)
      getMinDate(resmin.data[0].Date)
      getMaxDate(resmax.data[0].Date)
    } catch (error) {
      console.error(error);
    }
    
  }
  const requestRepas = async (Item, day) => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/idrepas/idprog=${Item}/repasday=${day}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      setRepas1(res.data[0].Repas[1])
      setRepas2(res.data[0].Repas[3])
      setRepas3(res.data[0].Repas[5])
      if(res.data[0].Repas[7] !== undefined || null){
        setRepas4(res.data[0].Repas[7])
      }
      if(res.data[0].Repas[9] !== undefined || null){
        setRepas5(res.data[0].Repas[9])
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoaded(false)
  }
  
  const ItemImage1 = (props) => (
    <Avatar
      {...props}
      style={styles.avatar}
      source={{uri: Foods.find(food => food.id == Repas1).img}}
    />
  )
  const ItemImage2 = (props) => (
    <Avatar
      {...props}
      style={styles.avatar}
      source={{uri: Foods.find(food => food.id == Repas2).img}}
    />
  )
  const ItemImage3 = (props) => (
    <Avatar
      {...props}
      style={styles.avatar}
      source={{uri: Foods.find(food => food.id == Repas3).img}}
    />
  )
  const ItemInfos1 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.breakfast} category='p2'>PETIT-DÉJEUNER</Text>
        <Text>&#128337; 10:00</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas1).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas1).foodName}</Text>
    </View>
  )
  const ItemInfos2 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.lunch} category='p2'>DÉJEUNER</Text>
        <Text>&#128337; 14:00</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas2).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas2).foodName}</Text>
    </View>
  )
  const ItemInfos3 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.dinner} category='p2'>DÎNER</Text>
        <Text>&#128337; 18:00</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas3).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas3).foodName}</Text>
    </View>
  )
  ItemInfos1.propTypes= {Repas1: propTypes.string.isRequired}
  ItemInfos1.defaultProps = {Repas1: Repas1}
  ItemInfos2.propTypes= {Repas2: propTypes.string.isRequired}
  ItemInfos2.defaultProps = {Repas2: Repas2}
  ItemInfos3.propTypes= {Repas3: propTypes.string.isRequired}
  ItemInfos3.defaultProps = {Repas3: Repas3}
  
  if(isLoaded) {
    return (
      <Layout style={styles.spinnercontainer} level='2'>
        <Spinner size='giant'/>
      </Layout>
    )
  }
  return (
    <Layout style={styles.view} level='2'>
      <ListItem
        style={styles.container}
        title={ItemInfos1}
        accessoryLeft={ItemImage1}
        onPress={() => setVisible(true)}
      />
      <ListItem
        style={styles.container}
        title={ItemInfos2}
        accessoryLeft={ItemImage2}
      />
      <ListItem
        style={styles.container}
        title={ItemInfos3}
        accessoryLeft={ItemImage3}
      />

      <Modal visible={visible}>
        <ModalBreakfast toModalBreakfast={{setVisible, Repas1}}/>
      </Modal>
    </Layout>
  )
}

export default PlanMealChild

const styles = StyleSheet.create({
  spinnercontainer: {
    flexDirection: 'row',
    justifyContent:'center',
    width: windowWidth,
    height: windowHeight,
    marginTop: 80,
  },
    view: {
      flexDirection: 'column',
    },
    container: {
      alignItems: 'flex-start',
      width: windowWidth - 40,
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 12,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 12,
    },
    card: {
      backgroundColor: '#00000000',
      paddingLeft: 8,
      borderWidth: 0,
    },
    CardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    breakfast: {
      backgroundColor: '#FCD3E4', 
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 6,
    },
    lunch: {
      backgroundColor: '#D5E6FE', 
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 6,
    },
    dinner: {
      backgroundColor: '#FFEED0', 
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 6,
    },
  });