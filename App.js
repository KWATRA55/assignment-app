import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import Tabs from './tabs'
import SearchBar from './SearchBar';
import MapView from 'react-native-maps';

export default function App() {
  return(     
         <Tabs />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map : {
    ...StyleSheet.absoluteFillObject,
    elevation: 0,
  }, 
  nav : {
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
