import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useLayoutEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Layout, Toggle, Button, Modal, Card, TopNavigation, TopNavigationAction, Text, Divider, Spinner } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { faArrowLeft, faCircleInfo, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '../../client-config'
import axios from 'axios'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const InfoIcon = () => (
  <FontAwesomeIcon icon={ faCircleInfo } size={ 28 } color={'#fff'} />
);
const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
 
const Repas = ({navigation}) => {
  const {leadId} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas
  const [modalvisible, setModalVisible] = useState(false)
  const [bchecked, setBChecked] = useState(false)
  const [lchecked, setLChecked] = useState(false)
  const [dchecked, setDChecked] = useState(false)
  const [c1checked, setC1Checked] = useState(false)
  const [c2checked, setC2Checked] = useState(false)
  const [wchecked, setWChecked] = useState(false)

  const onBCheckedChange = (isChecked) => {setBChecked(isChecked)}
  const onLCheckedChange = (isChecked) => {setLChecked(isChecked)}
  const onDCheckedChange = (isChecked) => {setDChecked(isChecked)}
  const onC1CheckedChange = (isChecked) => {setC1Checked(isChecked)}
  const onC2CheckedChange = (isChecked) => {setC2Checked(isChecked)}
  const onWCheckedChange = (isChecked) => {setWChecked(isChecked)}
  const [isLoaded, setIsLoaded] = useState(true)
  const [BreakFastTime, setBreakFastTime] = useState()
  const [LunchTime, setLunchTime] = useState()
  const [DinnerTime, setDinnerTime] = useState()
  const [EnCas1Time, setEnCas1Time] = useState()
  const [EnCas2Time, setEnCas2Time] = useState()
  
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
    setIsLoaded(false)
  }
  useLayoutEffect(() => {
    requestTimes()
    console.log(NRepas[0])
  }, [LeadId])
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, date) => {
    const currentDate = date;
    setShow(Platform.OS === 'ios')
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };
  const showTimepicker = () => {
    showMode('time');
  };

  if(isLoaded) {
    return (
      <Layout style={styles.spinnercontainer} level='2'>
        <Spinner size='giant'/>
      </Layout>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='Nutrution' accessoryLeft={renderBackAction} />
      <Layout style={styles.container} level='2'>
        <Button onPress={() => setModalVisible(true)} accessoryLeft={InfoIcon} >
            <Text>Temps consacré au repas recommandé basé sur le schéma de jeûne intermittent 16/8</Text>
        </Button>

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Petit-déjeuner</Text>
            <Toggle checked={bchecked} onChange={onBCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{BreakFastTime} </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>
        
        {NRepas[0] > 3 &&
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>1er en-cas</Text>
            <Toggle checked={c1checked} onChange={onC1CheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker} appearance='ghost'>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{EnCas1Time}</Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>}

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Déjeuner</Text>
            <Toggle checked={lchecked} onChange={onLCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{LunchTime} </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>

        {NRepas[0] > 4 &&
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>2ème en-cas</Text>
            <Toggle checked={c2checked} onChange={onC2CheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker} appearance='ghost'>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{EnCas2Time}</Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>}

        {NRepas[0] > 2 &&
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Dîner</Text>
            <Toggle checked={dchecked} onChange={onDCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker} appearance='ghost'>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{DinnerTime}</Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>}

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Eau</Text>
            <Toggle checked={wchecked} onChange={onWCheckedChange} style={styles.toggleicon}/>
          </View>
        </Layout>

        <Modal visible={modalvisible} style={styles.modal} backdropStyle={styles.backdrop}>
          <Card disabled={true}>
            <Text category='h3'>Jeûne intermittent environ 16/8*</Text>
            <Text style={styles.text}><Text style={styles.strong}>Le jeûne intermittent 16/8</Text> implique une consommation limitée d’aliments et de boissons caloriques à une fenêtre de huit heures par jour et une abstention d’aliments pour les 16 heures restantes.</Text>
            <Text style={styles.text}><Text style={styles.strong}>Le jeûne intermittent 16/8</Text> est facile à suivre, flexible et pratique. Des études menées sur des animaux et sur des humains suggèrent qu’il peut augmenter la perte de poids, améliorer les taux de sucre dans le sang, le fonctionnement du cerveau et la longévité.</Text>
            <Button onPress={() => setModalVisible(false)}>
              Fermer
            </Button>
          </Card>
        </Modal>
      </Layout>
      <View>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            display='default'
            mode='time'
            positiveButtonLabel='OK'
            negativeButtonLabel='Annuler'
            minuteInterval={5}
            onChange={onChange}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Repas

const styles = StyleSheet.create({
  spinnercontainer: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
      width: windowWidth,
      height: windowHeight,
    },
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
    modal: {
        flex:1,
        justifyContent: 'flex-end',
        height: windowHeight * 92 / 100,
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        marginVertical: 16,
        fontSize: 18,
    },
    strong:{
        fontSize: 18,
        fontWeight: '700'
    },
    toggles: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: windowWidth,
        fontSize: 18,
        borderTopWidth: 1,
        borderColor: '#cecece',
    },
    togglelabel: {
      flexGrow: 3,
      paddingLeft: 10,
      fontSize: 16,
    },
    toggleicon: {
      right: 0,
      paddingRight: 10,
    },
    hourelabel: {
      left: 0,
      paddingRight: 10,
      paddingVertical: 3,
      fontSize: 16,
      fontWeight: '600',
    },
    block: {
      marginTop: 20,
      borderBottomWidth: 1,
      borderColor: '#cecece',
    },
  });