import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import React, { useState } from 'react';
import { LoginProvider } from './Contexts/LoginContext';

function App() {
	return (
		<div className='App'>
			{/* turn LoginContext into a Provider */}
			{/* pass in the states you want to share */}
			<LoginProvider>
				<Home />
			</LoginProvider>
		</div>
	);
}

export default App;
