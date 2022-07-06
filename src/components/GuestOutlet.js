import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const GuestOutlet = () => {
	const { user } = useAuthContext();
	return !user ? <Outlet /> : <Navigate to="/" replace />;
};

export default GuestOutlet;
