import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const GuestRoute = ({ children }) => {
	const { user } = useAuthContext();
	return !user ? children : <Navigate to="/" replace />;
};

export default GuestRoute;
