import React, {useState} from 'react';
import Header from "../components/Header";
import Background from "../components/Background";
import Button from "../components/Button";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import { emailValidator } from "../core/helpers/emailValidator";
import BackButton from "../components/BackButton";

export default function ResetPasswordScreen({ navigation }) {
	const [email, setEmail] = useState({ value: '', error: '' });

	const onSubmitPressed = () => {
		const emailError = emailValidator(email.value);

		if (emailError) {
			setEmail({ ...email, error: emailError });
		}
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
			>
				Send Instructions
			</Button>
		</Background>
	)
}