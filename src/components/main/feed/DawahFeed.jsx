import _ from "lodash";
import React, { createRef, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinitePosts from "../../../hooks/useInfinitePosts";
import DawahSinglePost from "./DawahSinglePost";
import PostSkeleton from "./PostSkeleton";
const DawahFeed = () => {
	const [cursor, setCursor] = useState(null);
	const { posts, isLoading, error, hasMore, data, setPosts } =
		useInfinitePosts(cursor);
	const postElement = useRef([]);
	postElement.current = posts.map(
		(e, i) => postElement.current[i] ?? createRef()
	);
	useEffect(() => {
		function highlightFirstPost(e) {
			const { post } = e.detail;
			setPosts((prev) => [post, ...prev]);
			postElement.current[0].current.scrollIntoView({
				behavior: "smooth",
			});
			postElement.current[0].current.classList.add(
				"ring-2",
				"ring-offset-2",
				"ring-green-300"
			);
			setTimeout(() => {
				postElement.current[0].current.classList.add("ring-opacity-0");
			}, 5000);
		}

		document.addEventListener("postCreated", highlightFirstPost);

		return () => {
			document.removeEventListener("postCreated", highlightFirstPost);
		};
	}, [postElement, data, setPosts]);

	useEffect(() => {
		function updatePost(e) {
			const { data: post, updatedText } = e.detail;
			setPosts((prev) => {
				const postClone = _.cloneWith(prev);
				const updatedPost = postClone.filter(
					(item) => post.id === item.id
				);
				updatedPost[0].text = updatedText;
				return postClone;
			});
		}
		document.addEventListener("closePostEditModal", updatePost);

		return () => {
			document.removeEventListener("closePostEditModal", updatePost);
		};
	}, [setPosts]);

	useEffect(() => {
		function deletePost(e) {
			const { data: post } = e.detail;
			setPosts((prev) => {
				const postClone = _.cloneWith(prev);
				const updatedPost = postClone.filter(
					(item) => post.id !== item.id
				);
				return updatedPost;
			});
		}
		document.addEventListener("closePostDeleteModal", deletePost);

		return () => {
			document.removeEventListener("closePostDeleteModal", deletePost);
		};
	}, [setPosts]);
	return (
		<>
			{isLoading || error || posts.length === 0 ? (
				<>
					<PostSkeleton />
					<PostSkeleton />
					<PostSkeleton />
				</>
			) : (
				<InfiniteScroll
					dataLength={posts.length}
					hasMore={hasMore}
					next={() => {
						setCursor(data.cursor);
					}}
					loader={
						<>
							<PostSkeleton />
						</>
					}
				>
					{posts.map((post, i) => {
						return (
							<DawahSinglePost
								key={post.id}
								post={post}
								postElement={postElement.current[i]}
							/>
						);
					})}
				</InfiniteScroll>
			)}
		</>
	);
};

export default DawahFeed;
