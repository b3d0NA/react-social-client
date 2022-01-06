import React from "react";
import { useState } from "react/cjs/react.development";
import { useAuthContext } from "../../../contexts/AuthContext";
import sunnah from "../../../helpers/axios";
import Error from "../../messages/Error";

const CreateComment = ({ setCommentsCount, post, setComments }) => {
	const { currentUser } = useAuthContext();
	const [comment, setComment] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	function handleCommentSubmit() {
		setLoading(true);
		sunnah
			.post(`posts/${post.id}/comments`, { comment })
			.then(({ data }) => {
				const { comment } = data;
				setComment("");
				setLoading(false);
				setCommentsCount((prev) => prev + 1);
				setComments((prevComments) => [comment, ...prevComments]);
			})
			.catch((err) => {
				setLoading(false);
				setError("Somethign wrong happend. Try again later");
			});
	}
	return (
		<div className="flex pt-5 space-x-4 border-t border-gray-100 create_comment">
			<div className="profile_image">
				<div className="w-12 bg-white h-14 image rounded-xl">
					<img
						src={currentUser.image}
						alt={currentUser.name}
						className="object-cover object-top w-12 h-14 rounded-2xl"
					/>
				</div>
			</div>
			<div className="relative w-full input_comment">
				{error && <Error message={error} />}
				<textarea
					name="text"
					cols="30"
					rows="2"
					className="w-full p-5 focus:outline-none focus:bg-green-50 rounded-xl"
					placeholder="Write your comment here..."
					resize="false"
					onChange={(e) => setComment(e.target.value)}
					value={comment}
				></textarea>
				<button
					onClick={handleCommentSubmit}
					disabled={loading}
					type="submit"
					className="absolute flex float-right p-2 space-x-2 text-sm bg-green-400 bottom-3 right-3 md:my-1 md:p-3 md:space-x-3 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-xl md:text-base"
				>
					{loading ? (
						<svg
							viewBox="0 0 100 100"
							preserveAspectRatio="xMidYMid"
							className={`w-6 h-6 animate-spin`}
						>
							<circle
								cx="50"
								cy="50"
								fill="none"
								stroke="#ffffff"
								strokeWidth="10"
								r="35"
								strokeDasharray="164.93361431346415 56.97787143782138"
								transform="matrix(1,0,0,1,0,0)"
							></circle>
						</svg>
					) : (
						<svg
							className="h-4 text-white md:w-6 md:h-6"
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
					)}
				</button>
			</div>
		</div>
	);
};

export default CreateComment;
