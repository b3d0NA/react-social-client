import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
	const { user } = useAuthContext();
	return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
