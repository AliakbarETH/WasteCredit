import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./AppNavigator"; // Import the navigator configuration

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
