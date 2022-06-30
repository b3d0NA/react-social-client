import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
	const { user } = useAuthContext();
	if (user) {
		return children;
	} else {
		console.log("No login found");
		return <Navigate to="/login" replace />;
	}
};

export default PrivateRoute;
