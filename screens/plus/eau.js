import { View, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { Layout, Text, Card, TopNavigationAction, TopNavigation, CheckBox, Divider, Image } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const CloseIcon = () => (
  <FontAwesomeIcon icon={ faClose } size={ 28 }/>
);
const TitleModal = () => (
  <Text category='h5' style={styles.titlemodal}>Eau</Text>
);
const Glass = () => (
    <Image
      style={styles.img}
      source={require('../../assets/emptyglass.png')}
    />
)

const Eau = ({toEau}) => {
  const renderBackAction = () => (
    <TopNavigationAction
      icon={CloseIcon}
      onPress={() => toEau.setEauVisible(false)}
    />
  );
  const [checked250, setChecked250] = useState(false)
  const [checked500, setChecked500] = useState(false)
  

  return (
    <Layout style={styles.container} level='2'>
      <TopNavigation style={styles.ModalTopContainer} title={TitleModal} accessoryRight={renderBackAction}/>
      <Text category='h4'>Apport en eau :  ml</Text>
      <Divider style={styles.divider} />
      <View style={styles.checkboxes}>
        <CheckBox
          style={styles.checkbox}
          checked={checked250}
          onChange={nextChecked => setChecked250(nextChecked)}
        >
          {/* {Glass} */}
        </CheckBox>
        <CheckBox
          checked={checked500}
          onChange={nextChecked => setChecked500(nextChecked)}>
        </CheckBox>
      </View>
    </Layout>
  )
}

export default Eau

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 20,
    minHeight: 300,
    width: windowWidth*90/100,
    top: windowHeight*30/100,
  },
  ModalTopContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#00000000',
    marginBottom: 10,
  },
  divider: {
    marginVertical: 20,
  },
  checkboxes: {
    flexDirection: 'row',
  },
  checkbox: {
    borderLeftWidth: 1,
  },
  img: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
});