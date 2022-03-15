import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotificationAlert = () => {
	// const { data, actioned_at, type } = notification;
	// const { username, user_profile, post_id } = data;
	const [remove, setRemove] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setRemove(true);
		}, 4000);
	}, []);
	useEffect(() => {
		setRemove(false);
		console.log("I am mounted!");
	}, []);
	return (
		!remove && (
			<div
				className={`absolute p-3 bg-white hover:bg-gray-50 rounded-xl top-[4rem] md:-right-[100px] trnasform md:w-[300px] w-[200px] shadow-lg z-30 -right-[100px] ease-in-out ${
					remove
						? "transform translate-x-full"
						: "transform translate-x-0"
				}`}
			>
				<div className="absolute flex justify-end right-3">
					<button
						onClick={() => setRemove(true)}
						className="text-teal-500 hover:bg-teal-500 rounded-xl hover:text-white"
					>
						<svg
							className="w-6 h-6 rounded-full"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<Link to={`posts/3`} className="">
					<div className="flex space-x-4">
						<div className="w-2/12 h-12 bg-white image rounded-xl">
							<img
								src="http://127.0.0.1:8000/images/muslim.svg"
								alt="Prottoy"
								className="object-cover object-top w-12 h-12 rounded-2xl"
							/>
						</div>
						<div className="w-10/12 text-sm">
							<span className="font-light text-gray-500 ">
								@b3d0na
							</span>
							<p className="font-semibold text-gray-600">
								{/* {formatNotifications(type, data)} */}
								commented
							</p>
							<span className="pt-2 text-xs font-light text-gray-600">
								{/* {actioned_at} */}2 hours ago
							</span>
						</div>
					</div>
				</Link>
			</div>
		)
	);
};

export default NotificationAlert;
