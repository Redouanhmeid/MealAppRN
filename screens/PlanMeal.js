import React, { useState, createRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button, Calendar, Layout, Text } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faAngleRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import PlanMeal2 from './PlanMeal2';

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

const now = new Date();
const date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
const initialVisibleDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const today = new Date()
let tomorrow =  new Date(now.getFullYear(), now.getMonth(), now.getDate())


const PlanMeal = () => {
  
  const [ selectedDate, setSelectedDate ] = useState(date);

  const componentRef = createRef(<Calendar />);

  const scrollToSelected = () => {
    if (componentRef.current) {
      componentRef.current.scrollToDate(selectedDate);
    }
  };

  const scrollToToday = () => {
    if (componentRef.current) {
      componentRef.current.scrollToToday();
    }
  };

  const scrollToTomorrow = () => {
    tomorrow.setDate(today.getDate() + 1)
  }

  return (
    <>
    <PlanMeal2 />
    <Layout style={styles.container} level='2'>
      
      <View style={styles.viewclass}>
        <Button onPress={scrollToToday} style={styles.pullleft} accessoryLeft={LeftIcon} appearance='outline' size='large' />
        <Button appearance='ghost' style={styles.today} size='large'><CalendarIcon /> {selectedDate.toLocaleDateString('en-GB')} {tomorrow.toLocaleDateString('en-GB')}</Button>
        <Button onPress={scrollToTomorrow} style={styles.pullright} accessoryLeft={RightIcon} appearance='outline' size='large' />
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          ref={componentRef}
          date={selectedDate}
          initialVisibleDate={initialVisibleDate}
          onSelect={nextDate => setSelectedDate(nextDate)} />
      </View>

    </Layout>
    </>
  );
};


export default PlanMeal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarContainer: {
    width: windowWidth,
    margin: 30,
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