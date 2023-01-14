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
import Plus from '../screens/plus/plus'
const { Navigator, Screen } = createBottomTabNavigator();

const CalendarIcon = ({icst}) => (
  <FontAwesomeIcon icon={ faCalendarAlt } style={icst === 0 ? styles.active : styles.unactive} />
);
const KanbanIcon = ({icst}) => (
  <FontAwesomeIcon icon={ faChartSimple } style={icst === 1 ? styles.active : styles.unactive} />
);
const PlusIcon = () => (
  <FontAwesomeIcon icon={ faPlusCircle } mask="circle" size={ 48 } style={styles.plus}/>
);
const MealIcon = ({icst}) => (
  <FontAwesomeIcon icon={ faPlateWheat } style={icst === 3 ? styles.active : styles.unactive} />
);
const UserIcon = ({icst}) => (
  <FontAwesomeIcon icon={ faUserCircle } style={icst === 4 ? styles.active : styles.unactive} />
);

const BottomTabsBar = ({ navigation, state }) => {
  const [icst, setIcst] = useState(0)
return (
  <View>
    <Divider />
    <BottomNavigation
      style={styles.tabBar}
      selectedIndex={state.index}
      indicatorStyle={{backgroundColor: '#000', height: 0}}
      onSelect={index => {navigation.navigate(state.routeNames[index]), setIcst(index)}} >
      <BottomNavigationTab title='Agenda' icon={<CalendarIcon icst={icst} />} />
      <BottomNavigationTab title='Apprendre' icon={<KanbanIcon icst={icst} />} />
      <BottomNavigationTab icon={PlusIcon} />
      <BottomNavigationTab title='Plan meal' icon={<MealIcon icst={icst} />} />
      <BottomNavigationTab title='Moi' icon={<UserIcon icst={icst} />} />
    </BottomNavigation>
  </View>
)}

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
    borderTopColor: '#f7f9fc',
    borderTopWidth: 1,
  },
  plus: {
    bottom: 12,
    color: '#DB2DB1',
  },
  unactive: {
    color: '#111',
  },
  active: {
    color: '#DB2DB1'
  }
})
