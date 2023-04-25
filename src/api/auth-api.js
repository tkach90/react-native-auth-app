import firebase from 'firebase/app';
import 'firebase/auth';

export async function signUpUser({ name, email, password }) {
	try {
		const { user } = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
		await firebase.auth().currentUser.updateProfile({
			displayName: name,
		})
		return { user }
	} catch (error) {
		return {
			error: error.message,
		}
	}
}