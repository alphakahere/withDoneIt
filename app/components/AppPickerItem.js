import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function AppPickerItem({ label, onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<AppText>{label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
