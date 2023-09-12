import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import Button from "../components/Button";

const WelcomeScreen = () => {
	return (
		<ImageBackground
			source={require("../assets/background.jpg")}
			resizeMode="cover"
			style={styles.coverImage}
			blurRadius={5}
		>
			<View style={styles.logoContainer}>
				<Image source={require("../assets/logo-red.png")} style={styles.logo} />
				<Text>Sell what you don't need</Text>
			</View>
			{/* <View style={styles.loginButton} color="#fc5c65" />
			<View style={styles.registerButton} color="#4ECDC4" /> */}
			<Button text="Login" />
			<Button text="Register" />
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	coverImage: {
		flex: 1,
		paddingTop: 100,
		alignItems: "center",
		justifyContent: "flex-end",
	},
	logoContainer: {
		position: "absolute",
		top: 50,
		alignItems: "center",
	},
	logo: {
		width: 80,
		height: 80,
	},
	loginButton: {
		backgroundColor: colors.primary,
		width: "100%",
		height: 70,
	},
	registerButton: {
		backgroundColor: colors.secondary,
		width: "100%",
		height: 70,
	},
});
export default WelcomeScreen;
