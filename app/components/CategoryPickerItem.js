import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

export default function CategoryPickerItem({ item, onPress }) {
	return (
		<View style={styles.container}>
			<Icon color={item.bgColor} name={item.icon} size={20} />
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { paddingVertical: 15, alignItems: "center", width: "33%" },
	label: { textAlign: "center", marginTop: 5 },
});
