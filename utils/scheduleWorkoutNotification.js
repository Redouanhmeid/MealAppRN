import * as Notifications from 'expo-notifications'

export const scheduleWorkoutNotification = () => {
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var today = new Date();
  var day = today.getDay();
  
  function scheduleWONotification(notif, workout){
    console.log(notif, workout)
    let NT = parseInt(notif.workout_notifications)
    let WD = workout.days
    let WH = parseInt(workout.time.slice(0, 2))
    let WM = parseInt(workout.time.slice(3, 5))
    console.log(WD, typeof(WD))
  
    if (NT === 1) {
      WD.forEach((val, key) => {
        if(val === 1){
          let day = key + 1
          var notification = {
            content: {
              title: "C'est l'heure du workout 🏋️🏅",
              body: "ne sois pas paresseux, lève-toi pour ta séance d'entraînement",
              sound: true,
            },
            trigger: {weekday: day, hour: WH, minute: WM, repeats: true}
          };     
          // schedule notification
          Notifications.scheduleNotificationAsync(notification)
          console.log(notification)
        }
      })
    }

    
  }
  return {
    scheduleWONotification
  }
}
/* 
export const scheduleWorkoutNotification = () => {
  async function scheduleWONotification(){
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var time = hour + ':' + minute + ':' + second;
    var weekday = weekdays[day];
    var message = 'Today is ' + weekday + ' at ' + time;
    var notification = {
      title: 'Expo Notification',
      body: message,
      ios: {
        sound: true
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
      },
      trigger: {
        hour: 2,
        minute: 47,
        repeats: true
      }
    };
    var schedule = {
      hour: 2,
      minute: 47,
      repeats: true
    };
    if (day === 0 || day === 6) {
      console.log(day, weekdays[day])
      Notifications.scheduleNotificationAsync(notification);
    }
  }
  return {
    scheduleWONotification
  }
} */