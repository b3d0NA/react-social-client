import React from "react";
import { useState } from "react/cjs/react.development";
import sunnah from "../../../helpers/axios";
import formatNumber from "../../../helpers/formatNumber";
const LovePost = ({ post }) => {
	const { id, likes_count, liked } = post;
	const [isLiked, setIsLiked] = useState(liked);
	const [likesCount, setLikesCount] = useState(parseInt(likes_count));
	function handleLike() {
		setIsLiked(!liked);
		if (isLiked) {
			setLikesCount((prev) => parseInt(prev - 1));
			setIsLiked(false);
			sunnah
				.delete("likes/destroy", { data: { post: id } })
				.then(() => {
					setIsLiked(false);
				})
				.catch(() => {
					setIsLiked(true);
				});
		} else {
			setLikesCount((prev) => parseInt(prev + 1));
			setIsLiked(true);
			sunnah
				.post("likes", { post: id })
				.then(() => {
					setIsLiked(true);
				})
				.catch(() => {
					setIsLiked(false);
				});
		}
	}
	return (
		<div className="love">
			<button
				onClick={handleLike}
				className={`flex p-3 space-x-4 text-center text-gray-500 border ${
					!isLiked
						? "border-gray-200 hover:bg-green-400"
						: "border-green-300 hover:bg-green-200"
				} rounded-xl justif-center  hover:text-white`}
			>
				{isLiked ? (
					<svg
						className="w-6 h-6 text-green-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<svg
						aria-hidden="true"
						focusable="false"
						className="w-6 h-6"
						role="img"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
						></path>
					</svg>
				)}
				<span className="font-semibold">
					{formatNumber(likesCount)}
				</span>
			</button>
		</div>
	);
};

export default LovePost;
