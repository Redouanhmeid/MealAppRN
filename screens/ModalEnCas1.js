import { View, StyleSheet, ScrollView, ImageBackground, Dimensions, StatusBar } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { Card, Text, Button, TopNavigation, TopNavigationAction, Divider, Layout } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Foods from '../assets/food2.json'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { BASE_URL } from '../client-config'
import { RepasContext } from '../context/RepasContext'
import { AuthContext } from '../context/AuthContext'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const CloseIcon = () => (
  <FontAwesomeIcon icon={ faClose } style={styles.closeicon} size={ 32 }/>
);
const EnCas1TitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>Premier En-Cas</Text>
);
const DeleteIcon = () => (
  <FontAwesomeIcon icon={ faTrashAlt } style={styles.closeicon} size={ 18 }/>
);

const ModalEnCas1 = ({toModalEnCas1}) => {
  let tempDate = new Date()
  let ftodayDate = tempDate.toLocaleDateString('en-CA')
  const {programId} = useContext(AuthContext)
  const {getRepasFait, E1Fait} = useContext(RepasContext)
  const Repas = toModalEnCas1.Repas4
  const day = toModalEnCas1.date
  const [isLoaded, setIsLoaded] = useState(true)
  let daytocompare = tempDate.toLocaleDateString('fr')
  const [NotToday, setNotToday] = useState(false)

  useEffect(()=>{
    if(Repas !== undefined || null){setIsLoaded(false)}
    if(day.toLocaleDateString('fr') !== daytocompare){setNotToday(true)}
  })

  const renderBackAction = () => (
    <TopNavigationAction
      icon={CloseIcon}
      onPress={() => toModalEnCas1.setEnCas1Visible(false)}
    />
  );

  const renderCardHeader = () => (
    <View style={styles.CardHeader}>
      <Text style={styles.time}>&#128337; 10:00</Text>
      <Text>&#127859; 10 min</Text>
      <Text>&#x1F525; {Foods.find(food => food.id == Repas).calories}</Text>
    </View>
  );
  const renderCardFooter = () => (
    <View style={styles.CardFooter}>
      <Layout style={styles.macroleft}  ><Text category='h4'>{Foods.find(food => food.id == Repas).protein} g</Text><Text category='c1'>Protéines</Text></Layout>
      <Layout style={styles.macrocenter}><Text category='h4'>{Foods.find(food => food.id == Repas).glucide} g</Text><Text category='c1'>Glucides</Text></Layout>
      <Layout style={styles.macrocright}><Text category='h4'>{Foods.find(food => food.id == Repas).lipide} g</Text><Text category='c1'>Graisses</Text></Layout>
    </View>
  );

  const Fait = async () => {
    const uencas1fait ={
      encas1fait: 1,
      Id_Program: programId,
      Repas_Day: ftodayDate
    };
    axios.post(`${BASE_URL}/wp-json/repas/uencas1fait`, uencas1fait)
      .then(getRepasFait(ftodayDate))
      .catch(err => {console.log(err.response.data.message)})
      .finally(() => toModalEnCas1.setEnCas1Visible(false))
  }
  const Delete = async () => {
    const uencas1fait ={
      encas1fait: 0,
      Id_Program: programId,
      Repas_Day: ftodayDate
    };
    axios.post(`${BASE_URL}/wp-json/repas/uencas1fait`, uencas1fait)
      .then(getRepasFait(ftodayDate))
      .catch(err => {console.log(err.response.data.message)})
      .finally(() => toModalEnCas1.setEnCas1Visible(false))
  }
  if(isLoaded) {
    return (
      <SafeAreaView style={styles.ModalContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#C628A4"/>
        <TopNavigation style={styles.ModalTopContainer} title={EnCas1TitleModal} accessoryLeft={renderBackAction}/>
        <Layout style={styles.nofoodcontainer} level='2'>
          <Text category='h3' style={styles.nofoodtexttitle}>Votre plan de repas personnel apparaîtra ici</Text>
          <Text style={styles.nofoodtexttitle}>Pendant ce temps, remplissez votre réfrigérateur d'aliments sains</Text>
        </Layout>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.ModalContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#C628A4"/>
      <TopNavigation style={styles.ModalTopContainer} title={EnCas1TitleModal} accessoryLeft={renderBackAction}/>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: Foods.find(food => food.id == Repas).img,
          }}
        />
        <Card
          style={styles.bookingCard}
          appearance='filled'
          disabled={true}
          header={renderCardHeader}
          footer={renderCardFooter}>
            <Text category='h3'>{Foods.find(food => food.id == Repas).foodName}</Text>
        </Card>
        <Text category='h4' style={{marginHorizontal: 20}}>Description</Text>
        <Divider />
        <Text style={styles.desc}>{Foods.find(food => food.id == Repas).description}</Text>
      </ScrollView>
      <Layout style={styles.bottom} level='1'>
        <Button style={{width: windowWidth-50}} disabled={NotToday} size={'large'} onPress={E1Fait ? Delete : Fait} accessoryRight={E1Fait && DeleteIcon}>Fait</Button>
      </Layout>
    </SafeAreaView>
  )
}

export default ModalEnCas1

const styles = StyleSheet.create({
  nofoodcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  nofoodtexttitle: {
    textAlign: 'center',
    marginVertical: 8,
  },
  ModalContainer: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fcfcfc',
  },
  ModalTopContainer: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#C628A4',
    paddingTop: 50,
    paddingBottom: 15,
  },
  CardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
  },
  desc: {
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 130,
    textAlign: 'justify',
  },
  time: {
    backgroundColor: '#FED5DC', 
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 12,
  },
  CardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  macroleft: {
    backgroundColor: '#FFEED0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  macrocenter: {
    backgroundColor: '#FFEED0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: '#FFBE72',
    borderLeftColor: '#FFBE72',
  },
  macrocright: {
    backgroundColor: '#FFEED0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    height: 240,
  },
  bookingCard: {
    backgroundColor: '#f8f8f8',
    marginTop: -47,
    margin: 20,
    borderRadius: 10,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    bottom: 40,
    width: windowWidth,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    elevation: 15,
  },
  titlemodal: {
    marginRight: 15,
    fontWeight: "900",
    color: '#fff',
  },
  closeicon: {
    color: '#fff',
  },
});