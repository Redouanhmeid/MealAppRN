import React, { useState, useContext } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Button, Layout, Text, Modal } from '@ui-kitten/components'
import { AuthContext } from '../../context/AuthContext';
import Eau from './eau';
import Poids from './poids';
import ModalBreakfast from '../ModalBreakfast';
import ModalEnCas from '../ModalEnCas';
import ModalLunch from '../ModalLunch';
import ModalDinner from '../ModalDinner';

  const WaterImage = () => (
    <Image style={styles.img} source={require('../../assets/water.png')} />
  );
  const WeigthScaleImage = () => (
    <Image style={styles.img} source={require('../../assets/weigth.png')} />
  );
  const BreakfastImage = () => (
    <Image style={styles.img} source={require('../../assets/breakfast.png')} />
  );
  const EnCasImage = (props) => (
    <Image style={styles.img} source={require('../../assets/encas.png')} />
  );
  const LunchImage = (props) => (
    <Image style={styles.img} source={require('../../assets/lunch.png')} />
  );
  const DinnerImage = (props) => (
    <Image style={styles.img} source={require('../../assets/dinner.png')} />
  );

const Plus = ({ navigation, toPlus }) => {
    console.log(toPlus.Repas1)
    const Repas1 = toPlus.Repas1
    const Repas2 = toPlus.Repas2
    const Repas3 = toPlus.Repas3
    const Repas4 = toPlus.Repas4
    const Repas5 = toPlus.Repas5
    const [Eauvisible, setEauVisible] = useState(false)
    const [BreakFastvisible, setBreakFastVisible] = useState(false)
    const [EnCasvisible, setEnCasVisible] = useState(false)
    const [LunchVisible, setLunchVisible] = useState(false)
    const [DinnerVisible, setDinnerVisible] = useState(false)
    

    function handleEauModal() {setEauVisible(true)}
  return (
    <Layout style={styles.container} level='1'>
      <View style={styles.view}>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={WaterImage} onPress={handleEauModal}/>
          <Text>Eau</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={WeigthScaleImage} onPress={() => navigation.navigate('Poids')}/>
          <Text>Poids</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={BreakfastImage} onPress={() => setBreakFastVisible(true)} />
          <Text>Petit-déjeuner</Text>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={EnCasImage} onPress={() => setEnCasVisible(true)}/>
          <Text>En-Cas</Text>
        </View>
        <View style={styles.layout} >
          <Button style={styles.food} accessoryLeft={LunchImage} onPress={() => setLunchVisible(true)}/>
          <Text>Déjeuner</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={DinnerImage} onPress={() => setDinnerVisible(true)}/>
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
      <Modal visible={BreakFastvisible}>
        <ModalBreakfast toModalBreakfast={{setBreakFastVisible, Repas1}}/>
      </Modal>
      <Modal visible={EnCasvisible}>
        <ModalEnCas toModalEnCas={{setEnCasVisible, Repas2}}/>
      </Modal>
      <Modal visible={LunchVisible}>
        <ModalLunch toModalLunch={{setLunchVisible, Repas2}}/>
      </Modal>
      <Modal visible={DinnerVisible}>
        <ModalDinner toModalDinner={{setDinnerVisible, Repas3}}/>
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