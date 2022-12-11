import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Moi = () => {
  const {userInfo} = useContext(AuthContext)
  return (
    <View>
      <Text>Bonjour {userInfo.user_display_name}</Text>
    </View>
  )
}

export default Moi