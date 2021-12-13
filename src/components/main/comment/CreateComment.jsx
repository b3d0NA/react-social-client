import React from "react";

const CreateComment = () => {
	return (
		<div className="flex py-5 space-x-4 border-t border-gray-100 create_comment">
			<div className="profile_image">
				<div className="w-12 bg-white h-14 image rounded-xl">
					<img
						src="https://wallpapercave.com/wp/wp6627001.jpg"
						alt="Chiki Chiki"
						className="object-cover object-top w-12 h-14 rounded-2xl"
					/>
				</div>
			</div>
			<div className="w-full input_comment">
				<textarea
					name="text"
					cols="30"
					rows="1"
					className="w-full p-5 focus:outline-none focus:bg-green-50 rounded-xl"
					placeholder="Write your comment here..."
					resize="false"
				></textarea>
				<button
					type="submit"
					className="flex float-right p-2 space-x-2 text-sm bg-green-400 md:my-1 md:p-3 md:space-x-3 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-xl md:text-base"
				>
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
					<span className="font-semibold text-white">Comment</span>
				</button>
			</div>
		</div>
	);
};

export default CreateComment;
