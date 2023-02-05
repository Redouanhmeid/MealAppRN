import React, { useState, useContext } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button, Layout, Text, Modal } from '@ui-kitten/components'
import Eau from './eau';
import Poids from './poids';
import ModalBreakfast from '../ModalBreakfast';
import ModalEnCas1 from '../ModalEnCas1';
import ModalLunch from '../ModalLunch';
import ModalDinner from '../ModalDinner';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import ModalEnCas2 from '../ModalEnCas2';
import { RepasContext } from '../AppStack';

  const WaterImage = () => (
    <Image style={styles.img} source={require('../../assets/water.png')} />
  );
  const WeigthScaleImage = () => (
    <Image style={styles.img} source={require('../../assets/weigth.png')} />
  );
  const BreakfastImage = () => (
    <Image style={styles.img} source={require('../../assets/breakfast.png')} />
  );
  const EnCas1Image = (props) => (
    <Image style={styles.img} source={require('../../assets/encas.png')} />
  );
  const LunchImage = (props) => (
    <Image style={styles.img} source={require('../../assets/lunch.png')} />
  );
  const DinnerImage = (props) => (
    <Image style={styles.img} source={require('../../assets/dinner.png')} />
  );


const Plus = ({ navigation }) => {
  const {Repas1, Repas2, Repas3, Repas4, Repas5} = useContext(RepasContext)
  const [Eauvisible, setEauVisible] = useState(false)
  const [BreakFastvisible, setBreakFastVisible] = useState(false)
  const [EnCas1visible, setEnCas1Visible] = useState(false)
  const [Lunchvisible, setLunchVisible] = useState(false)
  const [EnCas2visible, setEnCas2Visible] = useState(false)
  const [Dinnervisible, setDinnerVisible] = useState(false)
  let date = new Date()
  let ftodayDate = date.toLocaleDateString('en-CA')

  return (
    <NativeViewGestureHandler disallowInterruption={true}>
    <Layout style={styles.container} level='1'>
      <View style={styles.view}>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={WaterImage} onPress={() => setEauVisible(true)}/>
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
        <View style={styles.layout} >
          <Button style={styles.food} accessoryLeft={LunchImage} onPress={() => setLunchVisible(true)}/>
          <Text>Déjeuner</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={DinnerImage} onPress={() => setDinnerVisible(true)}/>
          <Text>Dîner</Text>
        </View>
        <View style={styles.layout}>
          <Button style={styles.food} accessoryLeft={EnCas1Image} onPress={() => setEnCas1Visible(true)}/>
          <Text>En-Cas</Text>
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
          <ModalBreakfast toModalBreakfast={{setBreakFastVisible, Repas1, date}}/>
        </Modal>
        <Modal visible={Lunchvisible}>
          <ModalLunch toModalLunch={{setLunchVisible, Repas2, date}}/>
        </Modal>
        <Modal visible={Dinnervisible}>
          <ModalDinner toModalDinner={{setDinnerVisible, Repas3, date}}/>
        </Modal>
        <Modal visible={EnCas1visible}>
          <ModalEnCas1 toModalEnCas1={{setEnCas1Visible, Repas4, date}}/>
        </Modal>
        <Modal visible={EnCas2visible}>
          <ModalEnCas2 toModalEnCas2={{setEnCas2Visible, Repas5, date}}/>
        </Modal>
    </Layout>
    </NativeViewGestureHandler>
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