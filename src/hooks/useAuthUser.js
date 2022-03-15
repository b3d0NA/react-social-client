import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import sunnah from "../helpers/axios";

const useAuthUser = () => {
	const { currentUser, setCurrentUser } = useAuthContext();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPosts() {
			if (localStorage.getItem("AUTH_TOKEN") === null) {
				setCurrentUser();
				setLoading(false);
			} else {
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
			}
		}
		fetchPosts();
	}, [setCurrentUser]);
	return { currentUser, loading };
};

export default useAuthUser;
