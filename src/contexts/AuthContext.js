import React, { useContext, useEffect, useState } from "react";
const AuthContext = React.createContext();
export function useAuthContext() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState();
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		function fetchUser() {
			if (localStorage.hasOwnProperty("AUTH_TOKEN")) {
				setUser({
					AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
					AUTH_USERNAME: localStorage.getItem("AUTH_USERNAME"),
				});
				// await sunnah
				// 	.get("user")
				// 	.then((resp) => {
				// 		console.log(resp);
				// 	})
				// 	.catch((err) => {
				// 		console.log(err);
				// 	});
			}
		}
		fetchUser();
	}, []);
	// const [response, setResponse] = useState([]);
	// async function signUp({ name, username, email, password }) {
	// 	const formData = { name, username, email, password };

	// 	await sunnah
	// 		.post("register", formData)
	// 		.then((response) => {
	// 			// setResponse(response.data);
	// 			response.data.hasOwnProperty("status") &&
	// 				response.data.status === 200 &&
	// 				setUser(response.data.data);
	// 			return response.data;
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			// setResponse(error);
	// 		});
	// }

	const value = { user, setUser, currentUser, setCurrentUser };
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
export default AuthContext;
