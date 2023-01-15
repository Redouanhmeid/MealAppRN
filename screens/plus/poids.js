import { View, StyleSheet, Dimensions, StatusBar, SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Layout, Text, Divider, TopNavigationAction, TopNavigation, Input, Button, Tooltip, Popover, Calendar, Datepicker } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose, faInfoCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const CloseIcon = () => (<FontAwesomeIcon icon={ faClose } size={ 28 } />);
const renderDateIcon = () => (<FontAwesomeIcon icon={ faCalendarAlt } size={ 24 } color={'#6c757d'} />);
const kg = () => ( <Text category='s1'>kg</Text>)

const Poids = ({navigation}) => {
    const renderBackAction = () => (
      <TopNavigationAction
        icon={CloseIcon}
        onPress={() =>  navigation.goBack()}
      />
    );
    const [poids, setPoids] = useState('')
    const [date, setDate] = useState(new Date())
    const [tooltipvisible, setToolTipVisible] = useState(false)
    const renderTooltip = () => (
      <Text category='c1' onPress={() => setToolTipVisible(true)} color={'#82878c'}><FontAwesomeIcon icon={ faInfoCircle } size={ 14 } color={'#6c757d'} /> Comment vous peser ?</Text>
    );

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
          placeholder='Place your Text'
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
          onSelect={nextDate => setDate(nextDate)}
          accessoryRight={renderDateIcon}
        />
        <Button onPress={() => console.log(poids, date.toLocaleDateString('fr'))} style={styles.input}>
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