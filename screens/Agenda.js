import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Text, Layout, Modal, ListItem, Button, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import ModalBreakfast from '../screens/ModalBreakfast'
import axios from 'axios'
import { BASE_URL } from '../client-config'
import ModalEnCas from './ModalEnCas'
import ModalLunch from './ModalLunch'
import ModalDinner from './ModalDinner'


const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faPlusCircle } style={styles.icon} size={ 28 }/>
);
const BreakfastImage = (props) => (
  <Image style={styles.img} source={require('../assets/breakfast.png')} />
);
const EnCasImage = (props) => (
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
const EnCasTitle = () => (
  <Text category='h6'>En-Cas</Text>
);
const EnCasTitleModal = () => (
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

const Nutrution = ({navigation, route}) => {

  const [visible, setVisible] = useState(false)
  const [Repas1, setRepas1] = useState()
  const [Repas2, setRepas2] = useState()
  const [Repas3, setRepas3] = useState()
  const [Repas4, setRepas4] = useState()
  const [Repas5, setRepas5] = useState()
  const [BreakFastvisible, setBreakFastVisible] = useState(false)
  const [EnCasvisible, setEnCasVisible] = useState(false)
  const [LunchVisible, setLunchVisible] = useState(false)
  const [DinnerVisible, setDinnerVisible] = useState(false)

  useEffect(() => {
    setRepas1(route.params.R1)
    setRepas2(route.params.R2)
    setRepas3(route.params.R3)
    setRepas4(route.params.R4)
    setRepas5(route.params.R5)
  }, [route.params.R1])

  return (
      <Layout style={styles.container} level='2'>
        <Text category='h1'>Agenda</Text>
        <ScrollView>
        <Text category='h4'>Nutrution</Text>
          <ListItem style={styles.listcontainer}
            title={BreakfastTitle}
            accessoryLeft={BreakfastImage}
            accessoryRight={RightIcon}
            onPress={() => setBreakFastVisible(true)}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            title={EnCasTitle}
            accessoryLeft={EnCasImage}
            accessoryRight={RightIcon}
            onPress={() => setEnCasVisible(true)}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            title={LunchTitle}
            accessoryLeft={LunchImage}
            accessoryRight={RightIcon}
            onPress={() => setLunchVisible(true)}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            accessoryLeft={DinnerImage}
            title={DinnerTitle}
            accessoryRight={RightIcon}
            onPress={() => setDinnerVisible(true)}
          />

        <Modal visible={BreakFastvisible}>
          <ModalBreakfast toModalBreakfast={{setBreakFastVisible, Repas1}}/>
        </Modal>
        <Modal visible={LunchVisible}>
          <ModalLunch toModalLunch={{setLunchVisible, Repas2}}/>
        </Modal>
        <Modal visible={DinnerVisible}>
          <ModalDinner toModalDinner={{setDinnerVisible, Repas3}}/>
        </Modal>
        <Modal visible={EnCasvisible}>
          <ModalEnCas toModalEnCas={{setEnCasVisible, Repas2}}/>
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
  listcontainer: {
    minHeight: 80,
  },
  icon: {
    marginRight: 10,
    color: '#C628A4',
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