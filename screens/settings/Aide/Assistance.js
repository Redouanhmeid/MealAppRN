import { View, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Layout, Text, Divider, TopNavigationAction, TopNavigation, Input, Button } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);

const Assistance = ({navigation}) => {
  const {leadId} = useContext(AuthContext)

  console.log(leadId)
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  const [message, setMessage] = useState('')
  return (
    <SafeAreaView >
      <TopNavigation title='Nous contacter' accessoryLeft={renderBackAction} />
      <Layout style={styles.laycontainer} level='1'>
        <Input
          label='Votre adresse mail'
          style={styles.input}
          size='medium'
          value={leadId.email}
          disabled
        />
        <Input
          label='Votre message'
          style={styles.input}
          multiline={true}
          textStyle={{ minHeight: 128 }}
          placeholder='Votre message'
          value={message}
          onChangeText={nextValue => setMessage(nextValue)}
        />
        <Button onPress={() => console.log(message)} style={styles.input}>
          Envoyer
        </Button>
      </Layout>
    </SafeAreaView>
  )
}

export default Assistance

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  laycontainer: {
    padding: 10,
  },
  input: {
    marginTop: 20,
    marginHorizontal: 10,
  }
});