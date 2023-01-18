import { View, Text, StyleSheet } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import BottomTabs from '../navigation/BottomTabs'
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, IconRegistry, Layout } from '@ui-kitten/components'
import AppNavigator from '../navigation/AppNavigator'
import { default as theme } from '../theme.json'
import * as eva from '@eva-design/eva'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../client-config'
import axios from 'axios'

export const RepasContext = createContext()

const AppStack = ({children}) => {
  const {programId} = useContext(AuthContext)
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
      } catch (error) {
        console.error(error);
      }
  }
    useEffect(() => {
      requestRepas(programId, ftodayDate)
    }, [ftodayDate])
  return (
    <RepasContext.Provider value={{Repas1, Repas2, Repas3, Repas4, Repas5}}>
      {children}
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Layout style={styles.container} level='1'>
          <AppNavigator />
        </Layout>
      </ApplicationProvider>
    </RepasContext.Provider>
  )
}

export default AppStack


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  topnav: {
    justifyContent: 'flex-start',
    marginTop: 30,
  },
})