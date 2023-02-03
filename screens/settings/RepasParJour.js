import { View, StyleSheet, Dimensions, Alert } from 'react-native'
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Radio, RadioGroup, Text, TopNavigationAction, TopNavigation, Layout, Button } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { BASE_URL } from '../../client-config'
import { showMessage } from 'react-native-flash-message'
const windowWidth = Dimensions.get('screen').width

const BackIcon = () => (
    <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
  );

const RepasParJour = ({navigation}) => {
  const {leadId, userInfo, UpdateLeadStorage} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedRepas, setSelectedRepas] = useState(0)


  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );

  useLayoutEffect(()=>{
    if(NRepas === '2-fois') {setSelectedIndex(0)}
    else if(NRepas === '3-fois') {setSelectedIndex(1)}
    else if(NRepas === '4-fois') {setSelectedIndex(2)}
    else if(NRepas === '5-fois') {setSelectedIndex(3)}
  }, [NRepas])

  useEffect(()=>{
    if(selectedIndex === 0) {setSelectedRepas('2-fois')}
    else if(selectedIndex === 1) {setSelectedRepas('3-fois')}
    else if(selectedIndex === 2) {setSelectedRepas('4-fois')}
    else if(selectedIndex === 3) {setSelectedRepas('5-fois')}
  }, [selectedIndex])

  const Save = async () => {
    const urepas ={
        Id: LeadId,
        nrepas: selectedRepas,
    };
    axios.post(`${BASE_URL}/wp-json/leads/nrepas`, urepas)
        .catch(err => {console.log(err.response.data.message)})
    UpdateLeadStorage()
    navigation.goBack()
    setTimeout(() => { Alert.alert(
        "Votre mise à jour a été enregistrée",
        "Votre plan de menu sera changé à patir de demain",
        [
          {
            text: "Fermer",
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
    }, 100);
  }

  return (
    <SafeAreaView style={styles.Areacontainer}>
      <TopNavigation title='Repas par jour' accessoryLeft={renderBackAction} />
      <Layout style={styles.container} level='2'>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={index  => setSelectedIndex(index)}   
        >
            <Radio style={styles.radio}>
              <View style={styles.row}>
                <Text category='h4'>Deux fois</Text>
                <Text category='c1'>Petit-déjeuner, dîner et 2 en cas</Text>
              </View>
            </Radio>
            <Radio style={styles.radio}>
              <View style={styles.row}>
                <Text category='h4'>Trois fois</Text>
                <Text category='c1'>Petit-déjeuner, déjeuner et dîner</Text>
              </View>
            </Radio>
            <Radio style={styles.radio}>
              <View style={styles.row}>
                <Text category='h4'>Quatre fois</Text>
                <Text category='c1'>Petit-déjeuner, en cas, déjeuner et dîner</Text>
              </View>
            </Radio>
            <Radio style={styles.radio}>
              <View style={styles.row}>
                <Text category='h4'>Cinq fois</Text>
                <Text category='c1'>Petit-déjeuner, déjeuner, dîner et 2 en cas</Text>
              </View>
            </Radio>
        </RadioGroup>
      </Layout>
      <Layout style={styles.bottom} level='1'>
        <Button style={{width: windowWidth-50}} size={'large'} onPress={Save}>Sauvegarder</Button>
      </Layout>
    </SafeAreaView>
  )
}

export default RepasParJour

const styles = StyleSheet.create({
    Areacontainer:{
      flex: 1,
      flexDirection: 'column',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 20,
    },
    radio: {
      margin: 2,
      padding: 12,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "#DC58B3",
      width: windowWidth-50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        bottom: 0,
        width: windowWidth,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 1,
        elevation: 15,
      },
});