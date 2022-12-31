import { View, Text, Button } from 'react-native'
import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

const DatePicker = (props, ref) => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Aujourd\'hui')

    useImperativeHandle(ref, () => {
      return {
        /* showAlert: () => alert(text), */
        showDatePicker,
      }
    }, [text])
    useEffect(() => {
      props.getD(text)
      
    },[text])
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)
        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(fDate)
    }
    const showDatePicker = () => {
        setShow(true)
    }
  
  return (
    <View>
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

export default forwardRef(DatePicker)