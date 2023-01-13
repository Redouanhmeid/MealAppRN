import React, {useState} from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Button, Popover, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDroplet, faWeightScale, faClose } from '@fortawesome/free-solid-svg-icons'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const CloseIcon = () => (
  <FontAwesomeIcon icon={ faClose } style={styles.closeicon} size={ 32 }/>
);
const WaterIcon = () => (
  <FontAwesomeIcon icon={ faDroplet } size={ 36 } color='#fff'  />
);
const WeightScaleIcon = () => (
  <FontAwesomeIcon icon={ faWeightScale } size={ 36 } color='#fff'  />
);
const BreakfastImage = () => (
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

const Plus = ({toPlus}) => {
  const renderBackAction = () => (
    <TopNavigationAction
      icon={CloseIcon}
      onPress={() => toPlus.setVisible(false)}
    />
  );
  return (
    <Layout style={styles.container} level='1'>
      <TopNavigation style={styles.ModalTopContainer} title='dd' accessoryLeft={renderBackAction}/>
    <View style={styles.view}>
      <Layout style={styles.layout} level='1'>
        <Button style={styles.water} accessoryLeft={WaterIcon}/>
        <Text>Eau</Text>
      </Layout>
      <Layout style={styles.layout} level='1'>
        <Button style={styles.weight} accessoryLeft={WeightScaleIcon}/>
        <Text>Poids</Text>
      </Layout>
      <Layout style={styles.layout} level='1'>
        <Button style={styles.food} accessoryLeft={BreakfastImage}/>
        <Text>Petit-déjeuner</Text>
      </Layout>
    </View>
    <View style={styles.view}>
      <Layout style={styles.layout} level='1'>
        <Button style={styles.food} accessoryLeft={EnCasImage}/>
        <Text>En-Cas</Text>
      </Layout>
      <Layout style={styles.layout} level='1'>
        <Button style={styles.food} accessoryLeft={LunchImage}/>
        <Text>Déjeuner</Text>
      </Layout>
      <Layout style={styles.layout} level='1'>
        <Button style={styles.food} accessoryLeft={DinnerImage}/>
        <Text>Dîner</Text>
      </Layout>
    </View>
    </Layout>
  )
}

export default Plus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  view: {
    flex: 3,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  water: {
    margin: 2,
    backgroundColor: '#3169F7',
    borderColor: '#3169F7',
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  weight: {
    margin: 2,
    backgroundColor: '#5ED836',
    borderColor: '#5ED836',
    paddingVertical: 18,
    paddingHorizontal: 18,
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
});
