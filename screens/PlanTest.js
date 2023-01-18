import { View, Text, StyleSheet } from 'react-native'
import React, { useReducer } from 'react'
import { Layout, Button } from '@ui-kitten/components'
const initialState = {date: 0};
function countDate(state, action){
  switch (action.type) {
    case 'decrement':
      return {date: state.date - 1};
    case 'increment':
      return {date: state.date + 1};
    default:
      throw new Error();
  }
}
const PlanTest = () => {
    const [state, dispatch] = useReducer(countDate, initialState)

  return (
    <Layout style={styles.container} level='2'>
      <View style={styles.viewclass}>
        <Button onPress={() => dispatch({type: 'decrement'})} style={styles.pullleft} appearance='outline' size='large' />
        <Button appearance='ghost' style={styles.today} size='large'>
          <Text>Total : {state.date}</Text>
        </Button>
        <Button onPress={() => dispatch({type: 'increment'})} style={styles.pullright} appearance='outline' size='large' />
      </View>
    </Layout>
  )
}

export default PlanTest

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    viewclass: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
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