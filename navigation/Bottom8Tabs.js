import { View, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import { BottomNavigation, BottomNavigationTab, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faChartSimple, faPlusCircle, faKitchenSet, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Apprendre from '../screens/Apprendre'
import PlanMeal from '../screens/PlanMeal'
import Agenda from '../screens/Agenda'
import Moi from '../screens/Moi'
import ModalBottomSheet from '../screens/plus/ModalBottomSheet'
import Plus from '../screens/plus/plus'
const { Navigator, Screen } = createBottomTabNavigator();

const CalendarIcon = ({focused}) => (
  <FontAwesomeIcon icon={ faCalendarAlt } color={focused === 0 ? '#DB2DB1' : '#404040'} />
);
const KanbanIcon = ({focused}) => (
  <FontAwesomeIcon icon={ faChartSimple } color={focused === 1 ? '#DB2DB1' : '#404040'} />
);
const PlusIcon = () => (
  <FontAwesomeIcon icon={ faPlusCircle } mask="circle" size={ 48 } style={styles.plus}/>
);
const MealIcon = ({focused}) => (
  <FontAwesomeIcon icon={ faKitchenSet } color={focused === 3 ? '#DB2DB1' : '#404040'} />
);
const UserIcon = ({focused}) => (
  <FontAwesomeIcon icon={ faUserCircle } color={focused === 4 ? '#DB2DB1' : '#404040'} />
);

const BottomTabsBar = ({ navigation, state }) => {
  const [focused, setFocused] = useState(0)
  function Navigation(Item) {
    console.log(Item)
    if (Item === 2) {{() => childCompRef.current.handlePresentModal()} }
    else {navigation.navigate(state.routeNames[Item])}
  }
  const [isOpen, setIsOpen ] = useState(false)
  const bottomSheetModalRef = useRef(null)
  const snapPoints = ['100%']
  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present()
    setIsOpen(true)
  }
return (
  <View >
    <BottomNavigation
      style={styles.tabBar}
      selectedIndex={state.index}
      indicatorStyle={{backgroundColor: '#000', height: 0}}
      onSelect={index => {Navigation(index), setFocused(index)}} >
      <BottomNavigationTab title='Agenda' icon={<CalendarIcon focused={focused} />} />
      <BottomNavigationTab title='Apprendre' icon={<KanbanIcon focused={focused} />} />
      <BottomNavigationTab icon={PlusIcon} />
      <BottomNavigationTab title='Plan meal' icon={<MealIcon focused={focused} />} />
      <BottomNavigationTab title='Moi' icon={<UserIcon focused={focused} />} />
    </BottomNavigation>
    
    <BottomSheetModalProvider >
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onDismiss={() => {setIsOpen(false)}}
        backgroundStyle={{borderRadius: 25, backgroundColor: '#ccc'}}
      >
        <Plus navigation={navigation}/>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  </View>
)}

export const BottomTabs = () => (
    <Navigator 
      initialRouteName='Agenda'
      tabBar={props => <BottomTabsBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#DB2DB1",
        tabBarInactiveTintColor: "#404040",
      }}
    >
      <Screen name='Agenda' component={Agenda}/>
      <Screen name='Apprendre' component={Apprendre}/>
      <Screen name='Plus' component={Plus} />
      <Screen name='Plan Meal' component={PlanMeal}/>
      <Screen name='Moi' component={Moi}/>
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
})
