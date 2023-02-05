import { StyleSheet, View, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Card, Text, Layout, Button, ListItem } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBolt, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const FireIcon = () => (
  <FontAwesomeIcon icon={ faBolt } style={styles.icon} size={ 24 }/>
);
const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faAngleRight } style={styles.icon} size={ 16 }/>
);
const Title = (props) => (
  <Text category='h5'> Objectifs</Text>
);
const Header = (props) => (
  <ListItem
    title={Title}
    accessoryLeft={FireIcon}
    accessoryRight={RightIcon}
  />
);

const Objectifs = () => {
  const {userInfo, leadId} = useContext(AuthContext)
  const [objectif, setObjectif] = useState(null)
  useEffect(() => {
    setObjectif(leadId.poidssouhaite - leadId.poidsactuel)
  }, [objectif])
  
  return (
    <Card style={styles.card} header={Header}>
      <View style={styles.viewclass}>
        <Image
            style={styles.img}
            source={require('../assets/fire.png')}
        />
        <Text category='h5'>Objectif actuel :</Text>
        {objectif >= 0 ? <Text category='h2'>+{objectif} Kg</Text> : <Text category='h2'>{objectif} Kg</Text>}
      </View>
    </Card>
  )
}

export default Objectifs

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
      backgroundColor: "#fff1ee",
      paddingTop: 18,
      paddingBottom: 18,
      borderRadius: 8,
    },
    img: {
      width: 100,
      height: 100,
      marginBottom: 12,
    },
  });