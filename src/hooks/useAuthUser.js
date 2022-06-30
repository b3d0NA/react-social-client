import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import sunnah from "../helpers/axios";

// Dear Developer,
// When I wrote this code only god and me knew this code
// But now only god knows what I had written.

const useAuthUser = () => {
	const { currentUser, setCurrentUser } = useAuthContext();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchUser() {
			if (localStorage.getItem("AUTH_TOKEN") === null) {
				setCurrentUser();
				setLoading(false);
			} else {
				if (currentUser && currentUser.hasOwnProperty("id")) {
					setLoading(false);
				} else {
					setLoading(true);
					sunnah
						.get("users/show")
						.then(({ data }) => {
							setCurrentUser(data.data);
							setLoading(false);
						})
						.catch((err) => {
							console.log(err);
							setLoading(true);
						});
				}
			}
		}
		fetchUser();
	}, [setCurrentUser, currentUser]);
	return { currentUser, loading };
};

export default useAuthUser;
