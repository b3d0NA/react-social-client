import { Route, Routes } from "react-router-dom";
import { AppProvider } from "../contexts/AppContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
	return (
		<AppProvider>
			<div className="bg-gray-50">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</AppProvider>
	);
}

export default App;
