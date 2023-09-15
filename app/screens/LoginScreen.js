import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logo-red.png")} style={styles.logo} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<>
					<AppFormField
						icon="email"
						placeholder="Email"
						keyboardType="email-address"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="emailAddress"
						name="email"
					/>
					<AppFormField
						icon="lock"
						placeholder="Password"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="password"
						secureTextEntry={true}
						name="password"
					/>
					<SubmitButton title="Login" />
				</>
			</AppForm>
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
