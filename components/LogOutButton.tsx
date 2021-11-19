import { signOut } from "@firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

import React from "react";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { auth } from "../firebase/firebase";

const LogOutButton = () => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const handlePress = () => {
    signOut(auth)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LogIn" }],
        });
      })
      .catch(() => {
        Alert.alert("ログアウトに失敗");
      });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
  },
});
