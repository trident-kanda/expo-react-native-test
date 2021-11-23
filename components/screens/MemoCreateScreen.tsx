import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import CircleButton from "../CircleButton";
import { auth, db } from "../../firebase/firebase";
import { setDoc, collection, doc } from "@firebase/firestore";
type Props = {
  navigation: StackNavigationProp<any>;
};
const MemoCreateScreen = ({ navigation }: Props) => {
  const [bodyText, setBodyText] = useState("");
  const handlePress = async () => {
    const currentUser = auth.currentUser;
    const docRef = doc(collection(db, "users", `${currentUser?.uid}`, "memos"));
    await setDoc(docRef, {
      bodyText,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log("成功");
        navigation.goBack();
      })
      .catch((error) => {
        console.log("Error!", error);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardAvoidingView>
  );
};

export default MemoCreateScreen;

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
