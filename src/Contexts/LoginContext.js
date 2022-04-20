import React, { useContext, useState } from 'react';

const LoginContext = React.createContext();

export function useLogin() {
	return useContext(LoginContext);
}

export function LoginProvider({ children }) {
	const [showProfile, setShowProfile] = useState(false);
	const [username, setUsername] = useState('');

	return <LoginContext.Provider value={{ username, setUsername, showProfile, setShowProfile }}>{children}</LoginContext.Provider>;
}
