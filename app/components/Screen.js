import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";
export default function Screen({ children }) {
	return (
		<SafeAreaView style={styles.screen}>
			<ExpoStatusBar style="auto" />
			{children}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: colors.gray,
	},
});
