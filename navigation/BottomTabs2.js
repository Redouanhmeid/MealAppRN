import { View, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
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


const BottomTabs2 = ({navigation, backdropProps}) => {
  const [isLoaded, setIsLoaded] = useState(true)
  const bottomSheetModalRef = useRef(null)
  const [isOpen, setIsOpen ] = useState(false)
  const snapPoints = ['36%']
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setIsOpen(true)
  }
  return (
    <>
      <Navigator
        initialRouteName="Agenda"
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarActiveTintColor: "#DB2DB1",
          tabBarInactiveTintColor: "#404040",
        }}
      >
        <Screen name="Agenda" component={Agenda}
          options={{ tabBarIcon: CalendarIcon }}
        />
        <Screen name="Apprendre" component={Apprendre} 
          options={{ tabBarIcon: KanbanIcon }}
        />
        <Screen name="Plus" component={Plus}
          options={{
            tabBarLabel: '',
            tabBarIcon: PlusIcon,
          }} 
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault()
              handlePresentModal()
            },
          })}
        />
        <Screen name="Plan Meal" component={PlanMeal}
          options={{ tabBarIcon: MealIcon }}
        />
        <Screen name="Moi" component={Moi}
          options={{ tabBarIcon: UserIcon }}
        />
      </Navigator>
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{borderRadius: 25, backgroundColor: '#fff'}}
        enablePanDownToClose={true}
        onDismiss={() => setIsOpen(false)}
        style={styles.BottomSheetShadow}
      >
        <Plus navigation={navigation}/>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  </>
  )
}

export default BottomTabs2

const styles = StyleSheet.create({
   BottomSheetShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
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