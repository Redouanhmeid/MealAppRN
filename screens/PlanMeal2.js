import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'

const PlanMeal2 = () => {
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => console.log('onDayLongPress', day.dateString)}
        onMonthChange={(date) => console.log('onMonthChange', date)}
        onPressArrowLeft={(goToPreviousMonth) => {console.log('onPressArrowLeft'); goToPreviousMonth()}}
        onPressArrowRight={(goToNextMonth) => {console.log('onPressArrowRight'); goToNextMonth()}}
        markingType={'custom'}
        maxDate={'2022-12-30'}
        markedDates={{
            '2022-12-17': {customStyles:{container:{backgroundColor:'black', elevation:2}, text:{color:'white'}}}
        }}
      />
    </View>
  )
}

export default PlanMeal2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})