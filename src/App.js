import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import React, { useState } from 'react';
import { LoginContext } from './Contexts/LoginContext';

function App() {
	const [showProfile, setShowProfile] = useState(false);
	const [username, setUsername] = useState('');

	return (
		<div className='App'>
			{/* turn LoginContext into a Provider */}
			{/* pass in the states you want to share */}
			<LoginContext.Provider value={{ username, setUsername, setShowProfile }}>{showProfile ? <Profile /> : <Login />}</LoginContext.Provider>
		</div>
	);
}

export default App;
