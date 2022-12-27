import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Layout, List, ListItem, Button, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Foods from '../assets/food2.json'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const CloseIcon = () => (
    <FontAwesomeIcon icon={ faClose } style={styles.closeicon} size={ 32 }/>
);
const RightIcon = (props) => (
    <FontAwesomeIcon icon={ faPlusCircle } style={styles.icon} size={ 28 }/>
  );
const BreakfastTitleModal = () => (
    <Text category='h5' style={styles.titlemodal}>Petit-déjeuner</Text>
);
const BreakfastModalDescription = () => (
    <Text category='p1'>1 portion</Text>
);
const BreakfastModalTitle = () => (
    <Text category='h5'>Sandwich aux oeufs au plat et au guacamole</Text>
);

const ModalBreakfastTest = ({FromAgenda}) => {
  
  const renderBackAction = () => (
    <TopNavigationAction
      icon={CloseIcon}
      onPress={() => FromAgenda.setVisible(false)}
    />
  );

  return (
    <SafeAreaView style={styles.ModalContainer}>
        <TopNavigation style={styles.ModalTopContainer} title={BreakfastTitleModal} accessoryLeft={renderBackAction}/>
        <Layout style={styles.ModalContainer} level='3'>
            <ImageBackground
                  style={styles.headerContainer}
                  source={{
                    uri: Foods[1].img,
                  }}
                  resizeMode="cover"
            />
            <Divider />
            <ListItem
                style={styles.ModalListContainer}
                title={BreakfastModalTitle}
                description={BreakfastModalDescription}
                accessoryRight={RightIcon}
            />
            <Layout style={styles.bottom} level='1'>
               <Button style={{width: windowWidth-50}} size={'giant'}>Fait</Button>
            </Layout>
        </Layout>
    </SafeAreaView>
  )
}

export default ModalBreakfastTest

const styles = StyleSheet.create({
  ModalContainer: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ModalTopContainer: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#C628A4',
    paddingTop: 50,
    paddingBottom: 15,
  },
  headerContainer: {
    width: windowWidth,
    height: 270,
    zIndex: 1,
  },
  ModalListContainer: {
    width: windowWidth,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 20,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 120,
    bottom: 0,
    width: windowWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    elevation: 15,
  },
  titlemodal: {
    marginRight: 15,
    fontWeight: "900",
    color: '#fff',
  },
  icon: {
    marginRight: 10,
    color: '#C628A4',
  },
  closeicon: {
    color: '#fff',
  },
});