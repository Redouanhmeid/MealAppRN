import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthContext'
const windowWidth = Dimensions.get('screen').width

const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);

const Detailspersonels = ({navigation}) => {
  const {leadId} = useContext(AuthContext)
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  console.log(leadId)
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='Détails personnels' accessoryLeft={renderBackAction} />
      <Layout style={styles.container} level='2'>
        <Layout style={styles.block} level='1'>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Âge</Text>
            <Text style={styles.hourelabel}>{leadId.age}</Text>
          </View>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Poids de départ</Text>
            <Text style={styles.hourelabel}>{leadId.poidsactuel} kg</Text>
          </View>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Poids cible</Text>
            <Text style={styles.hourelabel}>{leadId.poidssouhaite} kg</Text>
          </View>
          <View style={styles.toggles}>
            <Text style={styles.togglelabel}>Taille</Text>
            <Text style={styles.hourelabel}>{leadId.taille} cm</Text>
          </View>
        </Layout>
      </Layout>
    </SafeAreaView>
  )
}

export default Detailspersonels

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
