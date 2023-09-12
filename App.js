import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ExpoStatusBar style="auto" />
			{/* <WelcomeScreen /> */}
			{/* <ViewImageScreen /> */}
			<Card />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		padding: 10,
		backgroundColor: "gray",
		// justifyContent: "center",
	},
});
