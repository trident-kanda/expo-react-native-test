import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import LogInScreen from "./components/screens/LogInScreen";
import MemoCreateScreen from "./components/screens/MemoCreateScreen";
import MemoDetailScreen from "./components/screens/MemoDetailScreen";
import MemoEditScreen from "./components/screens/MemoEditScreen";
import MemoListScreen from "./components/screens/MemoListScreen";
import SignUpScreen from "./components/screens/SignUpScreen";
import { TEST } from "@env";
export default function App() {
  const Stack = createStackNavigator();
  console.log(TEST);
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
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
