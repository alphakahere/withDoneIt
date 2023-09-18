import { StyleSheet, View } from "react-native";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";

export default function AppFormField({ name, width, ...otherProps }) {
	const { handleChange, touched, errors, setFieldTouched } = useFormikContext();
	return (
		<View style={styles.container}>
			<AppTextInput
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
				width={width}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	);
}

const styles = StyleSheet.create({ container: { marginBottom: 10 } });
