import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import { createRef, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinitePosts from "../../../hooks/useInfinitePosts";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";
import DawahSinglePost from "./DawahSinglePost";
import PostSkeleton from "./PostSkeleton";
const DawahFeed = ({ muslim = null, singlePost = null }) => {
	const [cursor, setCursor] = useState(null);
	const { posts, isLoading, error, hasMore, data, setPosts } =
		useInfinitePosts(cursor, muslim && muslim.id);
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
			{isLoading || error ? (
				<>
					<PostSkeleton />
					<PostSkeleton />
					<PostSkeleton />
				</>
			) : posts.length === 0 ? (
				<h2 className="flex items-center justify-center pt-10 text-5xl font-semibold text-center text-gray-500 gap-x-3">
					<FontAwesomeIcon
						icon={faCircleInfo}
						className="text-6xl text-cyan-500"
					/>
					No posts!
				</h2>
			) : !singlePost ? (
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
			) : (
				<DawahSinglePost
					post={singlePost.post}
					comment={singlePost.state && singlePost.state.comment}
					{...(singlePost.state &&
						(singlePost.state.hasOwnProperty("comment")
							? {
									comment: singlePost.state.comment,
							  }
							: {}))}
				/>
			)}
			<EditModal />
			<DeleteModal />
		</>
	);
};

export default DawahFeed;
