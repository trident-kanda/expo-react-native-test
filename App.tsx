import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, View } from 'react-native';
import Hello from './components/Hello';


export default function App() {
  const [count,change] = useState(0)
  return (
    <View style={styles.container}>
      <Hello bang={true}>World</Hello>
      <Hello bang={true} style={{fontSize:16}}>SmallWorld</Hello>
      <Text>こんにちは</Text>
      <StatusBar style="auto" />
    </View>
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
