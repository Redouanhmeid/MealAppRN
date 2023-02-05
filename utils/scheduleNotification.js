import * as Notifications from 'expo-notifications'
import { useContext, useLayoutEffect } from 'react';
import { RepasContext } from '../screens/AppStack';

export const scheduleNotification = () =>{
  const {getMealsNotifications, BrNotif, LnNotif, DnNotif, E1Notif, E2Notif, requestTimes, BreakFastTime, LunchTime, DinnerTime, EnCas1Time, EnCas2Time} = useContext(RepasContext)
  let BrH; let BrM; let LrH; let LrM; let DrH; let DrM; let E1rH; let E1rM; let E2rH; let E2rM;
 
  function getInfos() {
    getMealsNotifications()
    requestTimes()
    if(BreakFastTime !== undefined){
      BrH = Number(BreakFastTime.slice(0, 2)); BrM = Number(BreakFastTime.slice(3, 5))
    }
    if(LunchTime !== undefined){
      LrH = Number(LunchTime.slice(0, 2)); LrM = Number(LunchTime.slice(3, 5))
    }
    if(DinnerTime !== undefined){
      DrH = Number(DinnerTime.slice(0, 2)); DrM = Number(DinnerTime.slice(3, 5))
    }
    if(EnCas1Time !== undefined){
      E1rH = Number(EnCas1Time.slice(0, 2)); E1rM = Number(EnCas1Time.slice(3, 5))
    }
    if(EnCas2Time !== undefined){
      E2rH = Number(EnCas2Time.slice(0, 2)); E2rM = Number(EnCas2Time.slice(3, 5))
    }
  }

  async function scheduleBreakfastNotification(){
    if(BrNotif){
      getInfos()
      // schedule notification
      const BreakFast = await Notifications.scheduleNotificationAsync({
        content: {
          title: "C'est l'heure du petit-déjeuner 🥪🥑",
          body: "Mangez à la même heure tous les jours ...",
          sound: true,
        },
        trigger: {
          hour: BrH,
          minute: BrM,
          repeats: true
        }
      });
      console.log(BreakFast, BrH,  BrM)
    }
  }
  
  async function scheduleLunchNotification(){
    if(LnNotif){
      getInfos()
      // schedule notification
      const Lunch = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Profiter de votre déjeuner 🥙",
          body: "Ouvrez votre plan de repas et préparez-vous à changer pour le mieux! 💪",
          sound: true,
        },
        trigger: {
          hour: LrH,
          minute: LrM,
          repeats: true
        }
      });
      console.log(Lunch)
    }
  }
  async function scheduleDinnerNotification(){
    if(DnNotif){
      getInfos()
      // schedule notification
      const Dinner = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Soyez un gagnant. Dîner! 🌮",
          body: "Être cohérent. C'est toujours payant",
          sound: true,
        },
        trigger: {
          hour: DrH,
          minute: DrM,
          repeats: true
        }
      });
      console.log(Dinner)
    }
  }
  async function scheduleEnCas1Notification(){
    if(E1Notif){
      getInfos()
      // schedule notification
      const EnCas1 = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Heure de la collation 😉",
          body: "Faire une petite pause se recharger 🕗👉",
          sound: true,
        },
        trigger: {
          hour: E1rH,
          minute: E1rM,
          repeats: true
        }
      });
      console.log(EnCas1)
    }
  }
  async function scheduleEnCas2Notification(){
    if(E2Notif){
      getInfos()
      // schedule notification
      const EnCas2 = await Notifications.scheduleNotificationAsync({
        content: {
          title: "C'est l'heure de l'en-cas 🎉",
          body: "Faites une pause pour recharger votre énergie! 😉",
          sound: true,
        },
        trigger: {
          hour: E2rH,
          minute: E2rM,
          repeats: true
        }
      });
      console.log(EnCas2)
    }
  }
  return {
    scheduleBreakfastNotification,
    scheduleLunchNotification,
    scheduleDinnerNotification,
    scheduleEnCas1Notification,
    scheduleEnCas2Notification
  }
}