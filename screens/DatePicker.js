import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

const DatePicker = () => {
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Aujourd\'hui')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(fDate)

        console.log(fDate)
    }
    const showMode = (currentMode) => {
        setShow(true)
    }
  return (
    <View>
      <Text>{text}</Text>
      <Button title='DatePicker' onPress={() => showMode()} />
      {show && (
        <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChange}
        />
      )}
    </View>
  )
}

export default DatePicker