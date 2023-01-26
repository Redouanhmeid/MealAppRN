import { View, StyleSheet } from 'react-native'
import React, { useState, useRef, useCallback, useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomSheet, { BottomSheetBackdrop} from '@gorhom/bottom-sheet'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faChartSimple, faPlusCircle, faKitchenSet, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Agenda from '../screens/Agenda'
import Apprendre from '../screens/Apprendre'
import Plus from '../screens/plus/plus'
import Moi from '../screens/Moi'
import PlanMeal from '../screens/PlanMeal'

const { Navigator, Screen } = createBottomTabNavigator();

const CalendarIcon = ({focused, size}) => (
  <FontAwesomeIcon icon={ faCalendarAlt } size={size} color={focused ? '#DB2DB1' : '#404040'} />
);
const KanbanIcon = ({focused, size}) => (
  <FontAwesomeIcon icon={ faChartSimple } size={size} color={focused ? '#DB2DB1' : '#404040'} />
);
const PlusIcon = ({focused, size}) => (
  <FontAwesomeIcon icon={ faPlusCircle } mask="circle" size={ 48 } style={styles.plus} />
);
const MealIcon = ({focused, size}) => (
  <FontAwesomeIcon icon={ faKitchenSet } size={size} color={focused ? '#DB2DB1' : '#404040'} />
);
const UserIcon = ({focused, size}) => (
  <FontAwesomeIcon icon={ faUserCircle } size={size} color={focused ? '#DB2DB1' : '#404040'} />
);

const BottomTabs2 = ({navigation}) => {
  const bottomSheetRef  = useRef(null)
  const snapPoints = useMemo(() => [ '36%'], []);
  
  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index)
  }, []);
  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <>
      <Navigator
        initialRouteName="Moi"
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarActiveTintColor: "#DB2DB1",
          tabBarInactiveTintColor: "#404040",
        }}
      >
        <Screen name="Agenda" component={Agenda} options={{ tabBarIcon: CalendarIcon }} />
        <Screen name="Apprendre" component={Apprendre} options={{ tabBarIcon: KanbanIcon }} />
        <Screen name="Plus" component={Plus}
          options={{
            tabBarLabel: '',
            tabBarIcon: PlusIcon,
          }} 
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault()
              handleSnapPress(0)
            },
          })}
        />
        <Screen name="Plan Meal" component={PlanMeal} options={{ tabBarIcon: MealIcon }}/>
        <Screen name="Moi" component={Moi}options={{ tabBarIcon: UserIcon }}/>
      </Navigator>
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={{borderRadius: 25}}
    >
      <Plus navigation={navigation}/>
    </BottomSheet>
  </>
  )
}

export default BottomTabs2

const styles = StyleSheet.create({
    tabBar: {
      borderTopColor: '#f7f9fc',
      borderTopWidth: 1,
    },
    plus: {
      bottom: 4,
      color: '#DB2DB1',
    },
})