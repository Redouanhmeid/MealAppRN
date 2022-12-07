import React from 'react';
import { AuthProvider } from './context/AuthContext'
import AppNav from './navigation/AppNav'
import 'react-native-gesture-handler'

function App({children}) {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;

