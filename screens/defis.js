import { StyleSheet, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Card, Text, Layout, Button, ListItem } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFire, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const FireIcon = () => (
  <FontAwesomeIcon icon={ faFire } style={styles.icon} size={ 24 }/>
);
const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faAngleRight } style={styles.icon} size={ 16 }/>
);
const Title = (props) => (
  <Text category='h5'> Défis</Text>
);
const Header = (props) => (
  <ListItem
    title={Title}
    accessoryLeft={FireIcon}
    accessoryRight={RightIcon}
  />
);

const Defis = () => {
    const {userInfo} = useContext(AuthContext)
  return (
    <Card style={styles.card} header={Header}>
      <View style={styles.viewclass}>
        <Image
            style={styles.img}
            source={require('../assets/defis.png')}
        />
        <Text category='h5' style={styles.title1}>Vous avez des défis actifs !</Text>
        <Text style={styles.title2}>
            Relevez les défis et rapprochez-vous de votre objectif 
        </Text>
      </View>
    </Card>
  )
}

export default Defis

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
    },
    icon: {
      color: "#C628A4",
      width: 64,
      height: 64,
    },
    viewclass: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#eff8ff",
      paddingTop: 18,
      paddingBottom: 18,
      borderRadius: 8,
    },
    title1: {
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 8,
    },
    title2: {
      textAlign: "center",
    },
    img: {
      width: 133,
      height: 80,
      marginBottom: 8,
    },
  });