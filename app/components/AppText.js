import { Text } from "react-native";
import React from "react";
import defaultStyle from "../config/defaultStyle";

export default function AppText({ style, children }) {
	return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}
