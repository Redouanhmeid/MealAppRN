import { View, StyleSheet, Dimensions, StatusBar, SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Layout, Text, Divider, TopNavigationAction, TopNavigation, Input, Button, Tooltip, Popover, Calendar, Datepicker } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose, faInfoCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import { BASE_URL } from '../../client-config'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const CloseIcon = () => (<FontAwesomeIcon icon={ faClose } size={ 28 } />);
const renderDateIcon = () => (<FontAwesomeIcon icon={ faCalendarAlt } size={ 24 } color={'#6c757d'} />);
const kg = () => ( <Text category='s1'>kg</Text>)

const Poids = ({navigation}) => {
  const { leadId } = useContext(AuthContext)
  const LeadId = leadId.Id
  
    const renderBackAction = () => (
      <TopNavigationAction
        icon={CloseIcon}
        onPress={() =>  navigation.goBack()}
      />
    );
    const [poids, setPoids] = useState('')
    const [date, setDate] = useState(new Date())
    const currentdate = new Date()
    const lastmontdate = new Date(new Date().setDate(new Date().getDate()-7));
    const [tooltipvisible, setToolTipVisible] = useState(false)
    const renderTooltip = () => (
      <Text category='c1' onPress={() => setToolTipVisible(true)} color={'#82878c'}><FontAwesomeIcon icon={ faInfoCircle } size={ 14 } color={'#6c757d'} /> Comment vous peser ?</Text>
    );
    
    const save = async(poids, date, LeadId) => {
      const iprogress ={
        weight: poids,
        date: date,
        lead: LeadId
      };
      axios.post(`${BASE_URL}/wp-json/weight/progress`, iprogress)
        .then(console.log(iprogress))
        .catch(err => {console.log(err.response.data.message)})
        .finally(() => navigation.goBack())
    }
  return (
   <KeyboardAwareScrollView
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      keyboardOpeningTime={0}
   >
      <SafeAreaView>
    <Layout style={styles.container} level='1'>
      <StatusBar barStyle="light-content" backgroundColor="#C628A4"/>
      <TopNavigation style={styles.ModalTopContainer} title='Notez votre poids' accessoryLeft={renderBackAction} />
      <Divider/>
      <Layout style={styles.laycontainer} level='1'>
        <Input
          placeholder='Entrez votre poids'
          label='Poids'
          style={styles.input}
          size='large'
          accessoryRight={kg}
          onChangeText={nextValue => setPoids(nextValue)}
          keyboardType= 'numeric'
        />
          <Tooltip
            anchor={renderTooltip}
            visible={tooltipvisible}
            onBackdropPress={() => setToolTipVisible(false)}>
            Utilisez votre balance tous les matins après qvoir vidé votre vessie
          </Tooltip>
        <Datepicker
          label='Date'
          style={styles.input}
          date={date}
          min={lastmontdate}
          max={currentdate}
          onSelect={nextDate => setDate(nextDate)}
          accessoryRight={renderDateIcon}
        />
        <Button onPress={() => save(poids, date.toLocaleDateString('en-CA'), LeadId)} style={styles.input}>
          Envoyer
        </Button>
      </Layout>
    </Layout>
    </SafeAreaView>
   </KeyboardAwareScrollView>
  )
}

export default Poids

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: windowWidth,
      height: windowHeight,
    },
    laycontainer: {
      padding: 10,
    },
    input: {
      marginTop: 20,
      marginHorizontal: 10,
      marginBottom: 8,
    },
    ModalTopContainer: {
      paddingTop: 20,
      paddingBottom: 15,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 4,
      paddingVertical: 8,
    },
});