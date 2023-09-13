import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
	return (
		<View style={{ flex: 1, paddingTop: 40, backgroundColor: colors.black }}>
			<MaterialCommunityIcons
				name="close"
				color="white"
				size={40}
				style={styles.closeIcon}
			/>
			<MaterialCommunityIcons
				name="trash-can-outline"
				color="white"
				size={40}
				style={styles.deleteIcon}
			/>
			<Image
				source={require("../assets/chair.jpg")}
				resizeMode="contain"
				style={styles.image}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		flex: 1,
	},
	closeIcon: {
		position: "absolute",
		top: 30,
		left: 20,
	},
	deleteIcon: { position: "absolute", top: 30, right: 20 },
});
export default ViewImageScreen;
