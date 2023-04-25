import React, {useState} from 'react';
import Header from "../components/Header";
import Background from "../components/Background";
import Button from "../components/Button";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import { emailValidator } from "../core/helpers/emailValidator";
import BackButton from "../components/BackButton";
import {sendEmailWithPassword} from "../api/auth-api";

export default function ResetPasswordScreen({ navigation }) {
	const [email, setEmail] = useState({ value: '', error: '' });
	const [loading, setLoading] = useState(false);

	const onSubmitPressed = async () => {
		const emailError = emailValidator(email.value);

		if (emailError) {
			setEmail({ ...email, error: emailError });
		}

		setLoading(true);

		const response = await sendEmailWithPassword(email.value);

		if (response.error) {
			alert(response.error);
		} else {
			alert('Email with the password has been sent.');
		}

		setLoading(false);
	}

	return (
		<Background>
			<BackButton goBack={navigation.goBack} />
			<Logo />
			<Header>Restore Password</Header>
			<TextInput
				value={email.value}
				error={email.error}
				errorText={email.error}
				onChangeText={(text) => setEmail({ value: text, error: '' })}
				label="Email"
				description="You will receive email with password reset link."
			/>
			<Button
				mode="contained"
				onPress={onSubmitPressed}
				loading={loading}
			>
				Send Instructions
			</Button>
		</Background>
	)
}