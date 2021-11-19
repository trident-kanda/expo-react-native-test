import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CircleButton from "../CircleButton";
import LogOutButton from "../LogOutButton";
import MemoListItem from "../MemoListItem";

type Props = {
  navigation: StackNavigationProp<any>;
};
const MemoListScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);
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
