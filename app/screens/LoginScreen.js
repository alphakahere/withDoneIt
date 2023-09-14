import { Image, StyleSheet } from "react-native";
import React from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logo-red.png")} style={styles.logo} />
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
					<>
						<AppTextInput
							icon="email"
							placeholder="Email"
							keyboardType="email-address"
							autoCapitalize="none"
							autoCorrect={false}
							textContentType="emailAddress"
							onChangeText={handleChange("email")}
							onBlur={() => setFieldTouched("email")}
						/>
						<ErrorMessage error={errors.email} visible={touched.email} />
						<AppTextInput
							icon="lock"
							placeholder="Password"
							autoCapitalize="none"
							autoCorrect={false}
							textContentType="password"
							secureTextEntry={true}
							onChangeText={handleChange("password")}
							onBlur={() => setFieldTouched("password")}
						/>
						<ErrorMessage
							error={errors.password}
							visible={touched.password}
						/>
						<Button text="Login" onPress={handleSubmit} />
					</>
				)}
			</Formik>
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
