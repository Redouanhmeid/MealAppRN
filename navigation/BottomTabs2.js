import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useState, useRef, useContext, useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Layout, Spinner } from '@ui-kitten/components'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../client-config'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faChartSimple, faPlusCircle, faKitchenSet, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Agenda from '../screens/Agenda'
import Apprendre from '../screens/Apprendre'
import Plus from '../screens/plus/plus'
import PlanMea from '../screens/PlanMeal'
import Moi from '../screens/Moi'
import PlanMeal from '../screens/PlanMeal'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const Tab = createBottomTabNavigator();

const BottomTabs2 = ({navigation}) => {
  const {programId} = useContext(AuthContext)
  const [isLoaded, setIsLoaded] = useState(true)
  const bottomSheetModalRef = useRef(null)
  const [isOpen, setIsOpen ] = useState(false)
  const snapPoints = ['36%']
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setIsOpen(true)
  }

  let tempDate = new Date()
  let ftodayDate = tempDate.toLocaleDateString('fr')
  const [Repas1, setRepas1] = useState()
  const [Repas2, setRepas2] = useState()
  const [Repas3, setRepas3] = useState()
  const [Repas4, setRepas4] = useState()
  const [Repas5, setRepas5] = useState()
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
        setIsLoaded(false)
      } catch (error) {
        console.error(error);
      }
    }

    useLayoutEffect(() => {
      requestRepas(programId, ftodayDate)
    }, [programId])
    
  if(isLoaded) {
    return (
      <Layout style={styles.spinnercontainer} level='2'>
        <Spinner size='giant'/>
      </Layout>
    )
  }
  return (
    <BottomSheetModalProvider>
      <Tab.Navigator
        initialRouteName="Plan Meal"
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarActiveTintColor: "#DB2DB1",
          tabBarInactiveTintColor: "#404040",
        }}
      >
        <Tab.Screen name="Agenda" component={Agenda}
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faCalendarAlt } size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
          initialParams={{ R1: Repas1, R2: Repas2, R3: Repas3, R4: Repas4, R5: Repas5 }}
        />
        <Tab.Screen name="Apprendre" component={Apprendre} 
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faChartSimple } size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
        />
        <Tab.Screen name="Plus" component={Plus}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faPlusCircle } mask="circle" size={ 48 } style={styles.plus} />),
          }} 
          initialParams={{ R1: Repas1, R2: Repas2, R3: Repas3, R4: Repas4, R5: Repas5 }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault()
              handlePresentModal()
            },
          })}
        />
        <Tab.Screen name="Plan Meal" component={PlanMeal}
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faKitchenSet }  size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
        />
        <Tab.Screen name="Moi" component={Moi}
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faUserCircle } size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
        />
      </Tab.Navigator>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{borderRadius: 25, backgroundColor: '#fff'}}
        enablePanDownToClose={true}
        onDismiss={() => setIsOpen(false)}
      >
        <Plus navigation={navigation} toPlus={{Repas1, Repas2, Repas3, Repas4, Repas5}}/>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

export default BottomTabs2

const styles = StyleSheet.create({
    spinnercontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      width: windowWidth,
      height: windowHeight,
    },
    tabBar: {
      borderTopColor: '#f7f9fc',
      borderTopWidth: 1,
    },
    plus: {
      bottom: 4,
      color: '#DB2DB1',
    },
    unactive: {
      color: '#f7f9fc',
    },
    active: {
      color: '#DB2DB1'
    }
})