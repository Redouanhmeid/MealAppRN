import { StyleSheet, View, Image, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Card, Text, Layout, Button, ListItem, Spinner } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBoltLightning, faAngleRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { LineChart } from 'react-native-chart-kit'
import axios from 'axios'
import { BASE_URL } from '../client-config'


const FireIcon = () => (
  <FontAwesomeIcon icon={ faBoltLightning } style={styles.icon} size={ 24 }/>
);
const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faAngleRight } style={styles.icon} size={ 16 }/>
);
const RightLongIcon = (props) => (
    <FontAwesomeIcon icon={ faRightLong } style={styles.icon2} size={ 24 } />
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
  const LeadId = leadId.Id
  const PoidsInitial = parseInt(leadId.poidsactuel)
  const PoidDesire = parseInt(leadId.poidssouhaite)
  const [poids, setPoids] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true)
  const getPoids = async () => {
    poids[0] = PoidsInitial, setPoids(poids)
    try {
      var params = {
        url: `${BASE_URL}/wp-json/weight/progress/${LeadId}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      let j = res.data.length + 1
      if(res.data.length > 0){
        for (let i = 1; i < j; i++) {
          let v = i - 1
          poids[i] = parseInt(res.data[v].weight), setPoids(poids)
        }
      }
      setIsLoaded(false)
    } catch (error){
      console.error(error)
    }
  }
  useEffect(() => {
    getPoids()
  }, [isLoaded])

  const Chart = () => {
    if(poids.length > 0){
      return (
        <LineChart
        style={styles.chart}
        data={{
          /* labels: ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"], */
          datasets: [{data: poids}]
        }}
        width={330} // from react-native
        height={300}
        yAxisSuffix="Kg"
        xLabelsOffset={4}
        withShadow={false}
        withOuterLines={false}
        withVerticalLabels={false}
        withVerticalLines={false}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 0) => `rgba(198, 40, 164, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "8",
            strokeWidth: "1",
            stroke: "#AA1D99"
          }
        }}
      />
      )
    }
    return null
  }

  const Loading = () => (
    <Layout style={styles.spinnercontainer} level='2'>
      <Spinner size='giant'/>
    </Layout>
  )

  return (
    <Card style={styles.card} header={Header}>
        {isLoaded ? Loading() : Chart()}
      <View style={styles.viewclass}>
        <Text category='h5'>Objectif</Text>
        <Text category='h2'> {PoidsInitial}Kg <RightLongIcon /> {PoidDesire}Kg</Text>
      </View>
    </Card>
  )
}

export default Progres

const styles = StyleSheet.create({
    spinnercontainer: {
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginVertical: 16,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
    },
    chart:{
      marginTop: 16,
    },
    icon: {
      color: "#C628A4",
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