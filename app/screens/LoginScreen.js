import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import Button from "../components/Button";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logo-red.png")} style={styles.logo} />
			<AppTextInput
				icon="email"
				placeholder="Email"
				keyboardType="email-address"
				autoCapitalize="none"
				autoCorrect={false}
				textContentType="emailAddress"
				onChangeText={(text) => setEmail(text)}
			/>
			<AppTextInput
				icon="lock"
				placeholder="Password"
				autoCapitalize="none"
				autoCorrect={false}
				textContentType="password"
				secureTextEntry={true}
				onChangeText={(text) => setPassword(text)}
			/>
			<Button text="Login" onPress={() => console.log({ email, password })} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginVertical: 20,
	},
});
