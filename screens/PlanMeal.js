import React, { useState, createRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Calendar, Layout, Text } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const LeftIcon = () => (
  <FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={ 16 }/>
);
const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faAngleRight } style={styles.icon} size={ 16 }/>
);

const now = new Date();
const date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
const initialVisibleDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate() + 1);

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

  return (
    <Layout style={styles.container} level='1'>
      <View style={styles.viewclass}>
        <Button onPress={scrollToToday} style={styles.pullleft} accessoryLeft={LeftIcon} appearance='outline' />
        <Button appearance='ghost' >Aujourd'hui</Button>
        <Button onPress={scrollToSelected} style={styles.pullright} accessoryLeft={RightIcon} appearance='outline' />
      </View>
      <View style={styles.calendarContainer}>
        <Text
          category='h6'
          style={styles.text}>
          Selected date: {selectedDate.toLocaleDateString()}
        </Text>

        <Calendar
          ref={componentRef}
          date={selectedDate}
          initialVisibleDate={initialVisibleDate}
          onSelect={nextDate => setSelectedDate(nextDate)} />
      </View>

    </Layout>
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
    margin: 2,
  },
  text: {
    marginVertical: 8,
  },
  viewclass: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pullleft: {
    width: 50,
    borderRadius: 30,
  },
  pullright: {
    width: 50,
    borderRadius: 30,
  },
});