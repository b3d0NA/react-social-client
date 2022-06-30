import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/sunnah_logo.svg";
import Error from "../components/messages/Error";
import { useAuthContext } from "../contexts/AuthContext";
import sunnah from "../helpers/axios";
const Login = () => {
	const { setUser } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const navigate = useNavigate();

	async function handleLogin(e) {
		e.preventDefault();
		if (email && password) {
			e.target.setAttribute("disabled", true);
			setLoading(true);
			await sunnah
				.post("login", { email, password })
				.then((response) => {
					const data = response.data;
					const user = data.data;
					setLoading(false);
					if (data.hasOwnProperty("status") && data.status === 200) {
						localStorage.setItem("AUTH_TOKEN", user.auth_token);
						localStorage.setItem("AUTH_USERNAME", user.username);
						setUser(user);
						navigate("/");
					}
					data.hasOwnProperty("errors") && setErrors(data.errors);
					data.hasOwnProperty("status") &&
						data.status === 401 &&
						setErrors(data);
				})
				.catch((error) => {
					console.log(error);
					setLoading(false);
					setErrors({ message: "There was an unknown error." });
				});
		}
		e.target.removeAttribute("disabled");
	}
	return (
		<div className="container flex flex-col items-center justify-center h-screen mx-auto">
			<div className="logo_section">
				<img src={Logo} alt="Sunnah" className="h-28" />
			</div>
			<div className="flex flex-col p-5 space-y-3 bg-white register_section rounded-xl my-9">
				<h2 className="py-4 text-xl font-bold text-center text-gray-600 uppercase">
					Login
				</h2>
				{errors.hasOwnProperty("message") && (
					<Error message={errors.message} />
				)}
				{errors.hasOwnProperty("email") && (
					<Error message={errors.email} />
				)}
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email Address"
					className="px-3 py-3 bg-white border focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-gray-60 rounded-xl"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					className="px-3 py-3 bg-white border focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-gray-60 rounded-xl"
				/>
				<button
					onClick={handleLogin}
					disabled={loading}
					type="submit"
					className="px-3 py-3 mt-6 text-white bg-green-400 cursor-pointer rounded-xl hover:bg-green-500"
				>
					{loading && (
						<svg
							viewBox="0 0 100 100"
							preserveAspectRatio="xMidYMid"
							className={`inline-block w-6 h-6 mx-2 animate-spin`}
						>
							<circle
								cx="50"
								cy="50"
								fill="none"
								stroke="#ffffff"
								strokeWidth="10"
								r="35"
								strokeDasharray="164.93361431346415 56.97787143782138"
								transform="matrix(1,0,0,1,0,0)"
							></circle>
						</svg>
					)}
					Login
				</button>
				<p className="text-center text-gray-600">
					Don't have an account?{" "}
					<Link
						to="/register"
						className="text-blue-600 hover:underline"
					>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
