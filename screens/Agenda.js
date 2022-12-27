import { StyleSheet, View, ScrollView, ImageBackground, Image, Dimensions, Avatar } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Layout, Modal, List, ListItem, Button, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faClose } from '@fortawesome/free-solid-svg-icons'
import ModalBreakfast from '../screens/ModalBreakfast'
import Foods from '../assets/food2.json'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

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
const CloseIcon = () => (
  <FontAwesomeIcon icon={ faClose } style={styles.closeicon} size={ 32 }/>
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
  const [visible, setVisible] = useState(false);
  return (
    <ScrollView>
      <Layout style={styles.container} level='2'>
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
          <ModalBreakfast FromAgenda={{setVisible}}/>
        </Modal>
      </Layout>
    </ScrollView>
  )
}

export default Nutrution

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
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