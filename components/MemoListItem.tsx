import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
type props = {
  memos: {
    id: string;
    bodyText: string;
    updatedAt: Date;
  }[];
};
const MemoListItem = ({ memos }: props) => {
  const navigation: StackNavigationProp<any> = useNavigation();

  return (
    <View>
      {memos.map((memo) => {
        return (
          <TouchableOpacity
            key={memo.id}
            style={styles.memoListItem}
            onPress={() => {
              navigation.navigate("MemoEdit");
            }}
          >
            <View>
              <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
              <Text style={styles.memoListItemDate}>
                {String(memo.updatedAt)}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.memoDelte}
              onPress={() => {
                alert("delete");
              }}
            >
              <Feather name="x" size={16} color="#b0b0b0" />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
  memoDelte: {
    padding: 8,
  },
});
export default MemoListItem;
