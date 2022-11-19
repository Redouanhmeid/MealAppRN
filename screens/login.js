import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Button, Text } from '@ui-kitten/components';

const LoginScreen = () => {
    const [value, setValue] = useState('');

    return(
      <Layout style={styles.container}>
        <Layout style={styles.layout} level='1'>
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
            <Button style={styles.button} appearance='outline'>S'IDENTIFIER</Button>
            <Button style={styles.button}>S'INSCRIRE</Button>
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
});