import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import CircleButton from "../CircleButton";
import MemoListItem from "../MemoListItem";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};
const MemoListScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <CircleButton
        name="plus"
        onPress={() => {
          navigation.navigate("MemoCreate");
        }}
      />
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
