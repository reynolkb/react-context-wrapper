import React from 'react';
import { useLogin } from '../Contexts/LoginContext';

function Profile() {
	const { username } = useLogin();

	return (
		<>
			<h1>Profile</h1>
			<h2>Username: {username} </h2>
		</>
	);
}

export default Profile;
