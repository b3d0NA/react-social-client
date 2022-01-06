import axios from "axios";
import { Navigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL;
var headers = {
	Accept: "application/json",
};

const sunnah = axios.create({
	baseURL: baseUrl,
	withCredentials: true,
	headers,
});

sunnah.interceptors.request.use(
	(config) => {
		const userAuth = localStorage.getItem("AUTH_TOKEN");
		if (userAuth) {
			config.headers["Authorization"] = "Bearer " + userAuth;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

sunnah.interceptors.response.use(
	(response) => {
		return new Promise((resolve, reject) => {
			resolve(response);
		});
	},
	(error) => {
		if (!error.response) {
			return new Promise((resolve, reject) => {
				reject(error);
			});
		}

		if (error.response.status === 401) {
			localStorage.removeItem("AUTH_TOKEN");
			localStorage.removeItem("AUTH_USERNAME");
			return <Navigate to="/login" replace />;
		} else {
			return new Promise((resolve, reject) => {
				reject(error);
			});
		}
	}
);
export default sunnah;
