import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import { BASE_URL } from '../client-config'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] =useState(null)
    const [leadId, setLeadId] =useState(null)

    const login = (username, password) => {
        setIsLoading(true);
        const requestInfo = async () => {
            try {
                const res = await axios.post(`${BASE_URL}/wp-json/jwt-auth/v1/token`, {username, password});
                let userInfo = res.data;
                setUserInfo(userInfo);
                setUserToken(userInfo.token);
                await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                await AsyncStorage.setItem('userToken', userInfo.token);
                try {
                    const res = await axios.get(`${BASE_URL}/wp-json/leads/mail/${userInfo.user_email}`)
                    let LeadId = res.data[0]
                    setLeadId(LeadId)
                    await AsyncStorage.setItem('leadId', JSON.stringify(LeadId));
                }
                catch(err) {
                    console.error(err);
                }
            }
            catch(err) {
                console.error(err);
            }
        }
        requestInfo();
        setIsLoading(false);
    }
    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('leadId');
        setIsLoading(false);
    }
    const isLoggedIn = async() => {
        try {
            setIsLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo')
            let userToken = await AsyncStorage.getItem('userToken')
            let leadId = await AsyncStorage.getItem('leadId')
            userInfo = JSON.parse(userInfo)
            leadId = JSON.parse(leadId)
            if( userInfo ) {
                setUserToken(userToken)
                setUserInfo(userInfo)
                setLeadId(leadId)
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
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo, leadId}}>
            {children}
        </AuthContext.Provider>
    )
}