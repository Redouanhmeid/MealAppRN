import { ScrollView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Text, Layout } from '@ui-kitten/components';
import Defis from './defis'
import Objectifs from './objectifs';
import IMC from './imc';
import Progres from './progres';

const Moi = () => {
  const {userInfo, leadInfo} = useContext(AuthContext)
  return (
    <ScrollView>
      {/* <Text>Bonjour {userInfo.user_display_name}</Text> */}
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
  )
}

export default Moi

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    margin: 16,
    borderRadius: 12,
  },
});