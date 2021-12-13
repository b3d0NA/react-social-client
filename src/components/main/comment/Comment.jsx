import React, { useEffect, useRef, useState } from "react";

const Comment = () => {
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
	return (
		<div className="flex px-3 py-3 space-x-3 md:space-x-4 comment bg-gray-50 rounded-xl">
			<div className="w-2/12 md:w-auto">
				<img
					src="https://muhammadprottoy.netlify.app/images/profile1.webp"
					alt="Muhammad Prottoy"
					className="object-cover h-10 w-14 md:w-12 md:h-12 rounded-2xl"
				/>
			</div>
			<div className="w-10/12 comment">
				<h2 className="text-xs font-light text-gray-500">@b3d0na</h2>
				<p className="text-sm text-gray-700 md:text-base">
					Kier baler pic disos eidi beda ... Vala kono pic tik thakle
					de.. :/ Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Error, ea consequatur porro quas repellendus cumque
					dignissimos, rerum omnis voluptate odit aspernatur placeat
					blanditiis eius doloribus quam hic sunt dolore beatae!
				</p>
				<span className="text-xs text-gray-400">12 minutes ago</span>

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
							"-translate-y-2/4 opacity-0 scale-0"
						}`}
					>
						<ul className="p-4 space-y-3 text-sm bg-gray-100 md:text-base rounded-xl">
							<li className="w-max">
								<button className="text-gray-700 hover:text-green-500">
									Edit Comment
								</button>
							</li>
							<li className="w-max">
								<button className="text-gray-700 hover:text-green-500">
									Delete Comment
								</button>
							</li>
							<li className="w-max">
								<button className="text-gray-700 hover:text-green-500">
									Report Comment
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
