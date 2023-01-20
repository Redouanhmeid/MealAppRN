import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

const CircularBar = () => {
  const Cstate ={
    TotCal : 2370,
    Calingerees : 650,
  };
  const Cprops ={
    progress: Cstate.Calingerees / Cstate.TotCal,
    size: 150,
    color: '#FF7A14',
    unfilledColor: '#50075F',
    borderWidth: 0,
    textStyle: '#FCD3E4',
    endAngle: 0.5,
    thickness: 20,
    showsText: true,
    strokeCap: 'round',
  };
  const Bstate ={
    Glucides : 60,
    GlucidesMax : 354,
    Graisses : 66,
    GraissesMax : 105,
    Proteines : 190,
    ProteinesMax : 177,
  };
  const Bprops ={
    GlucidesProgress : Bstate.Glucides / Bstate.GlucidesMax,
    GraissesProgress : Bstate.Graisses / Bstate.GraissesMax,
    ProteinesProgress : Bstate.Proteines / Bstate.ProteinesMax,
  };
  var GlucidesColor = '';
  var GraissesColor = '';
  var ProteinesColor = '';
  if(Bprops.GlucidesProgress < 0.5) {GlucidesColor = '#FF7A14'}
  else if(Bprops.GlucidesProgress <= 0.7) {GlucidesColor = '#55BC36'}
  else if(Bprops.GlucidesProgress > 0.7) {GlucidesColor = '#D6239B'}
  if(Bprops.GraissesProgress < 0.5) {GraissesColor = '#FF7A14'}
  else if(Bprops.GraissesProgress <= 0.7) {GraissesColor = '#55BC36'}
  else if(Bprops.GraissesProgress > 0.7) {GraissesColor = '#D6239B'}
  if(Bprops.ProteinesProgress < 0.5) {ProteinesColor = '#FF7A14'}
  else if(Bprops.ProteinesProgress <= 0.7) {ProteinesColor = '#55BC36'}
  else if(Bprops.ProteinesProgress > 0.7) {ProteinesColor = '#D6239B'}
  return (
  <View  style={styles.parentContainer}>
    <View style={styles.childCContainer}>
      <View style={styles.iconview}>
        <FontAwesomeIcon icon={ faFireAlt } color='#FFEED0' size={ 28 }/>
      </View>
      <Progress.Circle {...Cprops}
        formatText={() => {
        return (
          <View style={styles.childCircle}>
            <Text style={styles.childValue}>{Cstate.TotCal - Cstate.Calingerees}</Text>
            <Text style={styles.childText}>Cal restantes</Text>
          </View>
        )}}
      />
      <Text style={styles.childTextIn}>{Cstate.Calingerees} cal ingérées</Text>
    </View>

    <View style={styles.childBContainer}>
    <View style={styles.childBar}>
      <View style={styles.childBarContainer}>
        <Text style={styles.childTextBarTop}>Glucides : {Bstate.Glucides} g</Text>
        <Progress.Bar
          progress={Bprops.GlucidesProgress}
          color={GlucidesColor}
          borderColor="#50075F"
          unfilledColor="#50075F"
          height={12}
          borderRadius={12}
          width={150} />
          <Text style={styles.childTextBarBottom}>NORME : 236-354 G</Text>
      </View>
      <View style={styles.childBarContainer}>
        <Text style={styles.childTextBarTop}>Graisses : {Bstate.Graisses} g</Text>
        <Progress.Bar
        progress={Bprops.GraissesProgress}
        color={GraissesColor}
        borderColor="#50075F"
        unfilledColor="#50075F"
        height={12}
        borderRadius={12}
        width={150} />
        <Text style={styles.childTextBarBottom}>NORME : 66-105 G</Text>
      </View>
      <View style={styles.childBarContainer}>
        <Text style={styles.childTextBarTop}>Protéines : {Bstate.Proteines} g</Text>
        <Progress.Bar
        progress={Bprops.ProteinesProgress}
        color={ProteinesColor}
        borderColor="#50075F"
        unfilledColor="#50075F"
        height={12}
        borderRadius={12}
        width={150} />
        <Text style={styles.childTextBarBottom}>NORME : 89-177 G</Text>
      </View>
    </View>
    </View>
</View>
  )
}

export default CircularBar

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  childCContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 25,
  },
  childCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  childBContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  childBar: {
    alignItems: 'flex-start',
  },
  childValue: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold'
  },
  childText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700'
  },
  childTextIn: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 6,
  },
  iconview: {
    backgroundColor: '#FF7A14',
    borderRadius: 25,
    padding: 6,
    position: 'relative',
    top: '14%',
    zIndex: 1,
  },
  childBarContainer: {
    marginVertical: 6,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  childTextBarTop: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
  childTextBarBottom: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
});