import React from "react";
import { ActivityIndicator } from "react-native";
import firebase from "firebase/app";
import Background from "../components/Background";

export default function AuthLoadingScreen ({ navigation }) {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			// User is logged in
			navigation.reset({
				routes: [{ name: "HomeScreen"}],
			});
		} else {
		//	User is not logged in
			navigation.reset({
				routes: [{ name: "StartScreen"}],
			});
		}
	});

	return (
		<Background >
			<ActivityIndicator size="large" />
		</Background>
	)
}