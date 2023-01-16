import { View, Text, Button } from 'react-native'
import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

const DatePicker = (props, ref) => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Aujourd\'hui')
  const [minimumDate, setMinimumDate] = useState()
  const [maximumDate, setMaximumDate] = useState()

  useImperativeHandle(ref, () => {
    return {
      /* showAlert: () => alert(text), */
      showDatePicker,
      nextDay,
      prevDay
    }
  }, [text])
  
  const MinDate = props.MinDate
  const MaxDate = props.MaxDate

  useEffect(() => {
    if(MinDate !== undefined || null){
      const [Minyear, Minmonth, Minday] = MinDate.split('-')
      setMinimumDate(new Date(+Minyear, Minmonth - 1, +Minday))
    }
    if(MaxDate !== undefined || null){
      const [Maxyear, Maxmonth, Maxday] = MaxDate.split('-')
      setMaximumDate(new Date(+Maxyear, Maxmonth - 1, +Maxday))
    }
  }, [MaxDate])

  useEffect(() => {
    props.getD(text)
  }, [text])

  const onChange = (event, date) => {
    const currentDate = date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    setText(fDate)
  }
  const showDatePicker = () => {
    setShow(true)
  }
  const nextDay = () => {
    date.setDate(date.getDate() + 1)
    let nDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    setText(nDate)
  }
  const prevDay = () => {
    date.setDate(date.getDate() - 1)
    let pDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    setText(pDate)
  }
  return (
    <View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode='date'
          display='default'
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={onChange}
          textColor='red'
          themeVariant="dark"
          positiveButton={{label: 'OK', textColor: 'green'}}
          negativeButton={{label: 'Annuler', textColor: 'red'}}
          minuteInterval={10}
        />
      )}
    </View>
  )
}

export default forwardRef(DatePicker)