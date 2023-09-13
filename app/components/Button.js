import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function Button({ bgColor = "primary", text }) {
	return (
		<TouchableOpacity style={[styles.button, { backgroundColor: colors[bgColor] }]}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		borderRadius: 25,
		padding: 14,
		marginBottom: 10,
	},
	text: {
		color: "#FFF",
		textAlign: "center",
		fontWeight: "500",
		fontSize: 18,
	},
});
export default Button;
