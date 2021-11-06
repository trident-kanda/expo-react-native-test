import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Appbar from "../Appbar";
import CircleButton from "../CircleButton";

const MemoEditScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Appbar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
  );
};

export default MemoEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});
