import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import Button from "../components/Button";
import {logoutUser} from "../api/auth-api";

export default function HomeScreen () {
	return (
		<Background>
			<Header>Home</Header>
			<Button
				onPress={()=> {
					logoutUser()
				}}
				mode="contained"
			>Logout</Button>
		</Background>
	)
}