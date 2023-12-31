import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyle from "../config/defaultStyle";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				name={icon}
				size={20}
				color={colors.medium}
				style={styles.icon}
			/>
			<TextInput
				style={[defaultStyle.text, styles.textInput, { width: width }]}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},
	icon: { marginRight: 10 },
	textInput: {
		flex: 1,
	},
});
