import { Feather } from "@expo/vector-icons";
import React, { Children, ComponentProps } from "react";
import { Text, StyleSheet, View } from "react-native";
type Props = {
  style?: object;
  name: ComponentProps<typeof Feather>["name"];
};

const CircleButton = ({ style, name }: Props) => {
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color={"white"} />
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
});
export default CircleButton;
