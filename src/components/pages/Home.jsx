import React from "react";
import useAuthUser from "../../hooks/useAuthUser";
import Header from "../header/";
import Main from "../main/";
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
