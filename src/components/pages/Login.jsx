import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/sunnah_logo.svg";
const Login = () => {
	return (
		<div className="container flex flex-col items-center justify-center h-screen mx-auto">
			<div className="logo_section">
				<img src={Logo} alt="Sunnah" className="h-28" />
			</div>
			<div className="flex flex-col p-5 space-y-3 bg-white register_section rounded-xl my-9">
				<h2 className="py-4 text-xl font-bold text-center text-gray-600 uppercase">
					Login
				</h2>
				<input
					type="email"
					placeholder="Email Address"
					className="px-3 py-3 bg-white border focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-gray-60 w-max rounded-xl"
				/>
				<input
					type="password"
					placeholder="Password"
					className="px-3 py-3 bg-white border focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-gray-60 w-max rounded-xl"
				/>
				<input
					type="submit"
					value="Login"
					className="px-3 py-3 mt-6 text-white bg-green-300 cursor-pointer rounded-xl hover:bg-green-400"
				/>
				<p className="text-center text-gray-600">
					Don't have an account?{" "}
					<Link
						to="/register"
						className="text-blue-600 hover:underline"
						exact
					>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
