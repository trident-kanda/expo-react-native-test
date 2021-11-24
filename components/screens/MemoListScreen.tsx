import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { auth, db } from "../../firebase/firebase";
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
  useEffect(() => {
    const currentUser = auth.currentUser;
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = query(
        collection(db, "users", `${currentUser?.uid}`, "memos"),
        orderBy("updatedAt", "desc")
      );
      unsubscribe = onSnapshot(
        ref,
        (snap) => {
          snap.forEach((item) => {
            console.log(item.data());
          });
        },
        (error) => {
          console.log(error);
          Alert.alert("データの読み込みに失敗しました");
        }
      );
    }
    return unsubscribe;
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
