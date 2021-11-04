import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Appbar from './components/Appbar';
import MemoListItem from './components/MemoListItem';


export default function App() {
  const [count,change] = useState(0)
  return (
    <View style={styles.container}>
      <Appbar/>

      <MemoListItem/>
      <MemoListItem/>
      
      

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  memoListItem:{
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal:19,
    alignItems:"center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)"
  },
  memoListItemTitle:{
    fontSize:16,
    lineHeight:32
  },
  memoListItemDate:{
    fontSize: 12,
    lineHeight: 16,
    color: "#848484"
  },
  circleButton:{
    backgroundColor: "#467FD3",
    width:64,
    height:64,
    borderRadius:32,
    justifyContent:"center",
    alignItems:"center",
    position: "absolute",
    right:30,
    bottom:30,
    shadowColor: "#000000",
    shadowOffset:{width:0,height:8},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation:8,
  },
  circleButtonLabel:{
    color:"#ffffff",
    fontSize:40,
    lineHeight:40
  }
});
