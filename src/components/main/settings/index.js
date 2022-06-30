import SettingsLeft from "./SettingsLeft";
import SettingsRight from "./SettingsRight";
const SettingsContainer = () => {
	return (
		<div className="w-full p-5 bg-white rounded-xl">
			<h1 className="mb-4 ml-10 text-3xl font-bold text-gray-600">
				Settings
			</h1>
			<div className="md:flex">
				<SettingsLeft />
				<SettingsRight />
			</div>
		</div>
	);
};

export default SettingsContainer;
