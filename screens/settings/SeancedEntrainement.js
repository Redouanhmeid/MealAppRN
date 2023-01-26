import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Layout, Text, CheckBox, Toggle, TopNavigation, TopNavigationAction, Spinner } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useEffect, useState, useContext, useLayoutEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { BASE_URL } from '../../client-config'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);

const SeancedEntrainement = ({navigation}) => {
  const {leadId} = useContext(AuthContext)
  const [checked, setChecked] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true)
  
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {putWorkoutdays(), putTime(), navigation.goBack()}}
    />
  );
  const onCheckedChange = (isChecked) => {setChecked(isChecked)}

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

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
  const [lundichecked, setLundiChecked] = useState(false)
  const [mardichecked, setMardiChecked] = useState(false)
  const [mercredichecked, setMercrediChecked] = useState(false)
  const [jeudichecked, setJeudiChecked] = useState(false)
  const [vendredichecked, setVendrediChecked] = useState(false)
  const [samedichecked, setSamediChecked] = useState(false)
  const [dimanchechecked, setDimancheChecked] = useState(false)
  const [time, setTime] = useState('')

  var workout = {
    days: [0,0,0,0,0,0,0],
    time: time
  }
  useEffect(()=>{
    if(lundichecked){workout.days[0]=1}
    else if(!lundichecked){workout.days[0]=0}
    if(mardichecked){workout.days[1]=1}
    else if(!mardichecked){workout.days[1]=0}
    if(mercredichecked){workout.days[2]=1}
    else if(!mercredichecked){workout.days[2]=0}
    if(jeudichecked){workout.days[3]=1}
    else if(!jeudichecked){workout.days[3]=0}
    if(vendredichecked){workout.days[4]=1}
    else if(!vendredichecked){workout.days[4]=0}
    if(samedichecked){workout.days[5]=1}
    else if(!samedichecked){workout.days[5]=0}
    if(dimanchechecked){workout.days[6]=1}
    else if(!dimanchechecked){workout.days[6]=0}
  })

  const getWorkoutdays = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/lead/workoutdays/${leadId.Id}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      console.log(res.data[0])
      if(res.data[0].workout_days[1] === '1'){setLundiChecked(true), workout.days[0]=1}
      else if(res.data[0].workout_days[1] !== '1'){setLundiChecked(false), workout.days[0]=0}
      if(res.data[0].workout_days[3] === '1'){setMardiChecked(true), workout.days[1]=1}
      else if(res.data[0].workout_days[3] !== '1'){setMardiChecked(false), workout.days[1]=0}
      if(res.data[0].workout_days[5] === '1'){setMercrediChecked(true), workout.days[2]=1}
      else if(res.data[0].workout_days[5] !== '1'){setMercrediChecked(false), workout.days[2]=0}
      if(res.data[0].workout_days[7] === '1'){setJeudiChecked(true), workout.days[3]=1}
      else if(res.data[0].workout_days[7] !== '1'){setJeudiChecked(false), workout.days[3]=0}
      if(res.data[0].workout_days[9] === '1'){setVendrediChecked(true), workout.days[4]=1}
      else if(res.data[0].workout_days[9] !== '1'){setVendrediChecked(false), workout.days[4]=0}
      if(res.data[0].workout_days[11] === '1'){setSamediChecked(true), workout.days[5]=1}
      else if(res.data[0].workout_days[11] !== '1'){setSamediChecked(false), workout.days[5]=0}
      if(res.data[0].workout_days[13] === '1'){setDimancheChecked(true), workout.days[6]=1}
      else if(res.data[0].workout_days[13] !== '1'){setDimancheChecked(false), workout.days[6]=0}
    } catch (error) {
      console.error(error)
    }
    setIsLoaded(false)
  }

  const putWorkoutdays = async () => {
    const uworkout = {
      Id: leadId.Id,
      workout_days: `[${workout.days}]`
    }
    axios.post(`${BASE_URL}/wp-json/lead/workoutdays/`, uworkout)
      .catch(err => {console.log(err.response.data.message)})
  }

  const getTime = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/lead/workouttime/${leadId.Id}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      console.log(res.data[0])
      setTime(res.data[0].WorkoutTime)
      date.setHours(res.data[0].WorkoutTime.slice(0, 2))
      date.setMinutes(res.data[0].WorkoutTime.slice(3, 5))
    } catch (error){
      console.error(error)
    }
    setIsLoaded(false)
  }

  const putTime = async () => {
    const uworkout = {
      Id: leadId.Id,
      workout_time: workout.time
    }
    axios.post(`${BASE_URL}/wp-json/lead/workouttime/`, uworkout)
      .catch(err => {console.log(err.response.data.message)})
  }
  useLayoutEffect(()=>{
    getWorkoutdays()
    getTime()
  }, [leadId.Id])

  function get2Digits(date) {
    return String(date.getHours()).padStart(2, '0')+':'+String(date.getMinutes()).padStart(2, '0');
  }
  
  useEffect(()=>{
    setTime(get2Digits(date))
  }, [date])

  if(isLoaded) {
    return (
      <Layout style={styles.spinnercontainer} level='2'>
        <Spinner size='giant'/>
      </Layout>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="Séance d'entraînenent" accessoryLeft={renderBackAction} />
      <Layout style={styles.container} level='2'>
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Entraînenent</Text>
            <Toggle checked={checked} onChange={onCheckedChange} style={styles.toggleicon}/>
          </View>
          <View style={styles.weekdays}>
            <CheckBox
              checked={lundichecked}
              style={styles.checkbox}
              onChange={nextChecked => setLundiChecked(nextChecked)}>
              {`Lundi`}
            </CheckBox>
            <CheckBox
              checked={mardichecked}
              style={styles.checkbox}
              onChange={nextChecked => setMardiChecked(nextChecked)}>
              {`Mardi`}
            </CheckBox>
            <CheckBox
              checked={mercredichecked}
              style={styles.checkbox}
              onChange={nextChecked => setMercrediChecked(nextChecked)}>
              {`Mercredi`}
            </CheckBox>
            <CheckBox
              checked={jeudichecked}
              style={styles.checkbox}
              onChange={nextChecked => setJeudiChecked(nextChecked)}>
              {`Jeudi`}
            </CheckBox>
            <CheckBox
              checked={vendredichecked}
              style={styles.checkbox}
              onChange={nextChecked => setVendrediChecked(nextChecked)}>
              {`Vendredi`}
            </CheckBox>
            <CheckBox
              checked={samedichecked}
              style={styles.checkbox}
              onChange={nextChecked => setSamediChecked(nextChecked)}>
              {`Samedi`}
            </CheckBox>
            <CheckBox
              checked={dimanchechecked}
              style={styles.checkbox}
              onChange={nextChecked => setDimancheChecked(nextChecked)}>
              {`Dimanche`}
            </CheckBox>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>{time} </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>
      </Layout>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
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

export default SeancedEntrainement

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
  weekdays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#cecece',
  },
  checkbox: {
    width: windowWidth * 44/ 100,
    paddingVertical: 8,
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
  }
});