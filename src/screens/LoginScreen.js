import React, {useState} from 'react';
import Header from "../components/Header";
import Background from "../components/Background";
import Button from "../components/Button";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";

export default function LoginScreen() {
	const [email, setEmail] = useState({ value: '', error: '' });
	const [password, setPassword] = useState({ value: '', error: '' });

	const onLoginPressed = () => {
		const emailError = email.value ? '' : "Email can`t be empty.";

		if (emailError) {
			setEmail({ ...email, error: emailError });
		}
	}

	return (
		<Background>
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
				onChangeText={(text) => setPassword({ value: text, error: '' })}
				label="Password"
				secureTextEntry
			/>
			<Button
				mode="contained"
				onPress={onLoginPressed}
			>
				Login
			</Button>
		</Background>
	)
}