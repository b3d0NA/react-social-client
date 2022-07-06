import React, { useContext, useEffect, useState } from "react";
const AuthContext = React.createContext();

// Dear Developer,
// When I wrote this code only god and me knew this code
// But now only god knows what I had written.

export function useAuthContext() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState();
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		function fetchUser() {
			if (localStorage.hasOwnProperty("AUTH_TOKEN")) {
				setUser({
					AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
					AUTH_USERNAME: localStorage.getItem("AUTH_USERNAME"),
				});
			} else {
				setUser(null);
			}
		}
		fetchUser();
	}, []);

	const value = { user, setUser, currentUser, setCurrentUser };
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
export default AuthContext;
