import Header from "../components/header";
import Main from "../components/main/";
import useAuthUser from "../hooks/useAuthUser";
const Home = () => {
	const { loading } = useAuthUser();
	return (
		<div>
			<Header userLoading={loading} />
			<Main userLoading={loading} />
		</div>
	);
};

export default Home;
