import React from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
type props = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
};
const Button = ({ label, onPress }: props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#467fd3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: "#ffffff",
  },
});
export default Button;
