import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect, useContext, useLayoutEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text, Avatar, Modal, Button, ListItem, Layout, Spinner } from '@ui-kitten/components'
import propTypes from 'prop-types'
import Foods from '../assets/food2.json'
import axios from 'axios'
import { BASE_URL } from '../client-config'
import ModalBreakfast from './ModalBreakfast'
import ModalLunch from './ModalLunch'
import ModalDinner from './ModalDinner'
import ModalEnCas1 from './ModalEnCas1'
import ModalEnCas2 from './ModalEnCas2'
import { ScrollView } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const PlanMealChild = ({getD}) => {
  const {leadId, programId} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas
  const [isLoaded, setIsLoaded] = useState(true)
  const [BreakFastvisible, setBreakFastVisible] = useState(false)
  const [LunchVisible, setLunchVisible] = useState(false)
  const [DinnerVisible, setDinnerVisible] = useState(false)
  const [EnCas1visible, setEnCas1Visible] = useState(false)
  const [EnCas2visible, setEnCas2Visible] = useState(false)
  const [Repas1, setRepas1] = useState(0)
  const [Repas2, setRepas2] = useState(0)
  const [Repas3, setRepas3] = useState(0)
  const [Repas4, setRepas4] = useState(0)
  const [Repas5, setRepas5] = useState(0)
  const [BreakFastTime, setBreakFastTime] = useState()
  const [LunchTime, setLunchTime] = useState()
  const [DinnerTime, setDinnerTime] = useState()
  const [EnCas1Time, setEnCas1Time] = useState()
  const [EnCas2Time, setEnCas2Time] = useState()

  const [day, setDay] = useState()
  let tempDate = new Date()
  let ftodayDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
 
  useLayoutEffect(() => {
    requestTimes()
  }, [LeadId])
  useEffect(() => {
    if (getD === "Aujourd'hui") {setDay(ftodayDate)}
    else { setDay(getD) }
  }, [getD])
  useEffect(() => {
    setIsLoaded(true)
    if(day !== undefined || null){
      if(programId !== undefined || null){
        requestRepas(programId, day)
      }
    }
  }, [day, programId])

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
  const requestTimes = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/repastimes/${LeadId}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      setBreakFastTime(res.data[0].BreakFastTime)
      setLunchTime(res.data[0].LunchTime)
      setDinnerTime(res.data[0].DinnerTime)
      setEnCas1Time(res.data[0].EnCas1Time)
      setEnCas2Time(res.data[0].EnCas2Time)
    } catch (error) {
      console.error(error);
    }
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
  const ItemImage4 = (props) => (
    <Avatar
      {...props}
      style={styles.avatar}
      source={{uri: Foods.find(food => food.id == Repas4).img}}
    />
  )
  const ItemImage5 = (props) => (
    <Avatar
      {...props}
      style={styles.avatar}
      source={{uri: Foods.find(food => food.id == Repas5).img}}
    />
  )
  const ItemInfos1 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.breakfast} category='p2'>PETIT-DÉJEUNER</Text>
        <Text>&#128337; {BreakFastTime}</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas1).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas1).foodName}</Text>
    </View>
  )
  const ItemInfos2 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.lunch} category='p2'>DÉJEUNER</Text>
        <Text>&#128337; {LunchTime}</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas2).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas2).foodName}</Text>
    </View>
  )
  const ItemInfos3 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.dinner} category='p2'>DÎNER</Text>
        <Text>&#128337; {DinnerTime}</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas3).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas3).foodName}</Text>
    </View>
  )
  const ItemInfos4 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.encas1} category='p2'>PREMIER EN-CAS</Text>
        <Text>&#128337; {EnCas1Time}</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas4).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas4).foodName}</Text>
    </View>
  )
  const ItemInfos5 = (props) => (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.encas2} category='p2'>DEUXIÈME EN-CAS</Text>
        <Text>&#128337; {EnCas2Time}</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == Repas5).calories}</Text>
      </View>
      <Text category='h5'>{Foods.find(food => food.id == Repas5).foodName}</Text>
    </View>
  )
  ItemInfos1.propTypes= {Repas1: propTypes.any}
  ItemInfos1.defaultProps = {Repas1: Repas1}
  ItemInfos2.propTypes= {Repas2: propTypes.any}
  ItemInfos2.defaultProps = {Repas2: Repas2}
  ItemInfos3.propTypes= {Repas3: propTypes.any}
  ItemInfos3.defaultProps = {Repas3: Repas3}
  ItemInfos4.propTypes= {Repas4: propTypes.any}
  ItemInfos4.defaultProps = {Repas4: Repas4}
  ItemInfos5.propTypes= {Repas5: propTypes.any}
  ItemInfos5.defaultProps = {Repas5: Repas5}
  
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
          onPress={() => setBreakFastVisible(true)}
        />
        {NRepas[0] > 3 &&
        <ListItem style={styles.container}
          title={ItemInfos4}
          accessoryLeft={ItemImage4}
          onPress={() => setEnCas1Visible(true)}
        />}
        <ListItem
          style={styles.container}
          title={ItemInfos2}
          accessoryLeft={ItemImage2}
          onPress={() => setLunchVisible(true)}
        />
        {NRepas[0] > 4 &&
        <ListItem style={styles.container}
          title={ItemInfos5}
          accessoryLeft={ItemImage5}
          onPress={() => setEnCas1Visible(true)}
        />}
        {NRepas[0] > 2 &&
        <ListItem
          style={styles.container}
          title={ItemInfos3}
          accessoryLeft={ItemImage3}
          onPress={() => setDinnerVisible(true)}
        />}
        <Modal visible={BreakFastvisible}>
          <ModalBreakfast toModalBreakfast={{setBreakFastVisible, Repas1, day}}/>
        </Modal>
        <Modal visible={LunchVisible}>
          <ModalLunch toModalLunch={{setLunchVisible, Repas2, day}}/>
        </Modal>
        <Modal visible={DinnerVisible}>
          <ModalDinner toModalDinner={{setDinnerVisible, Repas3, day}}/>
        </Modal>
        <Modal visible={EnCas1visible}>
          <ModalEnCas1 toModalEnCas1={{setEnCas1Visible, Repas4, day}}/>
        </Modal>
        <Modal visible={EnCas2visible}>
          <ModalEnCas2 toModalEnCas2={{setEnCas2Visible, Repas5, day}}/>
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