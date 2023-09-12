import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
	return (
		<View style={{ flex: 1, paddingTop: 40, backgroundColor: colors.black }}>
			<View
				style={{
					justifyContent: "space-between",
					flexDirection: "row",
				}}
			>
				<View style={styles.closeIcon}>
					<MaterialCommunityIcons name="email" color="white" size={40} />
				</View>
				<View style={styles.deleteIcon}></View>
			</View>
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
		backgroundColor: colors.primary,
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	deleteIcon: {
		backgroundColor: colors.secondary,
		width: 50,
		height: 50,
	},
});
export default ViewImageScreen;
