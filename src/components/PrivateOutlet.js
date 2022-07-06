import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateOutlet = () => {
	const { user } = useAuthContext();
	console.log(user);
	if (user === undefined) {
		return "";
	} else if (user !== undefined && user) {
		return <Outlet />;
	} else if (user === null) {
		return <Navigate to="/login" replace />;
	}
};

export default PrivateOutlet;
