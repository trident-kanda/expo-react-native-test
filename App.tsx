import React, { useState } from "react";
import MemoCreateScreen from "./components/screens/MemoCreateScreen";
import MemoDetailScreen from "./components/screens/MemoDetailScreen";
import MemoEditScreen from "./components/screens/MemoEditScreen";
import MemoListScreen from "./components/screens/MemoListScreen";

export default function App() {
  const [count, change] = useState(0);
  return <MemoCreateScreen />;
}
