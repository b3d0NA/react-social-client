import React, { useEffect, useRef, useState } from "react";
import CommentContainer from "./comment";

const DawahSinglePost = () => {
	const [isPostOptionOpen, setIsPostOptionOpen] = useState(false);
	const [isCommentClicked, setIsCommentClicked] = useState(false);
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
	return (
		<div className="p-5 my-5 bg-white rounded-xl">
			<div className="flex flex-col space-y-5 post">
				<div className="flex items-center justify-between post-header">
					<div className="flex items-center space-x-4 post_header_left">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YuGPMIsQUH1YB_MPVCz4QU17K_x-NaXuSGNhBwXOm75faYwbT8sviZBo-BGZAQN1GJM&usqp=CAU"
							alt="Posted username"
							className="object-cover w-12 h-12 rounded-2xl"
						/>
						<div className="user_info">
							<h2 className="font-semibold text-gray-700 text-md">
								Mirror Code
							</h2>
							<p className="text-xs font-light text-gray-400">
								12 hours ago
							</p>
						</div>
					</div>
					<div className="relative post_options">
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
							className={`absolute transition duration-200 ease-in-out transform -right-1/2 ${
								!isPostOptionOpen &&
								"-translate-y-2/4 opacity-0 scale-0"
							} options top-8 w-max`}
						>
							<ul className="p-4 space-y-3 text-sm bg-gray-100 rounded-xl md:text-base">
								<li className="w-max">
									<button className="text-gray-700 hover:text-green-500">
										Edit Post
									</button>
								</li>
								<li className="w-max">
									<button className="text-gray-700 hover:text-green-500">
										Delete Post
									</button>
								</li>
								<li className="w-max">
									<button className="text-gray-700 hover:text-green-500">
										Report Post
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="p-2 post_text">
					<p className="text-gray-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Voluptates id illo inventore placeat temporibus
						iure soluta earum quaerat ipsa, impedit culpa autem,
						nisi consequatur saepe! Ab eius ea modi quibusdam?
					</p>
				</div>
				<div className="flex flex-row justify-between post_images">
					<div className="flex flex-col w-1/2 space-x-2 space-y-2">
						<img
							src="https://i.pinimg.com/736x/28/d3/83/28d3837232911297b40210071de67297--storyboard-character-inspiration.jpg"
							alt="This is a test"
							className="rounded-lg h-100"
						/>
						<img
							src="https://i.pinimg.com/736x/11/0d/0b/110d0b350ff7d7e6f9b40dfcfd58f7a2.jpg"
							alt="This is a test"
							className="rounded-lg h-100"
						/>
					</div>
					<div className="flex flex-col w-1/2 pl-2 space-y-2">
						<img
							src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
							alt="This is a test"
							className="rounded-lg h-100"
						/>
						<img
							src="https://i.pinimg.com/474x/1c/17/70/1c1770103240e855a476f9ecbb03fc46.jpg"
							alt="This is a test"
							className="rounded-lg h-100"
						/>
					</div>
				</div>
				<div className="flex justify-center space-x-4 post_actions">
					<div className="love">
						<button className="flex p-3 space-x-4 text-center text-gray-500 border border-gray-200 md:p-5 rounded-xl justif-center hover:bg-green-400 hover:text-white">
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
							<span className="font-semibold">32K</span>
						</button>
					</div>
					<div className="love">
						<button
							className="flex p-3 space-x-4 text-center text-gray-500 border border-gray-200 md:p-5 rounded-xl justif-center hover:bg-green-400 hover:text-white"
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
							<span className="font-semibold">13</span>
						</button>
					</div>
				</div>
				<CommentContainer isCommentClicked={isCommentClicked} />
			</div>
		</div>
	);
};

export default DawahSinglePost;
