import React from "react";
import { View, StyleSheet } from "react-native";
import Appbar from "../Appbar";
import CircleButton from "../CircleButton";
import MemoListItem from "../MemoListItem";

const MemoListScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListItem />
      <MemoListItem />
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
});
export default MemoListScreen;
