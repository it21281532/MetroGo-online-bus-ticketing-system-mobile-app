import React from "react";
import { render } from "@testing-library/react-native";
import LoginScreen from "../screens/LoginScreen";

describe("LoginScreen", () => {
  it("renders the component", () => {
    const { getByText } = render(<LoginScreen />);
    // Replace with appropriate text you expect in your component
    expect(getByText("Login In to your Account")).toBeTruthy();
  });
});
