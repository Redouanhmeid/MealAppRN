import React, { useState, useContext } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Input, Layout, Button, Text, Avatar } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEyeSlash, faEye, faEyeDropper } from '@fortawesome/free-solid-svg-icons'
import { AuthProvider, AuthContext } from '../context/AuthContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = ({navigation}) => {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
      console.log(secureTextEntry)
    };
  
    const renderIcon = () => (
        <FontAwesomeIcon onPress={() => toggleSecureEntry()} icon={secureTextEntry ? faEyeSlash : faEye} />
    );
  
    const renderCaption = () => {
      return (
        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>Doit contenir au moins 8 symboles</Text>
        </View>
      )
    }
   
    return(
    <AuthProvider>
      <KeyboardAwareScrollView>
      <Layout style={styles.container}>
        <Layout style={styles.layout} level='1'>
        <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
          <Text style={styles.text} category='h3'>Connectez-vous</Text>
          <Input
            style={styles.input}
            value={email}
            size='large'
            placeholder='Email'
            onChangeText={text => setEmail(text)}
          />
          <Input
            style={styles.input}
            value={password}
            size='large'
            placeholder='Mot de passe'
            caption={renderCaption}
            accessoryRight={renderIcon}
            onChangeText={text => setPassword(text)}
            secureTextEntry={secureTextEntry}
          />
          <Button style={styles.button} onPress={() => {login(email, password)}} size='giant'>S'IDENTIFIER</Button>
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
    </KeyboardAwareScrollView>
  </AuthProvider>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 60,
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
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionText: {
    fontSize: 14,
    color: "#8F9BB3",
  }
});