import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import { BASE_URL } from '../client-config'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] =useState(null)

    const login = (username, password) => {
        setIsLoading(true);
        console.log(username, password)
        axios.post(`${BASE_URL}/wp-json/jwt-auth/v1/token`, {
            username,
            password
        })
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.data.token);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.data.token);
        
            console.log(userInfo);
            console.log('User Token: ' + userInfo.data.token);
        })
        .catch(e => {
            console.log(`Login Error : ${e}`)
        })
        
        setIsLoading(false);
    }
    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }
    const isLoggedIn = async() => {
        try {
            setIsLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo')
            let userToken = await AsyncStorage.getItem('userToken')
            userInfo = JSON.parse(userInfo)
            if( userInfo ) {
                setUserToken(userToken)
                setUserInfo(userInfo)
            }
            setIsLoading(false)
        } catch(e){
            console.log(`isLogged in error ${e}`)
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}