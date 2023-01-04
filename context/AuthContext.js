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
    const [programId, setProgramId] = useState(null)

    const login = async (username, password) => {
        setIsLoading(true);
        try {
            const res = await axios.post(`${BASE_URL}/wp-json/jwt-auth/v1/token`, {username, password})
            let userInfo = res.data
            await setUserInfo(res.data)
            await setUserToken(res.data.token)
            await AsyncStorage.setItem('userInfo', JSON.stringify(res.data))
            await AsyncStorage.setItem('userToken', res.data.token)
                var paramsId = {
                    url: `${BASE_URL}/wp-json/leads/mail/${res.data.user_email}`,
                    method: 'get',
                    rejectUnauthorized: false,//add when working with https sites
                    requestCert: false,//add when working with https sites
                    agent: false,//add when working with https sites
                  }
                const resId = await axios(paramsId)
                let LeadId = resId.data[0]
                await setLeadId(resId.data[0])
                await AsyncStorage.setItem('leadId', JSON.stringify(resId.data[0]))
                var paramsProg = {
                    url: `${BASE_URL}/wp-json/repas/idprogrambylead/${resId.data[0].Id}`,
                    method: 'get',
                    rejectUnauthorized: false,//add when working with https sites
                    requestCert: false,//add when working with https sites
                    agent: false,//add when working with https sites
                }
                const resProg = await axios(paramsProg)
                setProgramId(resProg.data[0].Id_Program)
                await AsyncStorage.setItem('programId', resProg.data[0].Id_Program)
        }
        catch(err) {
            console.error(err);
        }
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('leadId');
        AsyncStorage.removeItem('programId');
        setIsLoading(false);
    }
    const isLoggedIn = async() => {
        try {
            setIsLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo')
            let userToken = await AsyncStorage.getItem('userToken')
            let leadId = await AsyncStorage.getItem('leadId')
            let programId = await AsyncStorage.getItem('programId')
            userInfo = JSON.parse(userInfo)
            leadId = JSON.parse(leadId)
            if( userInfo ) {
                setUserToken(userToken)
                setUserInfo(userInfo)
                setLeadId(leadId)
                setProgramId(programId)
            }
            setIsLoading(false)
        } catch(e){
            console.log(`isLogged in error ${e}`)
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, [programId])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo, leadId, programId}}>
            {children}
        </AuthContext.Provider>
    )
}