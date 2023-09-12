import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function Button({ bgColor, text }) {
	return (
		<TouchableOpacity style={[styles.button]}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		backgroundColor: colors.primary,
		borderRadius: 50,
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
