import { useEffect, useState } from "react";
import sunnah from "../helpers/axios";

const useInfinitePosts = (cursor) => {
	const [posts, setPosts] = useState([]);
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		async function fetchPosts() {
			sunnah
				.get("posts", { params: { cursor } })
				.then((response) => {
					setIsLoading(false);
					const { data } = response;
					if (data.hasOwnProperty("status") && data.status === 200) {
						const { posts } = data;
						setData(data);
						setPosts((prev) => [...prev, ...posts]);
						posts.length > 0 ? setHasMore(true) : setHasMore(false);
						data.cursor ? setHasMore(true) : setHasMore(false);
					} else {
						console.log("Something error happend");
						// setPosts([]);
					}
				})
				.catch((err) => {
					setIsLoading(false);
					setError(true);
				});
		}
		fetchPosts();
	}, [cursor]);
	return { posts, isLoading, error, hasMore, data, setPosts };
};

export default useInfinitePosts;
