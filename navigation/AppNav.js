import { View, ActivityIndicator } from 'react-native'
import { useContext } from 'react'
import LoginScreen from '../screens/login'
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AuthStack from '../screens/AuthStack'
import { RepasProvider } from '../context/RepasContext'

const AppNav = ({children}) => {
  const {isLoading, userToken} = useContext(AuthContext)
    if(isLoading) {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator color="#C628A4" size={'large'}/>
          </View>
        )  
    }
    return (
      <SafeAreaProvider>
        <RepasProvider>
          {userToken !== null ? <AppStack /> : <AuthStack />}
        </RepasProvider>
      </SafeAreaProvider>
    )
}

export default AppNav