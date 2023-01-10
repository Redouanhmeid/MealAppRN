import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Layout, Toggle, Button, Modal, Card, TopNavigation, TopNavigationAction, Text, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { faArrowLeft, faCircleInfo, faAngleRight } from '@fortawesome/free-solid-svg-icons'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const InfoIcon = () => (
  <FontAwesomeIcon icon={ faCircleInfo } size={ 28 } color={'#fff'} />
);
const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
 
const Repas = ({navigation}) => {
  const [modalvisible, setModalVisible] = useState(false)
  const [bchecked, setBChecked] = useState(false)
  const [lchecked, setLChecked] = useState(false)
  const [dchecked, setDChecked] = useState(false)
  const [wchecked, setWChecked] = useState(false)

  const onBCheckedChange = (isChecked) => {setBChecked(isChecked)}
  const onLCheckedChange = (isChecked) => {setLChecked(isChecked)}
  const onDCheckedChange = (isChecked) => {setDChecked(isChecked)}
  const onWCheckedChange = (isChecked) => {setWChecked(isChecked)}

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, date) => {
    const currentDate = date;
    setShow(Platform.OS === 'ios')
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };
  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='Nutrution' accessoryLeft={renderBackAction} />
      <Layout style={styles.container} level='2'>
        <Button onPress={() => setModalVisible(true)} accessoryLeft={InfoIcon} >
            <Text>Temps consacré au repas recommandé basé sur le schéma de jeûne intermittent 16/8</Text>
        </Button>

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Petit-déjeuner</Text>
            <Toggle checked={bchecked} onChange={onBCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>10:00 </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Déjeuner</Text>
            <Toggle checked={lchecked} onChange={onLCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker}>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>14:30 </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Déjeuner</Text>
            <Toggle checked={dchecked} onChange={onDCheckedChange} style={styles.toggleicon}/>
          </View>
          <TouchableOpacity style={styles.toggles} onPress={showTimepicker} appearance='ghost'>
            <Text style={styles.togglelabel}>Heure</Text>
            <Text style={styles.hourelabel}>18:00 </Text><FontAwesomeIcon icon={faAngleRight} color='#C628A4'/>
          </TouchableOpacity>
        </Layout>

        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Eau</Text>
            <Toggle checked={wchecked} onChange={onWCheckedChange} style={styles.toggleicon}/>
          </View>
        </Layout>

        <Modal visible={modalvisible} style={styles.modal}>
            <Divider />
          <Card disabled={true}>
            <Text category='h3'>Jeûne intermittent environ 16/8*</Text>
            <Text style={styles.text}><Text style={styles.strong}>Le jeûne intermittent 16/8</Text> implique une consommation limitée d’aliments et de boissons caloriques à une fenêtre de huit heures par jour et une abstention d’aliments pour les 16 heures restantes.</Text>
            <Text style={styles.text}><Text style={styles.strong}>Le jeûne intermittent 16/8</Text> est facile à suivre, flexible et pratique. Des études menées sur des animaux et sur des humains suggèrent qu’il peut augmenter la perte de poids, améliorer les taux de sucre dans le sang, le fonctionnement du cerveau et la longévité.</Text>
            <Button onPress={() => setModalVisible(false)}>
              Fermer
            </Button>
          </Card>
        </Modal>
      </Layout>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='time'
            onChange={onChange}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Repas

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    menu: {
      flex: 1,
      marginTop: 10,
    },
    menuitem: {
      paddingHorizontal: 12,
      height: 65,
    },
    modal: {
        flex:1,
        justifyContent: 'flex-end',
        height: windowHeight,
    },
    text: {
        marginVertical: 16,
        fontSize: 18,
    },
    strong:{
        fontSize: 18,
        fontWeight: '700'
    },
    toggles: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: windowWidth,
        fontSize: 18,
        borderTopWidth: 1,
        borderColor: '#cecece',
    },
    togglelabel: {
      flexGrow: 3,
      paddingLeft: 10,
      fontSize: 16,
    },
    toggleicon: {
      right: 0,
      paddingRight: 10,
    },
    hourelabel: {
      left: 0,
      paddingRight: 10,
      paddingVertical: 3,
      fontSize: 16,
      fontWeight: '600',
    },
    block: {
      marginTop: 20,
      borderBottomWidth: 1,
      borderColor: '#cecece',
    }
  });