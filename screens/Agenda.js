import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { Text, Layout, Modal, ListItem, Button } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ModalBreakfast from '../screens/ModalBreakfast'
import axios from 'axios'
import { BASE_URL } from '../client-config'
import ModalEnCas1 from './ModalEnCas1'
import ModalLunch from './ModalLunch'
import ModalDinner from './ModalDinner'
import { RepasContext } from './AppStack'
import CircularBar from './CircularBar'
import { AuthContext } from '../context/AuthContext'


const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faPlusCircle } style={styles.icon} size={ 28 }/>
);
const CheckIcon = (props) => (
  <FontAwesomeIcon icon={ faCheckCircle } style={styles.checkicon} size={ 28 }/>
);
const BreakfastImage = (props) => (
  <Image style={styles.img} source={require('../assets/breakfast.png')} />
);
const EnCas1Image = (props) => (
  <Image style={styles.img} source={require('../assets/encas.png')} />
);
const LunchImage = (props) => (
  <Image style={styles.img} source={require('../assets/lunch.png')} />
);
const DinnerImage = (props) => (
  <Image style={styles.img} source={require('../assets/dinner.png')} />
);
const BreakfastTitle = () => (
  <Text category='h6'>Petit-déjeuner</Text>
);
const BreakfastTitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>Petit-déjeuner</Text>
);
const EnCas1Title = () => (
  <Text category='h6'>En-Cas</Text>
);
const EnCas1TitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>En-Cas</Text>
);
const LunchTitle = () => (
  <Text category='h6'>Déjeuner</Text>
);
const LunchTitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>Déjeuner</Text>
);
const DinnerTitle = () => (
  <Text category='h6'>Dîner</Text>
);
const DinnerTitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>Dîner</Text>
);

const Nutrution = () => {
  const {Repas1, Repas2, Repas3, Repas4, Repas5} = useContext(RepasContext)
  const {programId} = useContext(AuthContext)
  const [visible, setVisible] = useState(false)
  const [BreakFastvisible, setBreakFastVisible] = useState(false)
  const [EnCas1visible, setEnCas1Visible] = useState(false)
  const [LunchVisible, setLunchVisible] = useState(false)
  const [DinnerVisible, setDinnerVisible] = useState(false)
  const [BrFait, setBrFait] = useState(false)
  const [LnFait, setLnFait] = useState(false)
  const [DnFait, setDnFait] = useState(false)
  const [E1Fait, setE1Fait] = useState(false)
  const [E2Fait, setE2Fait] = useState(false)
  let tempDate = new Date()
  let ftodayDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate()
 
  const getRepasFait = async (Item, day) => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/fait/idprog=${Item}/repasday=${day}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      console.log(res.data[0])
      if(res.data[0].breakfastfait !== '0'){setBrFait(true)}
      else{setBrFait(false)}
      if(res.data[0].dinnerfait !== '0'){setLnFait(true)}
      else{setLnFait(false)}
      if(res.data[0].encas1fait !== '0'){setE1Fait(true)}
      else{setE1Fait(false)}
      if(res.data[0].encas2fait !== '0'){setE2Fait(true)}
      else{setE2Fait(false)}
      if(res.data[0].lunchfait !== '0'){setDnFait(true)}
      else{setDnFait(false)}
    } catch (error) {
    console.error(error);
    }
  }
  useEffect(()=>{
    getRepasFait(programId, ftodayDate)
  }, [BrFait, LnFait, DnFait, E1Fait, E2Fait])

  return (
      <Layout style={styles.container} level='2'>
        <ScrollView>
        <Text category='h1'>Agenda</Text>
        <View style={styles.card}>
          <CircularBar />
        </View>
        <Text category='h4'>Nutrution</Text>
        <View style={styles.nutrution}>
          <ListItem style={styles.listcontainer}
            title={BreakfastTitle}
            accessoryLeft={BreakfastImage}
            accessoryRight={BrFait ? CheckIcon : RightIcon}
            onPress={() => setBreakFastVisible(true)}
          />
          <ListItem style={styles.listcontainer}
            title={EnCas1Title}
            accessoryLeft={EnCas1Image}
            accessoryRight={E1Fait ? CheckIcon : RightIcon}
            onPress={() => setEnCas1Visible(true)}
          />
          <ListItem style={styles.listcontainer}
            title={LunchTitle}
            accessoryLeft={LunchImage}
            accessoryRight={LnFait ? CheckIcon : RightIcon}
            onPress={() => setLunchVisible(true)}
          />
          <ListItem style={styles.listcontainer}
            accessoryLeft={DinnerImage}
            title={DinnerTitle}
            accessoryRight={DnFait ? CheckIcon : RightIcon}
            onPress={() => setDinnerVisible(true)}
          />
        </View>

        <Modal visible={BreakFastvisible}>
          <ModalBreakfast toModalBreakfast={{setBreakFastVisible, Repas1, ftodayDate, programId, setBrFait, BrFait}}/>
        </Modal>
        <Modal visible={LunchVisible}>
          <ModalLunch toModalLunch={{setLunchVisible, Repas2, ftodayDate, programId, LnFait}}/>
        </Modal>
        <Modal visible={DinnerVisible}>
          <ModalDinner toModalDinner={{setDinnerVisible, Repas3, ftodayDate, programId}}/>
        </Modal>
        <Modal visible={EnCas1visible}>
          <ModalEnCas1 toModalEnCas1={{setEnCas1Visible, Repas2, ftodayDate, programId}}/>
        </Modal>
        </ScrollView>
      </Layout>
  )
}

export default Nutrution

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  card: {
    backgroundColor: '#C628A4',
    borderRadius: 15,
    marginVertical: 20,
  },
  nutrution: {
    marginVertical: 20,
  },
  listcontainer: {
    minHeight: 80,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f7f9fc',
  },
  icon: {
    marginRight: 10,
    color: '#C628A4',
  },
  checkicon: {
    marginRight: 10,
    color: '#126D11'
  },
  closeicon: {
    color: '#fff',
  },
  img: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  titlemodal: {
    marginRight: 15,
    fontWeight: "900",
    color: '#fff',
  },
});