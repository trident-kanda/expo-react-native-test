import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { auth, db } from "../../firebase/firebase";
import CircleButton from "../CircleButton";
import LogOutButton from "../LogOutButton";
import MemoListItem from "../MemoListItem";

type Props = {
  navigation: StackNavigationProp<any>;
};
type memos = {
  id: string;
  bodyText: string;
  updatedAt: Date;
}[];
const MemoListScreen = ({ navigation }: Props) => {
  const [memos, setMemos] = useState<[] | memos>([]);
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
          const userMemos: memos = [];
          snap.forEach((item) => {
            console.log(item.data());
            const data = item.data();
            userMemos.push({
              id: item.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
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
      <MemoListItem memos={memos} />
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
