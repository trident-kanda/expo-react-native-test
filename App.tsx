import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Appbar from "./components/Appbar";
import CircleButton from "./components/CircleButton";
import MemoListItem from "./components/MemoListItem";

export default function App() {
  const [count, change] = useState(0);
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListItem />
      <MemoListItem />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
});
