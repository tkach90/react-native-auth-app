import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../core/theme";
import Header from "../components/Header";
import Background from "../components/Background";
import Button from "../components/Button";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import { emailValidator } from "../core/helpers/emailValidator";
import { passwordValidator } from "../core/helpers/passwordValidator";
import { nameValidator } from "../core/helpers/nameValidator";
import BackButton from "../components/BackButton";
import {signUpUser} from "../api/auth-api";


export default function RegisterScreen({ navigation }) {
	const [email, setEmail] = useState({ value: '', error: '' });
	const [password, setPassword] = useState({ value: '', error: '' });
	const [name, setName] = useState({ value: '', error: '' });
	const [loading, setLoading] = useState(false);

	const onSignUpPressed = async () => {
		const emailError = emailValidator(email.value);
		const passwordError = passwordValidator(password.value);
		const nameError = nameValidator(name.value);

		if (emailError || passwordError || nameError) {
			setName({ ...name, error: nameError });
			setEmail({ ...email, error: emailError });
			setPassword({ ...password, error: passwordError });
		}

		setLoading(true);

		const response = await signUpUser({
			name: name.value,
			email: email.value,
			password: password.value,
		})
		if (response.error) {
			alert(response.error)
		} else {
			alert(response.user.displayName)
		}

		setLoading(false);
	}

	return (
		<Background>
			<BackButton goBack={navigation.goBack} />
			<Logo />
			<Header>Welcome</Header>
			<TextInput
				value={email.value}
				error={email.error}
				errorText={email.error}
				onChangeText={(text) => setEmail({ value: text, error: '' })}
				label="Email"
			/>
			<TextInput
				value={password.value}
				error={password.error}
				errorText={password.error}
				onChangeText={(text) => setPassword({ value: text, error: '' })}
				label="Password"
				secureTextEntry
			/>
			<TextInput
				value={name.value}
				error={name.error}
				errorText={name.error}
				onChangeText={(text) => setName({ value: text, error: '' })}
				label="Name"
			/>
			<Button
				loading={loading}
				mode="contained"
				onPress={onSignUpPressed}
			>
				Sign up
			</Button>
			<View style={styles.row}>
				<Text>Already have an account?</Text>
				<TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
					<Text style={styles.link}>Login</Text>
				</TouchableOpacity>
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		marginTop: 4,
	},
	link: {
		fontWeight: 'bold',
		color: theme.colors.primary,
	},
})
