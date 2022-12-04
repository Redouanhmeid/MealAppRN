import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Layout } from '@ui-kitten/components'
import BottomTabs from '../navigation/BottomTabs'

const Home = () => {
  return (
    <Layout style={styles.container} level='1'>
        <Layout style={styles.layout} level='1'>
        <Text>AppStack</Text>
      </Layout>
      <Layout style={styles.bottom} level='1'>
        <BottomTabs />
        </Layout>
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom: {
      justifyContent: 'flex-end',
    },
    topnav: {
      justifyContent: 'flex-start',
      marginTop: 30,
    },
  })