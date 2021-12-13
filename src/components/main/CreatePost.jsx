import React from "react";

const CreatePost = () => {
	return (
		<div className="flex p-3 space-x-5 bg-white md:p-5 create_post rounded-xl">
			<div className="profile_image">
				<img
					src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
					alt="Muhammad Prottoy"
					className="object-cover object-top w-12 h-12 rounded-2xl"
				/>
			</div>
			<div className="w-full input_post">
				<textarea
					name="text"
					cols="30"
					rows="2"
					className="w-full p-5 focus:outline-none focus:bg-gray-100 rounded-xl"
					placeholder="What's new found, Prottoy?"
					resize="false"
				></textarea>
				<button
					type="submit"
					className="flex float-right p-2 my-3 space-x-3 bg-green-400 md:p-3 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-xl"
				>
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
					<span className="font-semibold text-white">Post Now</span>
				</button>
			</div>
		</div>
	);
};

export default CreatePost;
