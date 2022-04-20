import React from 'react';
import { useLogin } from '../Contexts/LoginContext';
import Profile from './Profile';
import Login from './Login';

function Home() {
	const { showProfile } = useLogin();

	return <>{showProfile ? <Profile /> : <Login />}</>;
}

export default Home;
