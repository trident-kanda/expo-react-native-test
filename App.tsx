import React, { useState } from "react";
import LogInScreen from "./components/screens/LogInScreen";
import MemoCreateScreen from "./components/screens/MemoCreateScreen";
import MemoDetailScreen from "./components/screens/MemoDetailScreen";
import MemoEditScreen from "./components/screens/MemoEditScreen";
import MemoListScreen from "./components/screens/MemoListScreen";
import SignUpScreen from "./components/screens/SignUpScreen";

export default function App() {
  return <MemoListScreen />;
}
