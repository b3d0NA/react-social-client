import { useEffect, useState } from "react";
import sunnah from "../helpers/axios";

const useInfiniteNotifications = (cursor, isNotificationOpen) => {
	const [notifications, setNotifications] = useState([]);
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		async function fetchNotifications() {
			setIsLoading(true);
			sunnah
				.get(`notifications`, { params: { cursor } })
				.then((response) => {
					setIsLoading(false);
					const { data } = response;
					if (data.hasOwnProperty("status") && data.status === 200) {
						const { notifications } = data;
						setData(data);
						setNotifications((prev) => [...prev, ...notifications]);
						notifications.length > 0
							? setHasMore(true)
							: setHasMore(false);
						data.cursor ? setHasMore(true) : setHasMore(false);
					} else {
						console.log(
							"Something error happend at notifications response"
						);
						// setcomments([]);
					}
				})
				.catch((err) => {
					setIsLoading(false);
					setError(true);
				});
		}
		if (isNotificationOpen) {
			setNotifications([]);
			fetchNotifications();
		}
	}, [cursor, isNotificationOpen]);
	return { notifications, isLoading, error, hasMore, data, setNotifications };
};

export default useInfiniteNotifications;
