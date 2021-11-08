import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LogInScreen from "./components/screens/LogInScreen";
import MemoCreateScreen from "./components/screens/MemoCreateScreen";
import MemoDetailScreen from "./components/screens/MemoDetailScreen";
import MemoEditScreen from "./components/screens/MemoEditScreen";
import MemoListScreen from "./components/screens/MemoListScreen";
import SignUpScreen from "./components/screens/SignUpScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: "#467fD3" },
          headerTitleStyle: { color: "#ffffff" },
          headerTitle: "MemoApp",
          headerTintColor: "#ffffff",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
