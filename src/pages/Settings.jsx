import Header from "../components/header/";
import SettingsContainer from "../components/main/settings";
import useAuthUser from "../hooks/useAuthUser";
const Settings = () => {
	const { loading } = useAuthUser();

	return (
		<div>
			<Header userLoading={loading} />
			<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
				<SettingsContainer />
			</div>
		</div>
	);
};

export default Settings;
