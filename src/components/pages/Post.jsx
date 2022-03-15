import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import sunnah from "../../helpers/axios";
import useAuthUser from "../../hooks/useAuthUser";
import Header from "../header";
import GuestHeader from "../header/GuestHeader";
import DawahSinglePost from "../main/feed/DawahSinglePost";
import PostSkeleton from "../main/feed/PostSkeleton";
import LeftSidebar from "../main/LeftSidebar";
import RightSidebar from "../main/RightSidebar";

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

	return currentUser ? (
		<>
			<Header userLoading={loading} />
			<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
				<LeftSidebar loading={loading} />
				<div className="w-12/12 md:w-6/12 dawah-feed-section">
					{postLoading ? (
						<PostSkeleton />
					) : (
						<DawahSinglePost post={post} />
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
						<DawahSinglePost
							post={post}
							isGuest
							comment={state.comment}
							{...(state.hasOwnProperty("comment")
								? {
										comment: state.comment,
								  }
								: {})}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Post;
