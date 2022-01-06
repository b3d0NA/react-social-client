import React from "react";
import { Link } from "react-router-dom";

const Notification = ({ notification }) => {
	const { data, liked_at, type } = notification;
	const { username, user_profile, post_id } = data;
	return (
		<li>
			<Link
				to={`posts/${post_id}`}
				className="block p-3 hover:bg-gray-50 rounded-xl"
			>
				<div className="flex space-x-4">
					<div className="w-12 h-12 bg-white image rounded-xl">
						<img
							src={user_profile}
							alt={username}
							className="object-cover object-top w-12 h-12 rounded-2xl"
						/>
					</div>
					<div className="text-sm">
						<span className="font-light text-gray-500 ">
							@{username}
						</span>
						<p className="font-semibold text-gray-600">
							{type.includes("LikedNotification") &&
								"loved your photo"}
						</p>
						<span className="pt-2 text-xs font-light text-gray-600">
							{liked_at}
						</span>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default Notification;
