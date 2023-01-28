import * as Notifications from 'expo-notifications'

export const scheduleNotifications = async (expoPushToken) =>{
  
  // Cancel All notifications
  await Notifications.cancelAllScheduledNotificationsAsync();
  //9AM notification
  await Notifications.scheduleNotificationAsync({
    identifier: 'morning-1',
    content: {
      to: expoPushToken,
      title: `Good Morning!`,
      subtitle: 'Greetings',
      body: `Have a great day`,
      sound: true,
      color: "#ffffff",
      data: {
        to: 'new-log'
      }
    },
    trigger: {
      hour: 14,
      minute: 0,
      repeats: true
    }
  });
     //9PM notification
  await Notifications.scheduleNotificationAsync({
    identifier: 'night-notification',
    content: {
      title: `Good Night :)`,
      subtitle: 'Have a great sleep :D',
      body: `Have a great sleep :D`,
      sound: true,
      data: {
        to: 'new-log'
      },
      color: "#000000"
    },
    trigger: {
      hour: 15,
      minute: 2,
      repeats: true
    }
  });
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