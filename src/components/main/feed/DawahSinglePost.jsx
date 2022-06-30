import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import CommentContainer from "../comment";
import FeedImage from "./FeedImage";
import LovePost from "./LovePost";
const DawahSinglePost = ({ post, postElement, isGuest, comment }) => {
	const {
		id,
		user_id,
		text,
		images,
		user_profile,
		posted_at,
		posted_user,
		comments_count,
	} = post;
	const { currentUser } = useAuthContext();
	const postClone = _.cloneWith(post);
	postClone.path = "posts";
	const [isPostOptionOpen, setIsPostOptionOpen] = useState(false);
	const [isCommentClicked, setIsCommentClicked] = useState(false);
	const [commentsCount, setCommentsCount] = useState(
		parseInt(comments_count)
	);
	const postOptionRef = useRef();

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
		function handleClick(e) {
			if (postOptionRef && postOptionRef.current) {
				const ref = postOptionRef.current;
				if (!ref.contains(e.target) && isPostOptionOpen) {
					setIsPostOptionOpen(false);
				}
			}
		}
	}, [isPostOptionOpen]);

	function handleEditModal() {
		const postEditEvent = new CustomEvent("openEditModal", {
			detail: {
				data: postClone,
			},
		});
		document.dispatchEvent(postEditEvent);
		setIsPostOptionOpen(false);
	}

	function handleDeleteModal() {
		const postDeleteEvent = new CustomEvent("openDeleteModal", {
			detail: {
				data: postClone,
			},
		});
		document.dispatchEvent(postDeleteEvent);
		setIsPostOptionOpen(false);
	}

	useEffect(() => {
		comment && setIsCommentClicked(true);
	}, [comment]);
	return (
		<div
			ref={postElement}
			className="p-5 my-5 transition duration-300 bg-white rounded-xl postcont"
		>
			<div className="flex flex-col space-y-5">
				<div className="flex items-center justify-between post-header">
					<div className="flex items-center space-x-4 post_header_left">
						<img
							src={user_profile}
							alt={posted_user}
							className="object-cover w-12 h-12 rounded-2xl"
						/>
						<div className="user_info">
							<Link to={`/muslims/${user_id}`}>
								<h2 className="font-semibold text-gray-700 text-md hover:text-gray-900">
									{posted_user}
								</h2>
							</Link>
							<p className="text-xs font-light text-gray-400">
								{posted_at}
							</p>
						</div>
					</div>
					{currentUser && (
						<div className="relative mr-1 post_options">
							<button
								className="px-2 border border-gray-300 rounded-xl hover:border-green-500 focus:ring-2 focus:outline-none focus:ring-gray-300"
								onClick={() =>
									setIsPostOptionOpen(!isPostOptionOpen)
								}
							>
								<svg
									className="w-6 h-6 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
									/>
								</svg>
							</button>
							<div
								ref={postOptionRef}
								className={`absolute transition duration-200 ease-in-out transform -right-0 ${
									!isPostOptionOpen &&
									"-translate-y-2/4 opacity-0 scale-0"
								} options top-8 w-max z-20`}
							>
								<ul className="px-2 py-2 space-y-3 text-sm bg-gray-50 rounded-xl md:text-base">
									<li className="px-3 py-2 hover:bg-gray-100 rounded-xl">
										<CopyToClipboard
											text={
												window.location.host +
												`/posts/${id}`
											}
											onCopy={() =>
												setIsPostOptionOpen(false)
											}
										>
											<button className="flex space-x-2 text-gray-700 hover:text-yellow-500 text-md">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="w-5 h-5"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth="2"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
													/>
												</svg>
												<span>Copy Post Link</span>
											</button>
										</CopyToClipboard>
									</li>
									{currentUser.id === parseInt(user_id) && (
										<>
											<li className="px-3 py-2 hover:bg-gray-100 rounded-xl">
												<button
													className="flex space-x-2 text-gray-700 hover:text-green-500 text-md"
													onClick={handleEditModal}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-5 h-5"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
														/>
													</svg>
													<span>Edit Post</span>
												</button>
											</li>
											<li className="px-3 py-2 hover:bg-gray-100 rounded-xl">
												<button
													onClick={handleDeleteModal}
													className="flex space-x-2 text-gray-700 hover:text-red-500 text-md"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-5 h-5"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
														/>
													</svg>
													<span>Delete Post</span>
												</button>
											</li>
										</>
									)}
									<li className="px-3 py-2 hover:bg-gray-100 rounded-xl">
										<button className="flex space-x-2 text-gray-700 hover:text-yellow-500 text-md">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
												/>
											</svg>
											<span>Report Post</span>
										</button>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
				{text && (
					<div className="p-2 post_text">
						<p className="text-gray-600">{text}</p>
					</div>
				)}
				{images.length !== 0 && (
					<FeedImage
						images={images}
						posted_user={posted_user}
						text={text}
					/>
				)}
				<div className="flex justify-center space-x-4 post_actions">
					<LovePost post={post} isGuest={isGuest} />
					<div className="comments">
						<button
							className="flex p-3 space-x-4 text-center text-gray-500 border border-gray-200 rounded-xl justif-center hover:bg-green-400 hover:text-white"
							onClick={() =>
								setIsCommentClicked(!isCommentClicked)
							}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
								/>
							</svg>
							<span className="font-semibold">
								{commentsCount}
							</span>
						</button>
					</div>
				</div>
				{isCommentClicked && (
					<CommentContainer
						post={post}
						isGuest={isGuest}
						setCommentsCount={setCommentsCount}
						comment={comment}
					/>
				)}
			</div>
		</div>
	);
};

export default DawahSinglePost;
