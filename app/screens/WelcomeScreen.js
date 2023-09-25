import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const WelcomeScreen = ({ navigation }) => {
	return (
		<Screen>
			<ImageBackground
				source={require("../assets/background.jpg")}
				resizeMode="cover"
				style={styles.coverImage}
				blurRadius={5}
			>
				<View style={styles.logoContainer}>
					<Image
						source={require("../assets/logo-red.png")}
						style={styles.logo}
					/>
					<Text style={styles.tagline}>Sell what you don't need</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<Button
						text="Login"
						onPress={() => navigation.navigate(routes.LOGIN)}
					/>
					<Button
						text="Register"
						bgColor="secondary"
						onPress={() => navigation.navigate(routes.REGISTER)}
					/>
				</View>
			</ImageBackground>
		</Screen>
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
	tagline: {
		fontSize: 24,
		fontWeight: "600",
		paddingVertical: 20,
	},
	buttonsContainer: {
		padding: 20,
		width: "100%",
	},
});
export default WelcomeScreen;
