import { View, Text, StyleSheet } from 'react-native'
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
      style={styles.tabBar}
      selectedIndex={state.index}
      indicatorStyle={{backgroundColor: '#000', height: 4}}
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
    <Screen name='Agenda' options={{headerShown: false}} component={Agenda} />
    <Screen name='Apprendre' options={{headerShown: false}} component={Apprendre} />
    <Screen name='Plus' options={{headerShown: false}} component={Plus} />
    <Screen name='Plan Meal' options={{headerShown: false}} component={PlanMeal} />
    <Screen name='Moi' options={{headerShown: false}} component={Moi} />
  </Navigator>
)

const styles = StyleSheet.create({
  tabBar: {
      borderTopColor: '#ddd',
  },
})
