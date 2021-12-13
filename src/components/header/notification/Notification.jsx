import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
const Notification = () => {
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const notificationRef = useRef();
	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
		function handleClick(e) {
			if (notificationRef && notificationRef.current) {
				const ref = notificationRef.current;
				if (!ref.contains(e.target) && isNotificationOpen) {
					setIsNotificationOpen(false);
				}
			}
		}
	}, [isNotificationOpen]);
	return (
		<div className="relative mt-3 mr-14 notific">
			<span
				className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full cursor-pointer -top-2 left-3"
				onClick={() => setIsNotificationOpen(!isNotificationOpen)}
			>
				3
			</span>
			<button
				className=""
				onClick={() => setIsNotificationOpen(!isNotificationOpen)}
			>
				<svg
					className="w-6 h-6 text-gray-500 hover:text-gray-700"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
			</button>
			<div
				ref={notificationRef}
				className={`absolute right-0 p-2 transition transform duration-200 ease-in-out ${
					!isNotificationOpen &&
					"-translate-y-2/4 translate-x-2/4 opacity-0 scale-0"
				} overflow-auto bg-white border border-green-200 shadow-xl notification_details rounded-xl w-80`}
			>
				<ul>
					<li>
						<Link
							to="#"
							className="block p-3 hover:bg-gray-50 rounded-xl"
						>
							<div className="flex space-x-4">
								<div className="w-12 h-12 bg-white image rounded-xl">
									<img
										src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
										alt="Muhammad Prottoy"
										className="object-cover object-top w-12 h-12 rounded-2xl"
									/>
								</div>
								<div className="text-sm">
									<span className="font-light text-gray-500 ">
										@b3dona
									</span>
									<p className="font-semibold text-gray-600">
										loved you profile photo
									</p>
									<span className="pt-2 text-xs font-light text-gray-600">
										2 hours ago
									</span>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to="#"
							className="block p-3 hover:bg-gray-50 rounded-xl"
						>
							<div className="flex space-x-4">
								<div className="w-12 bg-white h-14 image rounded-xl">
									<img
										src="https://i.pinimg.com/474x/52/fe/87/52fe873be054e7f8345c65281b02c63b.jpg"
										alt="Muhammad Prottoy"
										className="object-cover object-top w-12 h-12 rounded-2xl"
									/>
								</div>
								<div className="text-sm">
									<span className="font-light text-gray-500 ">
										@mirror_code
									</span>
									<p className="font-semibold text-gray-600">
										loved you profile photo
									</p>
									<span className="pt-2 text-xs font-light text-gray-600">
										4 hours ago
									</span>
								</div>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Notification;
