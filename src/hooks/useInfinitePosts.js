import { useEffect, useRef, useState } from "react";
import sunnah from "../helpers/axios";

const useInfinitePosts = (cursor, muslim) => {
	const [posts, setPosts] = useState([]);
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [hasMore, setHasMore] = useState(true);
	const isMounted = useRef();

	useEffect(() => {
		isMounted.current = true;
		async function fetchPosts() {
			sunnah
				.get(muslim ? `muslims/${muslim}/posts` : "posts", {
					params: { cursor },
				})
				.then((response) => {
					isMounted.current && setIsLoading(false);
					const { data } = response;
					if (data.hasOwnProperty("status") && data.status === 200) {
						const { posts } = data;
						if (isMounted.current) {
							setData(data);
							setPosts((prev) => [...prev, ...posts]);
							posts.length > 0
								? setHasMore(true)
								: setHasMore(false);
							data.cursor ? setHasMore(true) : setHasMore(false);
						}
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
		return () => (isMounted.current = false);
	}, [cursor, muslim]);
	return { posts, isLoading, error, hasMore, data, setPosts };
};

export default useInfinitePosts;
