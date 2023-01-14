import React, {useState } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Button, Popover, Layout, Text, TopNavigation, TopNavigationAction, Modal } from '@ui-kitten/components'
import Eau from './eau';


  const WaterImage = () => (
    <Image
        style={styles.img}
        source={require('../../assets/water.png')}
    />
  );
  const WeigthScaleImage = () => (
    <Image
        style={styles.img}
        source={require('../../assets/weigth.png')}
    />
  );
  const BreakfastImage = () => (
    <Image
      style={styles.img}
      source={require('../../assets/breakfast.png')}
    />
  );
  const EnCasImage = (props) => (
    <Image
      style={styles.img}
      source={require('../../assets/encas.png')}
    />
  );
  const LunchImage = (props) => (
    <Image
      style={styles.img}
      source={require('../../assets/lunch.png')}
    />
  );
  const DinnerImage = (props) => (
    <Image
      style={styles.img}
      source={require('../../assets/dinner.png')}
    />
  );
  

const Plus = () => {
    const [Eauvisible, setEauVisible] = useState(false)
    function handleEauModal() {
       setEauVisible(true)
    }
  return (
    <Layout style={styles.container} level='1'>
      <View style={styles.view}>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={WaterImage} onPress={handleEauModal}/>
          <Text>Eau</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={WeigthScaleImage}/>
          <Text>Poids</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={BreakfastImage}/>
          <Text>Petit-déjeuner</Text>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={EnCasImage}/>
          <Text>En-Cas</Text>
        </View>
        <View style={styles.layout} >
          <Button style={styles.food} accessoryLeft={LunchImage}/>
          <Text>Déjeuner</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={DinnerImage}/>
          <Text>Dîner</Text>
        </View>
      </View>
      <Modal 
        visible={Eauvisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setEauVisible(false)}
      >
        <Eau toEau={{setEauVisible}}/>
      </Modal>
    </Layout>
  )
}

export default Plus

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 0,
      paddingHorizontal: 10,
    },
    view: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 20,
    },
    layout: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    food: {
      margin: 2,
      backgroundColor: '#fff',
      borderColor: '#fff',
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    img: {
      width: 60,
      height: 60,
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });