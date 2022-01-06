import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
const Comment = ({ singleComment }) => {
	const {
		user_id,
		commented_user,
		commented_username,
		text: comment,
		user_profile,
		commented_at,
	} = singleComment;

	const { currentUser } = useAuthContext();

	const commentClone = _.cloneWith(singleComment);
	commentClone.path = "comments";

	const [isCommentOptionOpen, setIsCommentOptionOpen] = useState(false);
	const commentOptionRef = useRef();

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
		function handleClick(e) {
			if (commentOptionRef && commentOptionRef.current) {
				const ref = commentOptionRef.current;
				if (!ref.contains(e.target) && isCommentOptionOpen) {
					setIsCommentOptionOpen(false);
				}
			}
		}
	}, [isCommentOptionOpen]);

	function handleEditModal() {
		const postEditEvent = new CustomEvent("openEditModal", {
			detail: {
				data: commentClone,
			},
		});
		document.dispatchEvent(postEditEvent);
		setIsCommentOptionOpen(false);
	}

	function handleDeleteModal() {
		const postDeleteEvent = new CustomEvent("openDeleteModal", {
			detail: {
				data: commentClone,
			},
		});
		document.dispatchEvent(postDeleteEvent);
		setIsCommentOptionOpen(false);
	}

	return (
		<div className="flex px-3 py-3 space-x-3 md:space-x-4 comment">
			<div className="w-2/12 md:w-auto">
				<img
					src={user_profile}
					alt={commented_user}
					className="object-cover h-10 w-14 md:w-12 md:h-12 rounded-2xl"
				/>
			</div>
			<div className="w-10/12 px-4 py-4 comment bg-gray-50 rounded-xl">
				<h2 className="mb-3 text-xs font-semibold text-gray-500">
					{commented_username}
				</h2>
				<p className="text-sm text-gray-700 md:text-base">{comment}</p>
				<span className="text-xs text-gray-400">{commented_at}</span>

				<div className="relative float-right comment_options">
					<button
						onClick={() =>
							setIsCommentOptionOpen(!isCommentOptionOpen)
						}
						className="px-2 border border-gray-300 rounded-xl hover:border-green-500 focus:ring-2 focus:outline-none focus:ring-gray-300"
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
						ref={commentOptionRef}
						className={`absolute top-8 -right-1/2 w-max options transition transform duration-200 ease-in-out ${
							!isCommentOptionOpen &&
							"-translate-y-2/4 translate-x-1/4 opacity-0 scale-0"
						}`}
					>
						<ul className="inline-flex px-2 py-2 text-sm bg-gray-300 bg-opacity-25 shadow-xl md:text-base rounded-xl">
							{currentUser.id === parseInt(user_id) && (
								<>
									<li className="px-3 py-2 hover:bg-green-50 rounded-xl">
										<button
											title="Edit Comment"
											className="flex space-x-2 text-sm text-gray-700 hover:text-green-500"
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
										</button>
									</li>
									<li className="px-3 py-2 hover:bg-red-50 rounded-xl">
										<button
											title="Delete Comment"
											onClick={handleDeleteModal}
											className="flex space-x-2 text-sm text-gray-700 hover:text-red-500"
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
										</button>
									</li>
								</>
							)}
							<li className="px-3 py-2 hover:bg-yellow-50 rounded-xl">
								<button
									title="Report Comment"
									className="flex space-x-2 text-sm text-gray-700 hover:text-yellow-500"
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
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
