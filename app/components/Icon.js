import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Icon({ color, name, size = 20 }) {
	return (
		<View style={[styles.iconContainer, { backgroundColor: color }]}>
			<MaterialCommunityIcons name={name} size={size} color={colors.white} />
		</View>
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		width: 35,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
});
