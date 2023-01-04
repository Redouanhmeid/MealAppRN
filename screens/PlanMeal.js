import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button, Calendar, Layout, Text } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faAngleRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DatePicker from './DatePicker'
import PlanMealChild from './PlanMealChild';

const LeftIcon = () => (
  <FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={ 24 }/>
);
const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faAngleRight } style={styles.icon} size={ 24 }/>
);
const CalendarIcon = (props) => (
  <FontAwesomeIcon icon={ faCalendarAlt } style={styles.icon} />
);
const windowWidth = Dimensions.get('window').width;

const PlanMeal = () => {
  const [ selectedDate, setSelectedDate ] = useState('Aujourd\'hui')
  const [MinDate, setMinDate] = useState()
  const [MaxDate, setMaxDate] = useState()
  const childCompRef = useRef()
  const [date, setDate] = useState(new Date())
 
  const tomDate = new Date()
  tomDate.setDate(new Date().getDate() + 1)
  let ftomorrowDate = tomDate.getDate() + '/' + (tomDate.getMonth() + 1) + '/' + tomDate.getFullYear()
  
  const tempDate = new Date(date)
  let ftodayDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

  const ystDate = new Date()
  ystDate.setDate(new Date().getDate() - 1)
  let fyesterdayDate = ystDate.getDate() + '/' + (ystDate.getMonth() + 1) + '/' + ystDate.getFullYear()
  
  
  const [ selectedDateString, setSelectedDateString ] = useState()
  useEffect(()=>{
    if (selectedDate === ftodayDate){ setSelectedDateString('Aujourd\'hui') }
    else if (selectedDate === fyesterdayDate){ setSelectedDateString('Hier') }
    else if (selectedDate === ftomorrowDate){ setSelectedDateString('Demain') }
    else { setSelectedDateString(selectedDate) }
  }, [selectedDate, MinDate, MaxDate])
 
  return (
    <>
      <Layout style={styles.container} level='2'>
      <Text category='h1'>  Plan de repas</Text>
        <View style={styles.viewclass}>
          <Button onPress={() => childCompRef.current.prevDay()} style={styles.pullleft} accessoryLeft={LeftIcon} appearance='outline' size='large' />
          <Button onPress={() => childCompRef.current.showDatePicker()} appearance='ghost' style={styles.today} size='large'>
            <CalendarIcon /> { selectedDateString }
          </Button>
          <Button onPress={() => childCompRef.current.nextDay()} style={styles.pullright} accessoryLeft={RightIcon} appearance='outline' size='large' />
        </View>
        <PlanMealChild getD={selectedDate} getMinDate={MinDate => setMinDate(MinDate)} getMaxDate={MaxDate => setMaxDate(MaxDate)}/>
      </Layout>
      <DatePicker ref={childCompRef} getD={selectedDate => setSelectedDate(selectedDate)} MinDate={MinDate} MaxDate={MaxDate}/>
    </>
  );
};


export default PlanMeal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 50,
  },
  text: {
    marginVertical: 8,
  },
  viewclass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  today: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pullleft: {
    borderRadius: 30,
    width: 53,
    height: 53,
    borderColor: "#fff",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pullright: {
    borderRadius: 30,
    width: 53,
    height: 53,
    borderColor: "#fff",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});