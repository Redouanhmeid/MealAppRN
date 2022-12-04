import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationTab, Divider } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faChartSimple, faPlusCircle, faPlateWheat, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Apprendre from '../screens/Apprendre'
import PlanMeal from '../screens/PlanMeal'
import Agenda from '../screens/Agenda'
import Moi from '../screens/Moi'
import Plus from '../screens/Plus'
const { Navigator, Screen } = createBottomTabNavigator();

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

const BottomTabsBar = ({ navigation, state }) => (
  <View>
    <Divider />
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])} >
      <BottomNavigationTab title='Agenda' icon={CalendarIcon} />
      <BottomNavigationTab title='Apprendre' icon={KanbanIcon} />
      <BottomNavigationTab icon={PlusIcon} />
      <BottomNavigationTab title='Plan meal' icon={MealIcon} />
      <BottomNavigationTab title='Moi' icon={UserIcon} />
    </BottomNavigation>
  </View>
)

export const BottomTabs = () => (
  <Navigator tabBar={props => <BottomTabsBar {...props} />}>
    <Screen name='Agenda' component={Agenda} />
    <Screen name='Apprendre' component={Apprendre} />
    <Screen name='Plus' component={Plus} />
    <Screen name='Plan Meal' component={PlanMeal} />
    <Screen name='Moi' component={Moi} />
  </Navigator>
)

