import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faChartSimple, faPlusCircle, faKitchenSet, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Agenda from '../screens/Agenda'
import Apprendre from '../screens/Apprendre'
import Plus from '../screens/Plus'
import PlanMea from '../screens/PlanMeal'
import Moi from '../screens/Moi'
import PlanMeal from '../screens/PlanMeal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../screens/BottomSheet';

const Tab = createBottomTabNavigator();

const BottomTabs2 = () => {
  const ref = useRef()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Agenda"
        mode="Modal"
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarActiveTintColor: "#DB2DB1",
          tabBarInactiveTintColor: "#404040",
        }}
      >
        <Tab.Screen name="Agenda" component={Agenda}
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faCalendarAlt } size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
        />
        <Tab.Screen name="Apprendre" component={Apprendre} 
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faChartSimple } size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
        />
        <Tab.Screen name="Plus" component={Plus}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faPlusCircle } mask="circle" size={ 48 } style={styles.plus} />),
          }} 
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault()
              ref?.current?.scrollTo(300)
            },
          })}
        />
        <Tab.Screen name="Plan Meal" component={PlanMeal}
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faKitchenSet }  size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
        />
        <Tab.Screen name="Moi" component={Moi}
          options={{
            tabBarIcon: ({focused, size}) => (<FontAwesomeIcon icon={ faUserCircle } size={size} color={focused ? '#DB2DB1' : '#404040'} />),
          }}
        />
      </Tab.Navigator>
      <BottomSheet ref={ref} />
    </GestureHandlerRootView>
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
    unactive: {
      color: '#f7f9fc',
    },
    active: {
      color: '#DB2DB1'
    }
})