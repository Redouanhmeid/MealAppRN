import { View, Text } from 'react-native'
import React from 'react'
import { DatePicker } from 'react-native-week-month-date-picker'
import { addDays } from 'date-fns'
const PlanMeal3 = () => {
  const minDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <View>
      <DatePicker
        minDate={minDate}
        maxDate={addDays(minDate, 120)}
        markedDates={[minDate, addDays(new Date(), 2)]}
        selectedDate={selectedDate}
        onDateChange={(date) => setSelectedDate(date)}
        disabledDates={[addDays(new Date(), 1), addDays(new Date(), 3)]}
        allowsPastDates={false}
        locale="en"
        theme={{
          primaryColor: 'purple',
        }}
      >
        <View>
          <Text>Timeslots</Text>
          <Text>{selectedDate.toString()}</Text>
        </View>
      </DatePicker>
      <Text>Helloooo</Text>
    </View>
  )
}

export default PlanMeal3