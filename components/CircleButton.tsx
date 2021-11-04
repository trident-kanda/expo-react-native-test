import React from "react";
import { Text, StyleSheet, View } from "react-native";
const CircleButton = () => {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: "#467FD3",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 30,
    bottom: 30,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 40,
  },
});
export default CircleButton;
