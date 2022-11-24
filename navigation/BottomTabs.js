import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faChartSimple, faPlusCircle, faPlateWheat, faUserCircle } from '@fortawesome/free-solid-svg-icons'


const CalendarIcon = () => (
  <FontAwesomeIcon icon={ faCalendarAlt } />
);
const KanbanIcon = () => (
  <FontAwesomeIcon icon={ faChartSimple } />
);
const PlusIcon = () => (
  <FontAwesomeIcon icon={ faPlusCircle } mask="circle" size={ 48 } color={'#DB2DB1'} />
);
const MealIcon = () => (
  <FontAwesomeIcon icon={ faPlateWheat } />
);
const UserIcon = () => (
  <FontAwesomeIcon icon={ faUserCircle } />
);

const BottomTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <BottomNavigation selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)} >
      <BottomNavigationTab title='Agenda' icon={CalendarIcon} />
      <BottomNavigationTab title='Apprendre' icon={KanbanIcon} />
      <BottomNavigationTab icon={PlusIcon} />
      <BottomNavigationTab title='Plan meal' icon={MealIcon} />
      <BottomNavigationTab title='Moi' icon={UserIcon} />
    </BottomNavigation>
  )
}

export default BottomTabs

