import React from 'react'
import { Image, StyleSheet, View, Text, Button } from 'react-native'

import { TailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';
import LoginForm from '../components/LoginForm';

export default function LoginScreen({navigation}) {
  return (
    <TailwindProvider utilities={utilities}>
      <View style={styles.pag}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/icon.png')}></Image>
          <LoginForm style={styles.margin}></LoginForm>

        </View>
      </View>
    </TailwindProvider>

  );
};

const styles = StyleSheet.create({
  img: {
    height: '200px',
    width: '500px',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pag: {
    backgroundColor: '#F6D250',
    height: '100%',
    width: '100%',
  },
  margin:{
    marginTop: '3%', 
  },
});
