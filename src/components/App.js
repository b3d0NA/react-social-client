import Echo from "laravel-echo";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "../contexts/AppContext";
import { AuthProvider } from "../contexts/AuthContext";
import sunnah from "../helpers/axios";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Settings from "../pages/Settings";
import GuestRoute from "./GuestRoute";
import ImageModal from "./main/feed/FeedImage/ImageModal";
import SecuritySettings from "./main/settings/SecuritySettings";
import SettingsProfile from "./main/settings/SettingsProfile";
import PrivateRoute from "./PrivateRoute";
function App() {
	sunnah.get("../sanctum/csrf-cookie");
	window.Pusher = require("pusher-js");

	window.Echo = new Echo({
		broadcaster: "pusher",
		key: process.env.REACT_APP_MIX_PUSHER_APP_KEY,
		cluster: process.env.REACT_APP_MIX_PUSHER_APP_CLUSTER,
		forceTLS: true,
		authorizer: (channel, options) => {
			return {
				authorize: (socketId, callback) => {
					sunnah
						.post("broadcasting/auth", {
							socket_id: socketId,
							channel_name: channel.name,
						})
						.then((response) => {
							callback(false, response.data);
						})
						.catch((error) => {
							callback(true, error);
						});
				},
			};
		},
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
						<Route path="/posts/:id" element={<Post />} />
						<Route path="/muslims/:id" element={<Profile />} />

						<Route
							path="/settings"
							element={
								<PrivateRoute>
									<Settings />
								</PrivateRoute>
							}
						>
							<Route
								path="profile"
								element={
									<PrivateRoute>
										<SettingsProfile />
									</PrivateRoute>
								}
							/>
							<Route
								path="security"
								element={
									<PrivateRoute>
										<SecuritySettings />
									</PrivateRoute>
								}
							/>
						</Route>
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
						<Route
							path="*"
							element={
								<main style={{ padding: "1rem" }}>
									<p>There's nothing here!</p>
								</main>
							}
						/>
					</Routes>
					<ImageModal />
				</div>
			</AuthProvider>
		</AppProvider>
	);
}

export default App;
