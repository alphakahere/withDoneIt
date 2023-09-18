import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logo-red.png")} style={styles.logo} />
			<AppForm
				initialValues={{name: "", email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<>
					<AppFormField
						icon="account"
						placeholder="Name"
						keyboardType="default"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="username"
						name="name"
					/>
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
					<SubmitButton title="Register" />
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
