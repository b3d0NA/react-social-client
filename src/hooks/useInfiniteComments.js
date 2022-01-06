import { useEffect, useState } from "react";
import sunnah from "../helpers/axios";

const useInfiniteComments = (id, cursor) => {
	const [comments, setComments] = useState([]);
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		async function fetchPosts() {
			setIsLoading(true);
			sunnah
				.get(`posts/${id}/comments`, { params: { cursor } })
				.then((response) => {
					setIsLoading(false);
					const { data } = response;
					if (data.hasOwnProperty("status") && data.status === 200) {
						const { comments } = data;
						setData(data);
						setComments((prev) => [...prev, ...comments]);
						comments.length > 0
							? setHasMore(true)
							: setHasMore(false);
						data.cursor ? setHasMore(true) : setHasMore(false);
					} else {
						console.log("Something error happend");
						// setcomments([]);
					}
				})
				.catch((err) => {
					setIsLoading(false);
					setError(true);
				});
		}
		fetchPosts();
	}, [cursor, id]);
	return { comments, isLoading, error, hasMore, data, setComments };
};

export default useInfiniteComments;
