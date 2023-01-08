import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { Text, Layout, Modal, ListItem, Button, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import ModalBreakfast from '../screens/ModalBreakfast'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { BASE_URL } from '../client-config'

const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faPlusCircle } style={styles.icon} size={ 28 }/>
);
const BreakfastImage = (props) => (
  <Image
    style={styles.img}
    source={require('../assets/breakfast.png')}
  />
);
const EnCasImage = (props) => (
  <Image
    style={styles.img}
    source={require('../assets/encas.png')}
  />
);
const LunchImage = (props) => (
  <Image
    style={styles.img}
    source={require('../assets/lunch.png')}
  />
);
const DinnerImage = (props) => (
  <Image
    style={styles.img}
    source={require('../assets/dinner.png')}
  />
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

const Nutrution = () => {
  const {userInfo, leadId, programId} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas
  const [visible, setVisible] = useState(false)
  const [Repas1, setRepas1] = useState()
  const [Repas2, setRepas2] = useState()
  const [Repas3, setRepas3] = useState()
  const [Repas4, setRepas4] = useState()
  const [Repas5, setRepas5] = useState()
  let tempDate = new Date()
  let ftodayDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

  useEffect(() => {
    requestRepas(programId, ftodayDate)
  }, [programId])

  const requestRepas = async (Item, day) => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/idrepas/idprog=${Item}/repasday=${day}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      setRepas1(res.data[0].Repas[1])
      setRepas2(res.data[0].Repas[3])
      setRepas3(res.data[0].Repas[5])
      if(res.data[0].Repas[7] !== undefined || null){
        setRepas4(res.data[0].Repas[7])
      }
      if(res.data[0].Repas[9] !== undefined || null){
        setRepas5(res.data[0].Repas[9])
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
      <Layout style={styles.container} level='2'>
        <Text category='h1'>Agenda</Text>
        <ScrollView>
        <Text category='h4'>Nutrution</Text>
          <ListItem style={styles.listcontainer}
            title={BreakfastTitle}
            accessoryLeft={BreakfastImage}
            accessoryRight={RightIcon}
            onPress={() => setVisible(true)}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            title={EnCasTitle}
            accessoryLeft={EnCasImage}
            accessoryRight={RightIcon}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            title={LunchTitle}
            accessoryLeft={LunchImage}
            accessoryRight={RightIcon}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            accessoryLeft={DinnerImage}
            title={DinnerTitle}
            accessoryRight={RightIcon}
          />

        <Modal visible={visible}>
          <ModalBreakfast toModalBreakfast={{setVisible, Repas1}}/>
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