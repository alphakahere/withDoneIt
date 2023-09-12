import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ExpoStatusBar style="auto" />
			<WelcomeScreen />
			{/* <ViewImageScreen /> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
	},
});
