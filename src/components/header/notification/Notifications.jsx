import React, { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react/cjs/react.development";
import { useAuthContext } from "../../../contexts/AuthContext";
import sunnah from "../../../helpers/axios";
import useInfiniteNotifications from "../../../hooks/useInfiniteNotifications";
import NotifcationSkeleton from "./NotifcationSkeleton";
import Notification from "./Notification";
const Notifications = ({ loading }) => {
	const NOTFICATION_THRESHOLD = 99;
	const { currentUser } = useAuthContext();
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const [cursor, setCursor] = useState(null);

	const [notificationCount, setNotificationCount] = useState(null);
	// const [isNotiLoading, setIsNotiLoading] = useState(true);
	const { notifications, isLoading, error, hasMore, data } =
		useInfiniteNotifications(cursor, isNotificationOpen);
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

	useEffect(() => {
		if (!loading) {
			window.Echo.private(`App.User.${currentUser.id}`).notification(
				(data) => {
					console.log(data);
				}
			);
		}
	}, [currentUser, loading]);

	useEffect(() => {
		sunnah.get("notificationsCount").then(({ data }) => {
			if (data.hasOwnProperty("status") && data.status === 200) {
				const { notificationsCount } = data;
				setNotificationCount(notificationsCount);
			}
		});
	}, []);
	return (
		<div className="relative mt-3 mr-14 notific">
			{loading ? (
				<span className="absolute px-2 py-1 text-xs text-red-500 bg-red-500 rounded-full cursor-pointer animate-pulse -top-2 left-3">
					{NOTFICATION_THRESHOLD}
				</span>
			) : (
				<span
					className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full cursor-pointer -top-2 left-3"
					onClick={() => setIsNotificationOpen(!isNotificationOpen)}
				>
					{notificationCount >= NOTFICATION_THRESHOLD
						? NOTFICATION_THRESHOLD + "+"
						: notificationCount}
				</span>
			)}

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
				className={`absolute z-10 md:right-0 p-2 transition transform duration-200 ease-in-out ${
					!isNotificationOpen
						? "-translate-y-2/4 translate-x-2/4 opacity-0 scale-0"
						: "-translate-x-1/2 md:translate-x-0"
				} overflow-auto bg-white border border-green-200 shadow-xl notification_details rounded-xl w-80 h-[480px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 notifications`}
			>
				<ul>
					{isLoading || error || notifications.length === 0 ? (
						<>
							<NotifcationSkeleton />
							<NotifcationSkeleton />
							<NotifcationSkeleton />
						</>
					) : (
						<InfiniteScroll
							dataLength={notifications.length}
							hasMore={hasMore}
							next={() => {
								setCursor(data.cursor);
							}}
							loader={
								<>
									<NotifcationSkeleton />
								</>
							}
						>
							{notifications.map((notification, i) => {
								return (
									<Notification
										key={notification.id}
										notification={notification}
									/>
								);
							})}
						</InfiniteScroll>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Notifications;
