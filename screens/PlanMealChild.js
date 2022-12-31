import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text, Avatar, Button, ListItem, Layout } from '@ui-kitten/components'
import Foods from '../assets/food2.json'
import axios from 'axios'
import { BASE_URL } from '../client-config'
const windowWidth = Dimensions.get('screen').width

const ItemImage = (props) => (
  <Avatar
    {...props}
    style={styles.avatar}
    source={{uri: Foods[1].img}}
  />
);
const ItemInfos = (props) => (
  <View style={styles.card}>
    <View style={styles.CardHeader}>
      <Text style={styles.repastype} category='p2'>PETIT-DÉJEUNER</Text>
      <Text>&#128337; 10:00</Text>
      <Text>&#x1F525; {Foods[1].calories}</Text>
    </View>
    <Text category='h5'>{Foods[6].foodName}</Text>
  </View>
);

const PlanMealChild = ({getD}) => {
  return (
    <Layout style={styles.view} level='2'>
      <ListItem
        style={styles.container}
        title={ItemInfos}
        accessoryLeft={ItemImage}
        onPress={() => console.log('pressed')}
      />
      <ListItem
        style={styles.container}
        title={ItemInfos}
        accessoryLeft={ItemImage}
      />
      <ListItem
        style={styles.container}
        title={ItemInfos}
        accessoryLeft={ItemImage}
      />
      <Text>{getD} </Text>
    </Layout>
  )
}

export default PlanMealChild

const styles = StyleSheet.create({
    view: {
      flexDirection: 'column',
    },
    container: {
      alignItems: 'flex-start',
      width: windowWidth - 40,
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 12,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 12,
    },
    card: {
      backgroundColor: '#00000000',
      paddingLeft: 8,
      borderWidth: 0,
    },
    CardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    repastype: {
      backgroundColor: '#FCD3E4', 
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 6,
    },
  });