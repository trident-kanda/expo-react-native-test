import React, { useState } from "react";
import MemoDetailScreen from "./components/screens/MemoDetailScreen";
import MemoListScreen from "./components/screens/MemoListScreen";

export default function App() {
  const [count, change] = useState(0);
  return <MemoListScreen />;
}
