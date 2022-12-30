import { StyleSheet, View, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Card, Text, Layout, Button, ListItem } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBoltLightning, faAngleRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { LineChart } from 'react-native-chart-kit'


const FireIcon = () => (
  <FontAwesomeIcon icon={ faBoltLightning } style={styles.icon} size={ 24 }/>
);
const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faAngleRight } style={styles.icon} size={ 16 }/>
);
const RightLongIcon = (props) => (
    <FontAwesomeIcon icon={ faRightLong } style={styles.icon2} />
  );
const Title = (props) => (
    <Text category='h5'> Progrès</Text>
  );
const Header = (props) => (
  <ListItem
    title={Title}
    accessoryLeft={FireIcon}
    accessoryRight={RightIcon}
  />
);

const Progres = () => {
  const {userInfo, leadId} = useContext(AuthContext)
  const poids = leadId.poidsactuel
  return (
    <Card style={styles.card} header={Header}>
        <LineChart
            data={{
                /* labels: ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"], */
                datasets: [{data: [poids, 50, 53, 59, 62, 67, 69]}]
            }}
            width={330} // from react-native
            height={300}
            yAxisSuffix="Kg"
            chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0,
                color: (opacity = 0) => `rgba(142, 20, 139, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#C628A4"
                }
            }}
            /* bezier */
        />
      <View style={styles.viewclass}>
        <Text category='h5'>Objectif</Text>
        <Text category='h3'> {leadId.poidsactuel}Kg <RightLongIcon /> {leadId.poidsactuel}Kg <RightLongIcon /> {leadId.poidssouhaite}Kg</Text>
      </View>
    </Card>
  )
}

export default Progres

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
    },
    icon: {
      color: "#F2355B",
      width: 64,
      height: 64,
    },
    icon2: {
      color: "#999",
    },
    viewclass: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#ededed",
      paddingTop: 18,
      paddingBottom: 18,
      borderRadius: 8,
    },
    img: {
      width: 100,
      height: 100,
      marginBottom: 12,
    },
  });