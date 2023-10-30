import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ModalPortal } from "react-native-modals";
import { AppNavigator } from "./src/components/AppNavigator.js";
import { UserContext } from "./UserContext.js";

export default function App() {
  return (
    <NavigationContainer>
      <UserContext>
        <AppNavigator />
        <ModalPortal />
      </UserContext>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
