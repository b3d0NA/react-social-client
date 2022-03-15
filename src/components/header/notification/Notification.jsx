import React from "react";
import { Link } from "react-router-dom";
import formatNotifications from "../../../helpers/formatNotifications";

const Notification = ({ notification, setIsNotificationOpen }) => {
	const { data, actioned_at, type } = notification;
	const { username, user_profile, post_id, post_image, post_text } = data;
	return (
		<li>
			<Link
				to={`/posts/${post_id}`}
				replace
				{...(type.includes("CommentNotification") && {
					state: { comment: data },
				})}
				className="block p-3 hover:bg-gray-50 rounded-xl"
			>
				<div
					onClick={() => setIsNotificationOpen(false)}
					className="flex space-x-4"
				>
					<div className="w-2/12 h-12 bg-white image rounded-xl">
						<img
							src={user_profile}
							alt={username}
							className="object-cover object-top w-12 h-12 rounded-2xl"
						/>
					</div>
					<div className="w-8/12 text-sm">
						<span className="font-light text-gray-500 ">
							@{username}
						</span>
						<p className="font-semibold text-gray-600">
							{formatNotifications(type, data)}
						</p>
						<span className="pt-2 text-xs font-light text-gray-600">
							{actioned_at}
						</span>
					</div>
					{post_image && (
						<div className="w-2/12 h-12 bg-white image rounded-xl">
							<img
								src={post_image}
								alt={post_text}
								className="object-cover object-top w-12 h-12 rounded-2xl"
							/>
						</div>
					)}
				</div>
			</Link>
		</li>
	);
};

export default Notification;
