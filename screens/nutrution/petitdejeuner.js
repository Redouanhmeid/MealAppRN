import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text, Layout } from '@ui-kitten/components';

const Petitdejeuner = () => {
  return (
    <Layout style={styles.container} level='2'>
      <Text>Petitdejeuner</Text>
    </Layout>
  )
}

export default Petitdejeuner

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 16,
    },
});