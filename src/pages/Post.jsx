import _ from "lodash";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/header";
import GuestHeader from "../components/header/GuestHeader";
import DawahFeed from "../components/main/feed/DawahFeed";
import PostSkeleton from "../components/main/feed/PostSkeleton";
import LeftSidebar from "../components/main/LeftSidebar";
import RightSidebar from "../components/main/RightSidebar";
import sunnah from "../helpers/axios";
import useAuthUser from "../hooks/useAuthUser";
const Post = () => {
	const { currentUser, loading } = useAuthUser();
	const [post, setPost] = useState();
	const [postLoading, setPostLoading] = useState(true);
	const { id: postId } = useParams();
	const { state } = useLocation();

	useEffect(() => {
		sunnah
			.get(`posts/${postId}`)
			.then(({ data }) => {
				const { post } = data;
				setPost(post);
				setPostLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [postId, state]);

	return !_.isEmpty(currentUser) ? (
		<>
			<Header userLoading={loading} />
			<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
				<LeftSidebar loading={loading} />
				<div className="w-12/12 md:w-6/12 dawah-feed-section">
					{postLoading ? (
						<PostSkeleton />
					) : (
						<DawahFeed singlePost={{ post, state }} />
					)}
				</div>
				<RightSidebar />
			</div>
		</>
	) : (
		<>
			<GuestHeader />
			<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
				<div className="w-12/12 md:w-6/12 dawah-feed-section">
					{postLoading ? (
						<PostSkeleton />
					) : (
						<DawahFeed singlePost={{ post, state }} />
					)}
				</div>
			</div>
		</>
	);
};

export default Post;
