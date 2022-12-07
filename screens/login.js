import React, { useState, useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Input, Layout, Button, Text, Avatar } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthProvider, AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
    const {login, userToken} = useContext(AuthContext);
    const [value, setValue] = useState('');
    return(
      <AuthProvider>
      <Layout style={styles.container}>
        <Layout style={styles.layout} level='1'>
        <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
          <Text style={styles.text} category='h3'>Connectez-vous</Text>
          <Input
            style={styles.input}
            value={value}
            size='large'
            placeholder='Email'
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            style={styles.input}
            size='large'
            placeholder='Mot de passe'
            onChangeText={nextValue => setValue(nextValue)}
            secureTextEntry
          />
          <Button style={styles.button} onPress={() => {login()}} size='giant'>S'IDENTIFIER</Button>
          <Text>iii : {userToken}</Text>
          <Text style={styles.text}>ou, connectez-vous avec</Text>
          <Layout style={styles.socialmedia}>
            <Layout style={styles.layout} level='1'></Layout>
            <Layout style={styles.layout} level='1'>
              <Button style={styles.fb} size='large'><Icon name='facebook' /></Button>
            </Layout>
            <Layout style={styles.layout} level='1'>
              <Button style={styles.google} size='large'><Icon name='google' /></Button>
            </Layout>
            <Layout style={styles.layout} level='1'>
              <Button style={styles.twitter} size='large'><Icon name='twitter' /></Button>
            </Layout>
            <Layout style={styles.layout} level='1'></Layout>
          </Layout>
          <Text style={styles.text} category='s1'> Nouveau sur l'application? <Text style={styles.link}>S'inscrire</Text> </Text>
        </Layout>
    </Layout>
    </AuthProvider>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  socialmedia: {
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  button: {
    alignItems: 'center',
    width: '92%',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  text: {
    marginVertical: 28,
  },
  fb: {
    color: '#fff',
    backgroundColor: '#4267B2',
    borderColor: '#fff',
  },
  google: {
    color: '#fff',
    backgroundColor: '#DB4437',
    borderColor: '#fff',
  },
  twitter: {
    color: '#fff',
    backgroundColor: '#1DA1F2',
    borderColor: '#fff',
  },
  link: {
    color: '#4267B2',
  },
  logo: {
    marginVertical: 50,
  },
});