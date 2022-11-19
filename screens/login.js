import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import { Input, Layout, Button, Text, Avatar } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
    const [value, setValue] = useState('');
    const linkTo = useLinkTo();
    return(
      <Layout style={styles.container}>
        <Layout style={styles.layout} level='1'>
          <Avatar source={require('../assets/logo.svg')}/>
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
          <Button style={styles.button}>S'IDENTIFIER</Button>
          <Text style={styles.text}>ou, connectez-vous avec</Text>
          <Layout style={styles.socialmedia}>
            <Layout style={styles.layout} level='1'>
              <Button style={styles.fb}><Icon name='facebook' /></Button>
            </Layout>
            <Layout style={styles.layout} level='1'>
              <Button style={styles.google}><Icon name='google' /></Button>
            </Layout>
            <Layout style={styles.layout} level='1'>
              <Button style={styles.twitter}><Icon name='twitter' /></Button>
            </Layout>
          </Layout>
          <Text style={styles.text}> nouveau sur l'application ? <Text style={styles.link} onPress={() => linkTo()}>S'inscrire</Text> </Text>
        </Layout>
    </Layout>
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
});