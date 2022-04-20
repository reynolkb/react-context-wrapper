import React from 'react';
import { useLogin } from '../Contexts/LoginContext';

function Login() {
	const { setUsername, setShowProfile } = useLogin();

	return (
		<>
			<input
				type='text'
				placeholder='Username...'
				onChange={(event) => {
					setUsername(event.target.value);
				}}
			/>
			<input type='text' placeholder='Password...' />
			<button onClick={() => setShowProfile(true)}>LOGIN</button>
		</>
	);
}

export default Login;
