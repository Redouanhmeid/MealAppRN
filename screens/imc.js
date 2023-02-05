import { StyleSheet, View, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Card, Text, Layout, Button, ListItem } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPerson, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import * as Progress from 'react-native-progress'

const FireIcon = () => (
  <FontAwesomeIcon icon={ faPerson } style={styles.icon} size={ 24 }/>
);
const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faAngleRight } style={styles.icon} size={ 16 }/>
);
const Title = (props) => (
  <Text category='h5'> IMC actuel</Text>
);
const Header = (props) => (
  <ListItem
    title={Title}
    accessoryLeft={FireIcon}
  />
);

const IMC = () => {
  const {userInfo, leadId} = useContext(AuthContext)
  const values = { "taille": leadId.taille, "poidsactuel": leadId.poidsactuel}
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const { taille, poidsactuel } = values;
  var weight = parseInt(poidsactuel)
  var height = parseInt(taille)
  const [Status, setStatus] = useState("")
  const [Message, setMessage] = useState("")
  const [Effects, setEffects] = useState("")
  const [imcMessage, setImcMessage] = useState("")

  const [views, setViews] = useState(0)
  const [isInitialRender, setIsInitialRender] = useState(true)

  function calcularIMC (){
    const alt = height / 100;
    const imc = weight / (alt * alt);

    if (imc < 16.9){
        setStatus(<Progress.Bar progress={0.36} color="#DB9620" unfilledColor="#FFDD81" height={16} borderRadius={16} width={330} />)
        setMessage(`Vous êtes bien en dessous du poids !`);
        setEffects(`Effets secondaires : Perte de cheveux, infertilité, absence menstruelle.`);
        setImcMessage(`${imc.toFixed(2)}`);
     
    }else if(imc >= 17 && imc < 18.4){
        setStatus(<Progress.Bar progress={0.46} color="#B77616" unfilledColor="#FFCF61" height={16} borderRadius={16} width={330} />)
        setMessage(`Vous êtes en sous-poids !`);
        setEffects(`Effets secondaires : Fatigue, stress, anxiété.`);
        setImcMessage(`${imc.toFixed(2)}`);
     
    }else if (imc >= 18.5 && imc < 24.9){
        setStatus(<Progress.Bar progress={0.60} color="#6CB918" unfilledColor="#AEE755" height={16} borderRadius={16} width={330} />)
        setMessage(`Vous êtes à un poids normal !`);
        setEffects(`Effets secondaires : Diminution du risque de maladies cardiaques et vasculaires.`);
        setImcMessage(`${imc.toFixed(2)}`);
    
    }else if(imc >= 25 && imc < 29.9){
        setStatus(<Progress.Bar progress={0.70} color="#FF5230" unfilledColor="#FFAA82" height={16} borderRadius={16} width={330} />)
        setMessage(`Vous êtes en surpoids!`);
        setEffects(`Effets secondaires : Diminution du risque de maladies cardiaques et vasculaires.`);
        setImcMessage(`${imc.toFixed(2)}`);
     
    }else if(imc >= 30 && imc < 34.9){
        setStatus(<Progress.Bar progress={0.78} color="#DB3323" unfilledColor="#FF8963" height={16} borderRadius={16} width={330} />)
        setMessage(`Vous êtes en obésité de grade II ! `);
        setEffects(`Effets secondaires : Apnée du sommeil, essoufflement.`);
        setImcMessage(`${imc.toFixed(2)}`);

    }else if(imc >= 35 && imc < 40){
        setStatus(<Progress.Bar progress={0.95} color="#930F18" unfilledColor="#FF8963" height={16} borderRadius={16} width={330} />)
        setMessage(`Vous êtes en obésité de grade II ! `);
        setEffects(`Effets secondaires : Diabète, angine de poitrine, crise cardiaque, athérosclérose`);
        setImcMessage(`${imc.toFixed(2)}`);
    }else if(imc >= 40){
        setStatus(<Progress.Bar progress={1} color="#930F18" height={16} borderRadius={16} width={320} />)
        setMessage(`Vous êtes en obésité de grade III ! `);
        setEffects(`Effets secondaires : Reflux, difficulté à bouger, escarres, diabète, crise cardiaque, accident vasculaire cérébral.`);
        setImcMessage(`${imc.toFixed(2)}`);
    }
  }

  useEffect(() => {
    calcularIMC ();
    if (isInitialRender) {
      setIsInitialRender(false);
      setViews(views + 1);
    }
  }, [views, isInitialRender]);

  return (
    <Card style={styles.card} header={Header}>
      <View style={styles.viewclass}>
        <Text category='h2' style={styles.titleh2}>{imcMessage}</Text>
        <Text category='h6' style={styles.titleh5}>{Message}</Text>
        {Status}
        <Text style={styles.titleh0}>{Effects}</Text>
      </View>
    </Card>
  )
}

export default IMC

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
      paddingTop: 18,
      paddingBottom: 18,
    },
    img: {
      width: 100,
      height: 100,
      marginBottom: 12,
    },
    titleh0: {
      paddingTop: 14,
    },
    titleh2: {
      paddingBottom: 2,
    },
    titleh5: {
      paddingBottom: 12,
    },
  });