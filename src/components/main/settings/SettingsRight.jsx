import { Outlet } from "react-router-dom";

const SettingsRight = () => {
	return (
		<div className="flex flex-col w-10/12 p-2 overflow-auto text-md">
			<Outlet />
		</div>
	);
};

export default SettingsRight;
