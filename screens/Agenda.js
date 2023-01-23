import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React, {useState, useEffect, useContext, useLayoutEffect} from 'react'
import { Text, Layout, Modal, ListItem, Button } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ModalBreakfast from '../screens/ModalBreakfast'
import axios from 'axios'
import { BASE_URL } from '../client-config'
import { getRepasFait2, RepasContext } from './AppStack'
import { AuthContext } from '../context/AuthContext'
import ModalEnCas1 from './ModalEnCas1'
import ModalLunch from './ModalLunch'
import ModalDinner from './ModalDinner'
import CircularBar from './CircularBar'
import ModalEnCas2 from './ModalEnCas2'


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
const EnCas2Image = (props) => (
  <Image style={styles.img} source={require('../assets/encas2.png')} />
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
  <Text category='h6'>En-Cas 1</Text>
);
const EnCas1TitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>En-Cas 1</Text>
);
const EnCas2Title = () => (
  <Text category='h6'>En-Cas 2</Text>
);
const EnCas2TitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>En-Cas 2</Text>
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
  const {getRepasFait, BrFait, LnFait, DnFait, E1Fait, E2Fait} = useContext(RepasContext)
  const {leadId} = useContext(AuthContext)
  const NRepas = leadId.nrepas
  let tempDate = new Date()
  let ftodayDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate()
  
  const [visible, setVisible] = useState(false)
  const [BreakFastvisible, setBreakFastVisible] = useState(false)
  const [EnCas1visible, setEnCas1Visible] = useState(false)
  const [Lunchvisible, setLunchVisible] = useState(false)
  const [EnCas2visible, setEnCas2Visible] = useState(false)
  const [Dinnervisible, setDinnerVisible] = useState(false)
  
  useEffect(() => {
    getRepasFait(ftodayDate)
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
          {NRepas[0] > 3 &&
          <ListItem style={styles.listcontainer}
            title={EnCas1Title}
            accessoryLeft={EnCas1Image}
            accessoryRight={E1Fait ? CheckIcon : RightIcon}
            onPress={() => setEnCas1Visible(true)}
          />}
          <ListItem style={styles.listcontainer}
            title={LunchTitle}
            accessoryLeft={LunchImage}
            accessoryRight={LnFait ? CheckIcon : RightIcon}
            onPress={() => setLunchVisible(true)}
          />
          {NRepas[0] > 4 &&
          <ListItem style={styles.listcontainer}
            title={EnCas2Title}
            accessoryLeft={EnCas2Image}
            accessoryRight={E2Fait ? CheckIcon : RightIcon}
            onPress={() => setEnCas2Visible(true)}
          />}
          {NRepas[0] > 2 &&
          <ListItem style={styles.listcontainer}
            accessoryLeft={DinnerImage}
            title={DinnerTitle}
            accessoryRight={DnFait ? CheckIcon : RightIcon}
            onPress={() => setDinnerVisible(true)}
          />}
        </View>

        <Modal visible={BreakFastvisible}>
          <ModalBreakfast toModalBreakfast={{setBreakFastVisible}}/>
        </Modal>
        <Modal visible={Lunchvisible}>
          <ModalLunch toModalLunch={{setLunchVisible}}/>
        </Modal>
        <Modal visible={Dinnervisible}>
          <ModalDinner toModalDinner={{setDinnerVisible}}/>
        </Modal>
        <Modal visible={EnCas1visible}>
          <ModalEnCas1 toModalEnCas1={{setEnCas1Visible}}/>
        </Modal>
        <Modal visible={EnCas2visible}>
          <ModalEnCas2 toModalEnCas2={{setEnCas2Visible}}/>
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