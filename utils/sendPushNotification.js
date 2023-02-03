import * as Notifications from 'expo-notifications'
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { RepasContext } from '../screens/AppStack';

export const scheduleNotifications = (expoPushToken) =>{
  const {getMealsNotifications, BrNotif, LnNotif, DnNotif, E1Notif, E2Notif, requestTimes, BreakFastTime, LunchTime, DinnerTime, EnCas1Time, EnCas2Time} = useContext(RepasContext)
  let BrH; let BrM; let LrH; let LrM; let DrH; let DrM; let E1rH; let E1rM; let E2rH; let E2rM;
  const trigger = new Date();
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
  

  const Brnotif = (expoPushToken) => {
    getInfos();
    trigger.setHours(BrH);
    trigger.setMinutes(BrM);
    console.log(trigger)
    //BreakFast notification
    if(BrNotif){
      async function checkVariable() {
        if(BrH !== undefined && BrM !== undefined) {
          // Cancel All notifications
          await Notifications.cancelAllScheduledNotificationsAsync();
          // schedule notification
          await Notifications.scheduleNotificationAsync({
            identifier: 'BreakFast',
            content: {
              to: expoPushToken,
              title: "C'est l'heure du petit-déjeuner 🥞🥑",
              body: "Mangez à la même heure tous les jours ...",
              sound: true,
            },
            trigger,
          });
        }
      }
      setTimeout(checkVariable, 500);
    }
  }

  const Lnnotif = (expoPushToken) => {
    getInfos();
    trigger.setHours(LrH)
    trigger.setMinutes(LrM);
    console.log(trigger)
    //BreakFast notification
    if(LnNotif){
      async function checkVariable() {
        if(LrH !== undefined && LrM !== undefined) {
          // Cancel All notifications
          await Notifications.cancelAllScheduledNotificationsAsync();
          // schedule notification
          await Notifications.scheduleNotificationAsync({
            identifier: 'Lunch',
            content: {
              to: expoPushToken,
              title: "Profiter de votre déjeuner 🥙",
              body: "Ouvrez votre plan de repas et préparez-vous à changer pour le mieux! 💪",
              sound: true,
            },
            trigger,
          });
        }
      }
      setTimeout(checkVariable, 500);
    } 
  }

  const Dnnotif = (expoPushToken) => {
    getInfos();
    console.log(DrH, DrM, typeof(DrH), typeof(DrM))
    trigger.setHours(DrH)
    trigger.setMinutes(DrM);
    console.log(trigger)
    //BreakFast notification
    if(DnNotif){
      async function checkVariable() {
        if(DrH !== undefined && DrM !== undefined) {
          // Cancel All notifications
          await Notifications.cancelAllScheduledNotificationsAsync();
          // schedule notification
          await Notifications.scheduleNotificationAsync({
            identifier: 'BreakFast',
            content: {
              to: expoPushToken,
              title: "Soyez un gagnant. Dîner! 🌮",
              body: "Être cohérent. C'est toujours payant",
              sound: true,
            },
            trigger,
          });
        }
      }
      setTimeout(checkVariable, 500);
    }
  }

  const E1notif = (expoPushToken) => {    
    getInfos(); 
    trigger.setHours(E1rH)
    trigger.setMinutes(E1rM);
    console.log(trigger)
    //BreakFast notification
    if(E1Notif){
      async function checkVariable() {
        if(E1rH !== undefined && E1rM !== undefined) {
          // Cancel All notifications
          await Notifications.cancelAllScheduledNotificationsAsync();
          // schedule notification
          await Notifications.scheduleNotificationAsync({
            identifier: 'BreakFast',
            content: {
              to: expoPushToken,
              title: "C'est l'heure de l'en-cas 🎉",
              body: "Faites une pause pour recharger votre énergie! 😉",
              sound: true,
            },
            trigger,
          });
        }
      }
      setTimeout(checkVariable, 500);
    }
  }

  const E2notif = async (expoPushToken) => {
    getInfos();
    trigger.setHours(E2rH)
    trigger.setMinutes(E2rM);
    console.log(trigger)
    //BreakFast notification
    if(E2Notif){
      async function checkVariable() {
        if(E2rH !== undefined && E2rM !== undefined) {
          // Cancel All notifications
          await Notifications.cancelAllScheduledNotificationsAsync();
          // schedule notification
          await Notifications.scheduleNotificationAsync({
            identifier: 'BreakFast',
            content: {
              to: expoPushToken,
              title: "C'est l'heure de l'en-cas 🎉",
              body: "Faites une pause pour recharger votre énergie! 😉",
              sound: true,
            },
            trigger,
          });
        }
      }
      setTimeout(checkVariable, 500);
    }
  }
  return {
    Brnotif,
    Lnnotif,
    Dnnotif,
    E1notif,
    E2notif
  }
}

/* const trigger = new Date(Date.now() + 1 * 60 * 1000);
trigger.setMinutes(0);

export async function sendPushBreakfastNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      title: "You've got mail! 📬",
      body: 'Here is the notification body m',
    };
       
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(message),
    });
} */