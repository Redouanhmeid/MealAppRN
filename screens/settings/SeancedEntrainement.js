import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Layout, Text, CheckBox, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
const windowWidth = Dimensions.get('screen').width

const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);

const SeancedEntrainement = ({navigation}) => {
  const [checked, setChecked] = useState(false)
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  const onCheckedChange = (isChecked) => {setChecked(isChecked)}

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
  const [lundichecked, setLundiChecked] = useState(false)
  const [mardichecked, setMardiChecked] = useState(false)
  const [mercredichecked, setMercrediChecked] = useState(false)
  const [jeudichecked, setJeudiChecked] = useState(false)
  const [vendredichecked, setVendrediChecked] = useState(false)
  const [samedichecked, setSamediChecked] = useState(false)
  const [dimanchechecked, setDimancheChecked] = useState(false)
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
              onChange={nextChecked => setDimancheChecked(nextChecked)}>
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
              onChange={nextChecked => setLundiChecked(nextChecked)}>
              {`Dimanche`}
            </CheckBox>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>11:30 </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>
      </Layout>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='time'
            onChange={onChange}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default SeancedEntrainement

const styles = StyleSheet.create({
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