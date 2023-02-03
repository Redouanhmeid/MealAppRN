import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useLayoutEffect, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { RepasContext } from '../../screens/AppStack'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Layout, Toggle, Button, Modal, Card, TopNavigation, TopNavigationAction, Text, Divider, Spinner } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { faArrowLeft, faCircleInfo, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '../../client-config'
import { scheduleNotification } from '../../utils/scheduleNotification'
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
  const {scheduleBreakfastNotification, scheduleLunchNotification, scheduleDinnerNotification, scheduleEnCas1Notification, scheduleEnCas2Notification} = scheduleNotification()
  const {leadId} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas
  const {getMealsNotifications, BrNotif, LnNotif, DnNotif, E1Notif, E2Notif, requestTimes, BreakFastTime, LunchTime, DinnerTime, EnCas1Time, EnCas2Time} = useContext(RepasContext)
 
  const [modalvisible, setModalVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true) 
  const saveTimes = async () => {
    const urepastimes = {
      Id: 133,
      BreakFastTime: btime,
      LunchTime: ltime,
      DinnerTime: dtime,
      EnCas1Time: c1time,
      EnCas2Time: c2time
    }
    axios.post(`${BASE_URL}/wp-json/repas/urepastimes/`, urepastimes)
      .then(
        getMealsNotifications(),
        console.log(BreakFastTime)
      )
      .catch(err => {console.log(err.response.data.message)})
      .finally(() => saveNotifs())
  }

  useEffect(() => {
    if(BreakFastTime !== undefined){
      setBTime(BreakFastTime)
      bdate.setHours(Number(BreakFastTime.slice(0, 2)), Number(BreakFastTime.slice(3, 5)), 0)
    }
    if(LunchTime !== undefined){
      setLTime(LunchTime)
      ldate.setHours(Number(LunchTime.slice(0, 2)), Number(LunchTime.slice(3, 5)), 0)
    }
    if(DinnerTime !== undefined){
      setLTime(DinnerTime)
      ddate.setHours(Number(DinnerTime.slice(0, 2)), Number(DinnerTime.slice(3, 5)), 0)
    }
    if(EnCas1Time !== undefined){
      setC1Time(EnCas1Time)
      c1date.setHours(Number(EnCas1Time.slice(0, 2)), Number(EnCas1Time.slice(3, 5)), 0)
    }
    if(EnCas2Time !== undefined){
      setC2Time(EnCas2Time)
      c2date.setHours(Number(EnCas2Time.slice(0, 2)), Number(EnCas2Time.slice(3, 5)), 0)
    }
  }, [BrNotif, LnNotif, DnNotif, E1Notif, E2Notif, BreakFastTime, LunchTime, DinnerTime, EnCas1Time, EnCas2Time])

  useLayoutEffect(() => {
    getMealsNotifications()
    requestTimes()
    setToggles()
    console.log(BrNotif, LnNotif, DnNotif, E1Notif, E2Notif)
  }, [LeadId])

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => saveTimes()}
    />
  );

  const [bdate, setBDate] = useState(new Date())
  const [bmode, setBMode] = useState('time')
  const [bshow, setBShow] = useState(false)
  const [btime, setBTime] = useState('')
  const onBChange = (event, bdate) => {
    const currentDate = bdate
    setBShow(Platform.OS === 'ios')
    setBDate(currentDate)
  };
  const showBMode = (currentMode) => {
    if (Platform.OS === 'android') {setBShow(true)}
    setBMode(currentMode)
  };
  const showBTimepicker = () => {showBMode('time')}

  const [ldate, setLDate] = useState(new Date())
  const [lmode, setLMode] = useState('time')
  const [lshow, setLShow] = useState(false)
  const [ltime, setLTime] = useState('')
  const onLChange = (event, ldate) => {
    const currentDate = ldate
    setLShow(Platform.OS === 'ios')
    setLDate(currentDate)
  };
  const showLMode = (currentMode) => {
    if (Platform.OS === 'android') {setLShow(true)}
    setLMode(currentMode)
  };
  const showLTimepicker = () => {showLMode('time')}

  const [ddate, setDDate] = useState(new Date())
  const [dmode, setDMode] = useState('time')
  const [dshow, setDShow] = useState(false)
  const [dtime, setDTime] = useState('')
  const onDChange = (event, ddate) => {
    const currentDate = ddate
    setDShow(Platform.OS === 'ios')
    setDDate(currentDate)
  };
  const showDMode = (currentMode) => {
    if (Platform.OS === 'android') {setDShow(true)}
    setDMode(currentMode)
  };
  const showDTimepicker = () => {showDMode('time')}

  const [c1date, setC1Date] = useState(new Date())
  const [c1mode, setC1Mode] = useState('time')
  const [c1show, setC1Show] = useState(false)
  const [c1time, setC1Time] = useState('')
  const onC1Change = (event, c1date) => {
    const currentDate = c1date
    setC1Show(Platform.OS === 'ios')
    setC1Date(currentDate)
  };
  const showC1Mode = (currentMode) => {
    if (Platform.OS === 'android') {setC1Show(true)}
    setC1Mode(currentMode)
  };
  const showC1Timepicker = () => {showC1Mode('time')}

  const [c2date, setC2Date] = useState(new Date())
  const [c2mode, setC2Mode] = useState('time')
  const [c2show, setC2Show] = useState(false)
  const [c2time, setC2Time] = useState('')
  const onC2Change = (event, c2date) => {
    const currentDate = c2date
    setC2Show(Platform.OS === 'ios')
    setC2Date(currentDate)
  };
  const showC2Mode = (currentMode) => {
    if (Platform.OS === 'android') {setC2Show(true)}
    setC2Mode(currentMode)
  };
  const showC2Timepicker = () => {showC2Mode('time')}

  function get2Digits(date) {
    return String(date.getHours()).padStart(2, '0')+':'+String(date.getMinutes()).padStart(2, '0');
  }
  useEffect(() => {
    setBTime(get2Digits(bdate)), setLTime(get2Digits(ldate)), setDTime(get2Digits(ddate)), setC1Time(get2Digits(c1date)), setC2Time(get2Digits(c2date))
  }, [bdate, ldate, ddate, c1date, c2time])

  const [bchecked, setBChecked] = useState(false)
  const [lchecked, setLChecked] = useState(false)
  const [dchecked, setDChecked] = useState(false)
  const [c1checked, setC1Checked] = useState(false)
  const [c2checked, setC2Checked] = useState(false)
  const onBCheckedChange = (isChecked) => {setBChecked(isChecked)}
  const onLCheckedChange = (isChecked) => {setLChecked(isChecked)}
  const onDCheckedChange = (isChecked) => {setDChecked(isChecked)}
  const onC1CheckedChange = (isChecked) => {setC1Checked(isChecked)}
  const onC2CheckedChange = (isChecked) => {setC2Checked(isChecked)}
  
  const [notifs, setNotif] = useState([0,0,0,0,0]);
  function setToggles(){
    if(BrNotif){setBChecked(true)}
    else if(!BrNotif){setBChecked(false)}
    if(LnNotif){setLChecked(true)}
    else if(!LnNotif){setLChecked(false)}
    if(DnNotif){setDChecked(true)}
    else if(!DnNotif){setDChecked(false)}
    if(E1Notif){setC1Checked(true)}
    else if(!E1Notif){setC1Checked(false)}
    if(E2Notif){setC2Checked(true)}
    else if(!E2Notif){setC2Checked(false)}
    setIsLoaded(false)
  }
 useEffect(() => {
    if(bchecked === true){notifs[0] = 1, setNotif(notifs)}
    else if(bchecked === false){notifs[0] = 0, setNotif(notifs)}
    if(lchecked === true){notifs[1] = 1, setNotif(notifs)}
    else if(lchecked === false){notifs[1] = 0, setNotif(notifs)}
    if(dchecked === true){notifs[2] = 1, setNotif(notifs)}
    else if(dchecked === false){notifs[2] = 0, setNotif(notifs)}
    if(c1checked === true){notifs[3] = 1, setNotif(notifs)}
    else if(c1checked === false){notifs[3] = 0, setNotif(notifs)}
    if(c2checked === true){notifs[4] = 1, setNotif(notifs)}
    else if(c2checked === false){notifs[4] = 0, setNotif(notifs)}
    console.log(notifs, typeof(notifs))
 }, [bchecked, lchecked, dchecked, c1checked, c2checked])
  const saveNotifs = async () => {
    const unotifs = {
      Id: LeadId,
      meals_notifications: `[${notifs}]`
    }
    axios.post(`${BASE_URL}/wp-json/lead/mealsnotifications/`, unotifs)
      .then(
        console.log(unotifs),
        scheduleBreakfastNotification(),
        scheduleLunchNotification(),
        scheduleDinnerNotification(),
        scheduleEnCas1Notification(),
        scheduleEnCas2Notification(),
      )
      .catch(err => {console.log(err.response.data.message)})
      .finally(() => navigation.goBack())
  }
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
          <TouchableOpacity style={styles.toggles} onPress={showBTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{btime} </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>
        
        {NRepas[0] > 3 &&
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>1er en-cas</Text>
            <Toggle checked={c1checked} onChange={onC1CheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showC1Timepicker} appearance='ghost'>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{c1time}</Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>}

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Déjeuner</Text>
            <Toggle checked={lchecked} onChange={onLCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showLTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{ltime} </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>

        {NRepas[0] > 4 &&
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>2ème en-cas</Text>
            <Toggle checked={c2checked} onChange={onC2CheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showC2Timepicker} appearance='ghost'>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{c2time}</Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>}

        {NRepas[0] > 2 &&
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Dîner</Text>
            <Toggle checked={dchecked} onChange={onDCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showDTimepicker} appearance='ghost'>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{dtime}</Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>}

      {/*   <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Eau</Text>
            <Toggle checked={wchecked} onChange={onWCheckedChange} style={styles.toggleicon}/>
          </View>
        </Layout> */}

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
        {bshow && (
          <DateTimePicker
            testID='dateTimePicker'
            value={bdate}
            display='default'
            mode='time'
            positiveButtonLabel='OK'
            negativeButtonLabel='Annuler'
            onChange={onBChange}
          />
        )}
       {lshow && (
          <DateTimePicker
            testID='dateTimePicker'
            value={ldate}
            display='default'
            mode='time'
            positiveButtonLabel='OK'
            negativeButtonLabel='Annuler'
            onChange={onLChange}
          />
        )}
        {dshow && (
          <DateTimePicker
            testID='dateTimePicker'
            value={ddate}
            display='default'
            mode='time'
            positiveButtonLabel='OK'
            negativeButtonLabel='Annuler'
            onChange={onDChange}
          />
        )}
        {c1show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={c1date}
            display='default'
            mode='time'
            positiveButtonLabel='OK'
            negativeButtonLabel='Annuler'
            minuteInterval={5}
            onChange={onC1Change}
          />
        )}
        {c2show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={c2date}
            display='default'
            mode='time'
            positiveButtonLabel='OK'
            negativeButtonLabel='Annuler'
            minuteInterval={5}
            onChange={onC2Change}
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