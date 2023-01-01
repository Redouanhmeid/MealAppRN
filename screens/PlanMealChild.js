import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text, Avatar, Button, ListItem, Layout, Spinner } from '@ui-kitten/components'
import propTypes from 'prop-types'
import Foods from '../assets/food2.json'
import axios from 'axios'
import { BASE_URL } from '../client-config'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


const PlanMealChild = ({getD}) => {
  const {userInfo, leadId} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas
  const [ProgramId, setProgramId] = useState()
  const [isLoaded, setIsLoaded] = useState(true)
  const [Repas, setRepas] = useState()

  const [day, setDay] = useState()
  let tempDate = new Date()
  let ftodayDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

  useEffect(() => {
    if (getD === "Aujourd'hui") {setDay(ftodayDate)}
    else { setDay(getD) }
    requestProgramId()
    if(ProgramId > 0) {requestRepas()}
    console.log(Repas, typeof(Repas))
  }, [ProgramId, isLoaded])

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
  const requestRepas = async () => {
    var params = {
      url: `${BASE_URL}/wp-json/repas/idprogram/${ProgramId}`,
      method: 'get',
      rejectUnauthorized: false,//add when working with https sites
      requestCert: false,//add when working with https sites
      agent: false,//add when working with https sites
    }
    const res = await axios(params)
    setRepas(res.data[0].Repas)
    setIsLoaded(false)
  }
  
  const ItemImage = (props) => (
    <Avatar
      {...props}
      style={styles.avatar}
      source={{uri: Foods.find(food => food.id == 1).img}}
    />
  );
  function ItemInfos(props) {
    return (
    <View style={styles.card} {...props}>
      <View style={styles.CardHeader}>
        <Text style={styles.repastype} category='p2'>PETIT-DÉJEUNER</Text>
        <Text>&#128337; 10:00</Text>
        <Text>&#x1F525; {Foods.find(food => food.id == 1).calories}</Text>
      </View>
      <Text category='h5'>{Foods[6].foodName} {props.Repas}</Text>
    </View>
    )
    };
  ItemInfos.propTypes= {
    Repas: propTypes.string.isRequired
  }
  ItemInfos.defaultProps = {
    Repas: Repas
  }
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
        title={ItemInfos}
        accessoryLeft={ItemImage}
        onPress={() => console.log('pressed')}
      />
      <ListItem
        style={styles.container}
        title={ItemInfos}
        accessoryLeft={ItemImage}
      />
      <ListItem
        style={styles.container}
        title={ItemInfos}
        accessoryLeft={ItemImage}
      />
      <Text>{day} </Text>
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
    },
    repastype: {
      backgroundColor: '#FCD3E4', 
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 6,
    },
  });