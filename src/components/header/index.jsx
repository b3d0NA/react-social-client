import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { ReactComponent as Logo } from "../../assets/images/sunnah_logo.svg";
import { useAppContext } from "../../contexts/AppContext";
import { useAuthContext } from "../../contexts/AuthContext";
import sunnah from "../../helpers/axios";
import Notifications from "./notification/Notifications";
import UserImage from "./UserImage";
const Header = ({ userLoading: loading }) => {
	const { setUser, currentUser: user } = useAuthContext();
	const { setIsRightSidebarOpen, setIsLeftSidebarOpen, isMobile } =
		useAppContext();
	const [makeStickyHeader, setMakeStickyHeader] = useState(false);
	const stickyHeader = useRef();

	const handleSidebar = (e) => {
		const coordsOfEvent = e.target.getBoundingClientRect();
		const bottom = coordsOfEvent.bottom + 30;
		if (e.target.tagName === "path") {
			e.target.parentNode.classList.contains("left_sidebar_open") &&
				setIsLeftSidebarOpen({ open: true, bottom });
			e.target.parentNode.classList.contains("right_sidebar_open") &&
				setIsRightSidebarOpen({ open: true, bottom });
		} else if (
			e.target.tagName === "button" ||
			e.target.tagName === "svg"
		) {
			e.target.classList.contains("left_sidebar_open") &&
				setIsLeftSidebarOpen({ open: true, bottom });
			e.target.classList.contains("right_sidebar_open") &&
				setIsRightSidebarOpen({ open: true, bottom });
		}
	};

	const logout = (e) => {
		e.preventDefault();
		sunnah
			.post("logout")
			.then(() => {
				localStorage.removeItem("AUTH_TOKEN");
			})
			.catch(() => {
				localStorage.removeItem("AUTH_TOKEN");
			});
		setUser();
		localStorage.removeItem("AUTH_USERNAME");
		<Navigate to="/login" replace />;
	};

	useEffect(() => {
		window.onscroll = () => {
			if (125 <= window.scrollY) {
				setMakeStickyHeader(true);
			} else {
				setMakeStickyHeader(false);
			}
		};
	}, [isMobile, makeStickyHeader]);
	return (
		<div
			className={`bg-white flex flex-col md:h-20 items-center justify-between md:flex-row md:space-y-0" px-8 space-y-4 md:sticky top-0 z-40`}
		>
			<div className="logo_section pt-1.5 row-span-2">
				<Link to={`/`}>
					<Logo className="w-20 h-12"></Logo>
				</Link>
			</div>
			<div className="relative col-span-3 md:col-span-1 md:w-2/6 md:ml-14 search_section">
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					className="absolute h-5 text-gray-400 left-3 top-2"
				>
					<path
						fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd"
					/>
				</svg>
				<input
					type="search"
					name="search"
					placeholder="Search muslims"
					className="w-full px-4 py-2 pl-10 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-green-200 focus:ring-2"
				/>
			</div>
			<div
				ref={stickyHeader}
				className={`-top-5 ${
					isMobile &&
					makeStickyHeader &&
					"fixed justify-center p-3 w-full z-10 border-b border-green-300 shadow-xl"
				} bg-white col-span-4  flex  md:flex-row  profile_related_section space-x-10 items-center`}
			>
				<button
					className="left_sidebar_open md:hidden"
					onClick={handleSidebar}
				>
					<svg
						className="w-6 h-6 text-gray-500 left_sidebar_open"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<Notifications {...user} loading={loading} />
				<UserImage {...user} loading={loading} />
				<button
					onClick={logout}
					title="Logout"
					className="text-gray-500 hover:text-gray-700"
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
							d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
						/>
					</svg>
				</button>
				<button
					className="right_sidebar_open md:hidden"
					onClick={handleSidebar}
				>
					<svg
						className="w-6 h-6 text-gray-500 right_sidebar_open"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Header;
