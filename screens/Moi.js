import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Text, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import Defis from './defis'
import Objectifs from './objectifs'
import IMC from './imc'
import Progres from './progres'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const CloseIcon = () => (
  <FontAwesomeIcon icon={ faGear } style={styles.closeicon} size={ 40 }/>
);
const Moi = ({ navigation }) => {
  const renderBackAction = () => (
    <TopNavigationAction
      icon={CloseIcon}
      onPress={() => navigation.navigate('Paramètres')}
    />
  );
  return (
    <Layout style={styles.container} level='2'>
      <ScrollView>
        <TopNavigation style={styles.ModalTopContainer} accessoryRight={renderBackAction}/>
        <Text category='h1'>  Moi</Text>
        <Layout style={styles.topContainer} level='1'>
          <Defis />
        </Layout>
        <Layout style={styles.topContainer} level='1'>
          <Objectifs />
        </Layout>
        <Layout style={styles.topContainer} level='1'>
          <Progres />
        </Layout>
        <Layout style={styles.topContainer} level='1'>
          <IMC />
        </Layout>
      </ScrollView>
    </Layout>
  )
}

export default Moi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
  },
  topContainer: {
    flexDirection: 'column',
    margin: 16,
    borderRadius: 12,
  },
  ModalTopContainer: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#00000000',
  },
  closeicon: {
    color: '#C628A4',
  },
});