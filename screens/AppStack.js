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
import Foods from '../assets/food2.json'

export const RepasContext = createContext()

const AppStack = ({children}) => {
  const {leadId, programId} = useContext(AuthContext)
  const LeadId = leadId.Id
  const NRepas = leadId.nrepas
  let tempDate = new Date()
  let today = tempDate.toLocaleDateString('fr')
  const [Repas1, setRepas1] = useState()
  const [Repas2, setRepas2] = useState()
  const [Repas3, setRepas3] = useState()
  const [Repas4, setRepas4] = useState()
  const [Repas5, setRepas5] = useState()

  const [BrFait, setBrFait] = useState(false)
  const [LnFait, setLnFait] = useState(false)
  const [DnFait, setDnFait] = useState(false)
  const [E1Fait, setE1Fait] = useState(false)
  const [E2Fait, setE2Fait] = useState(false)

  const sex = leadId.sexe
  const weight = parseInt(leadId.poidsactuel)
  const Height = parseInt(leadId.taille)
  const old = parseInt(leadId.age)
  const pp = leadId.perdrepoids
  const jt = leadId.journeetype
  const TotalCal = parseInt(objmeta(pp))
  const [CalIng, setCalIng] = useState(0)
  const [glucides, setGlucides] = useState(0)
  const [graisses, setGraisses] = useState(0)
  const [protienes, setProtiennes] = useState(0)
  const [errStatus, setErrStatus] = useState(false)

  function basicmeta(sex) {
    if (sex === "Homme") {
      return parseInt((weight * 10) + (Height * 6.25) - (old * 5) + 5);
    }
    if (sex === "Femme") {
      return parseInt((weight * 10) + (Height * 6.25) - (old * 5) - 161);
    }
    return console.error();
  }
  function calorierequirement(jt) {
    if (jt === "Sédentaire") {
      return parseInt(basicmeta(sex)) * 1.2;
    }
    if (jt === "Faible Actif") {
      return parseInt(basicmeta(sex)) * 1.375;
    }
    if (jt === "Actif") {
      return parseInt(basicmeta(sex)) * 1.55;
    }
    if (jt === "Athlète") {
      return parseInt(basicmeta(sex)) * 1.725;
    }
    return console.error();
  }
  function objmeta(perdrepoids) {
    if (perdrepoids === "Oui") {
      return parseInt(parseInt(calorierequirement(jt))) - 200;
    }
    if (perdrepoids === "Non") {
      return parseInt(parseInt(calorierequirement(jt))) + 500;
    }
    return console.error();
  }
  useEffect(() => {
    if(CalIng < 0){
      setCalIng(0)
        setGlucides(0)
        setGraisses(0)
        setProtiennes(0)
    }
  }, [CalIng])
  useEffect(() => {
    if(Repas1 !== undefined){
      if(BrFait){
        setCalIng(CalIng + Foods.find(food => food.id == Repas1).calories)
        setGlucides(glucides + Foods.find(food => food.id == Repas1).glucide)
        setGraisses(graisses + Foods.find(food => food.id == Repas1).lipide)
        setProtiennes(protienes + Foods.find(food => food.id == Repas1).protein)
      }
      else {
        setCalIng(CalIng - Foods.find(food => food.id == Repas1).calories)
        setGlucides(glucides - Foods.find(food => food.id == Repas1).glucide)
        setGraisses(graisses - Foods.find(food => food.id == Repas1).lipide)
        setProtiennes(protienes - Foods.find(food => food.id == Repas1).protein)
      }
    }
  }, [Repas1, BrFait])

  useEffect(() => {
    if(Repas2 !== undefined){
      if(LnFait){
        setCalIng(CalIng + Foods.find(food => food.id == Repas2).calories)
        setGlucides(glucides + Foods.find(food => food.id == Repas2).glucide)
        setGraisses(graisses + Foods.find(food => food.id == Repas2).lipide)
        setProtiennes(protienes + Foods.find(food => food.id == Repas2).protein)
      }
      else {
        setCalIng(CalIng - Foods.find(food => food.id == Repas2).calories)
        setGlucides(glucides - Foods.find(food => food.id == Repas2).glucide)
        setGraisses(graisses - Foods.find(food => food.id == Repas2).lipide)
        setProtiennes(protienes - Foods.find(food => food.id == Repas2).protein)
      }
    }
  }, [Repas2, LnFait])

  useEffect(() => {
    if(Repas3 !== undefined){
      if(DnFait){
        setCalIng(CalIng + Foods.find(food => food.id == Repas3).calories)
        setGlucides(glucides + Foods.find(food => food.id == Repas3).glucide)
        setGraisses(graisses + Foods.find(food => food.id == Repas3).lipide)
        setProtiennes(protienes + Foods.find(food => food.id == Repas3).protein)
      }
      else {
        setCalIng(CalIng - Foods.find(food => food.id == Repas3).calories)
        setGlucides(glucides - Foods.find(food => food.id == Repas3).glucide)
        setGraisses(graisses - Foods.find(food => food.id == Repas3).lipide)
        setProtiennes(protienes - Foods.find(food => food.id == Repas3).protein)
      }
    }
  }, [Repas3, DnFait])

  useEffect(() => {
    if(Repas4 !== undefined){
      if(E1Fait){
        setCalIng(CalIng + Foods.find(food => food.id == Repas4).calories)
        setGlucides(glucides + Foods.find(food => food.id == Repas4).glucide)
        setGraisses(graisses + Foods.find(food => food.id == Repas4).lipide)
        setProtiennes(protienes + Foods.find(food => food.id == Repas4).protein)
      }
      else {
        setCalIng(CalIng - Foods.find(food => food.id == Repas4).calories)
        setGlucides(glucides - Foods.find(food => food.id == Repas4).glucide)
        setGraisses(graisses - Foods.find(food => food.id == Repas4).lipide)
        setProtiennes(protienes - Foods.find(food => food.id == Repas4).protein)
      }
    }
  }, [Repas4, E1Fait])

  useEffect(() => {
    if(Repas5 !== undefined){
      if(E2Fait){
        setCalIng(CalIng + Foods.find(food => food.id == Repas5).calories)
        setGlucides(glucides + Foods.find(food => food.id == Repas5).glucide)
        setGraisses(graisses + Foods.find(food => food.id == Repas5).lipide)
        setProtiennes(protienes + Foods.find(food => food.id == Repas5).protein)
      }
      else {
        setCalIng(CalIng - Foods.find(food => food.id == Repas5).calories)
        setGlucides(glucides - Foods.find(food => food.id == Repas5).glucide)
        setGraisses(graisses - Foods.find(food => food.id == Repas5).lipide)
        setProtiennes(protienes - Foods.find(food => food.id == Repas5).protein)
      }
    }
  }, [Repas5, E2Fait])


  useEffect(() => {
    if(Repas1 !== undefined){
      if(BrFait){
        setCalIng(CalIng + Foods.find(food => food.id == Repas1).calories)
        setGlucides(glucides + Foods.find(food => food.id == Repas1).glucide)
        setGraisses(graisses + Foods.find(food => food.id == Repas1).lipide)
        setProtiennes(protienes + Foods.find(food => food.id == Repas1).protein)
      }
      else {
        setCalIng(CalIng - Foods.find(food => food.id == Repas1).calories)
        setGlucides(glucides - Foods.find(food => food.id == Repas1).glucide)
        setGraisses(graisses - Foods.find(food => food.id == Repas1).lipide)
        setProtiennes(protienes - Foods.find(food => food.id == Repas1).protein)
      }
    }
  }, [BrFait])
  
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
        setErrStatus(false)
      } catch (error) {
        setErrStatus(true)
      }
  }
  useEffect(() => {
    requestRepas(programId, today)
  }, [today])

  const getRepasFait = async (date) => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/fait/idprog=${programId}/repasday=${date}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      if(res.data[0].breakfastfait !== '0'){setBrFait(true)}
      else{setBrFait(false)}
      if(res.data[0].lunchfait !== '0'){setLnFait(true)}
      else{setLnFait(false)}
      if(res.data[0].dinnerfait !== '0'){setDnFait(true)}
      else{setDnFait(false)}
      if(res.data[0].encas1fait !== '0'){setE1Fait(true)}
      else{setE1Fait(false)}
      if(res.data[0].encas2fait !== '0'){setE2Fait(true)}
      else{setE2Fait(false)}
      setErrStatus(false)
    } catch (error) {
      setErrStatus(true)
    }
  }
  
  const [BrNotif, setBrNotif] = useState(false)
  const [LnNotif, setLnNotif] = useState(false)
  const [DnNotif, setDnNotif] = useState(false)
  const [E1Notif, setE1Notif] = useState(false)
  const [E2Notif, setE2Notif] = useState(false)
  const getMealsNotifications = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/lead/mealsnotifications/${LeadId}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      if(res.data[0].meals_notifications[1] === '1'){setBrNotif(true)}
      else{setBrNotif(false)}
      if(res.data[0].meals_notifications[3] === '1'){setLnNotif(true)}
      else{setLnNotif(false)}
      if(res.data[0].meals_notifications[5] === '1'){setDnNotif(true)}
      else{setDnNotif(false)}
      if(res.data[0].meals_notifications[7] === '1'){setE1Notif(true)}
      else{setE1Notif(false)}
      if(res.data[0].meals_notifications[9] === '1'){setE2Notif(true)}
      else{setE2Notif(false)}
    } catch (error) {
      setErrStatus(true)
    }
  }
  const [BreakFastTime, setBreakFastTime] = useState()
  const [LunchTime, setLunchTime] = useState()
  const [DinnerTime, setDinnerTime] = useState()
  const [EnCas1Time, setEnCas1Time] = useState()
  const [EnCas2Time, setEnCas2Time] = useState()
  const requestTimes = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/repas/repastimes/${LeadId}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params)
      setBreakFastTime(res.data[0].BreakFastTime)
      setLunchTime(res.data[0].LunchTime)
      setDinnerTime(res.data[0].DinnerTime)
      setEnCas1Time(res.data[0].EnCas1Time)
      setEnCas2Time(res.data[0].EnCas2Time)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <RepasContext.Provider value={{Repas1, Repas2, Repas3, Repas4, Repas5, getRepasFait, BrFait, LnFait, DnFait, E1Fait, E2Fait, TotalCal, CalIng, graisses, glucides, protienes, errStatus, getMealsNotifications, BrNotif, LnNotif, DnNotif, E1Notif, E2Notif, requestTimes, BreakFastTime, LunchTime, DinnerTime, EnCas1Time, EnCas2Time }}>
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