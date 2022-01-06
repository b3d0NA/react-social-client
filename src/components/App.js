import Echo from "laravel-echo";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "../contexts/AppContext";
import { AuthProvider } from "../contexts/AuthContext";
import sunnah from "../helpers/axios";
import GuestRoute from "./GuestRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
function App() {
	sunnah.get("../sanctum/csrf-cookie");
	window.Pusher = require("pusher-js");

	window.Echo = new Echo({
		broadcaster: "pusher",
		key: process.env.REACT_APP_MIX_PUSHER_APP_KEY,
		cluster: process.env.REACT_APP_MIX_PUSHER_APP_CLUSTER,
		forceTLS: true,
		authEndpoint: process.env.BASE_URL + "/broadcasting/auth",
	});
	return (
		<AppProvider>
			<AuthProvider>
				<div className="bg-gray-50">
					<Routes>
						<Route
							path="/"
							element={
								<PrivateRoute>
									<Home />
								</PrivateRoute>
							}
						/>
						<Route
							path="/posts/{id}"
							element={
								<PrivateRoute>
									<Post />
								</PrivateRoute>
							}
						/>
						<Route
							path="/register"
							element={
								<GuestRoute>
									<Register />
								</GuestRoute>
							}
						/>
						<Route
							path="/login"
							element={
								<GuestRoute>
									<Login />
								</GuestRoute>
							}
						/>
					</Routes>
				</div>
			</AuthProvider>
		</AppProvider>
	);
}

export default App;
