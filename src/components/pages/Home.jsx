import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { useAuthContext } from "../../contexts/AuthContext";
import sunnah from "../../helpers/axios";
import Header from "../header/";
import Main from "../main/";
const Home = () => {
	const { setCurrentUser } = useAuthContext();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		sunnah
			.get("users/show")
			.then((resp) => {
				setCurrentUser(resp.data.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(true);
			});
	}, [setCurrentUser]);
	return (
		<div>
			<Header userLoading={loading} />
			<Main userLoading={loading} />
		</div>
	);
};

export default Home;
