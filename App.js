import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Open from './components/Open';

export default function App() {
  return (
    <Open/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
