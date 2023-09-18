import { StyleSheet, View } from "react-native";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

export default function AppFormPicker({
	items,
	name,
	placeholder,
	width,
	PickerItemComponent,
	numberOfColumns,
}) {
	const { touched, errors, setFieldTouched, setFieldValue, values } = useFormikContext();
	return (
		<View style={styles.container}>
			<AppPicker
				categories={items}
				onSelectedItem={(item) => setFieldValue(name, item)}
				onBlur={() => setFieldTouched(name)}
				selectedItem={values[name]}
				placeholder={placeholder}
				width={width}
				PickerItemComponent={PickerItemComponent}
				numberOfColumns={numberOfColumns}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	);
}

const styles = StyleSheet.create({ container: { marginBottom: 10 } });
