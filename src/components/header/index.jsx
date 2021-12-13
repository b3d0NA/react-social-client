import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { ReactComponent as Logo } from "../../assets/images/sunnah_logo.svg";
import { useAppContext } from "../../contexts/AppContext";
import Notification from "./notification/Notification";
const Header = () => {
	const { setIsRightSidebarOpen, setIsLeftSidebarOpen, isMobile } =
		useAppContext();
	const [makeStickyHeader, setMakeStickyHeader] = useState(false);
	const stickyHeader = useRef();

	useEffect(() => {
		window.onscroll = () => {
			const { offsetTop } = stickyHeader.current;
			offsetTop - 10 <= window.scrollY
				? setMakeStickyHeader(true)
				: setMakeStickyHeader(false);
		};
	}, []);
	return (
		<div
			className={`bg-white flex flex-col h-20 items-center justify-between md:flex-row md:space-y-0" px-8 space-y-4 sticky top-0 z-10`}
		>
			<div className="logo_section pt-1.5 row-span-2">
				<Logo className="w-20 h-12"></Logo>
			</div>
			<div className="relative w-11/12 col-span-3 md:col-span-1 md:w-2/6 ml-14 search_section">
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
				className={`-top-5 bg-white col-span-4 ${
					isMobile &&
					makeStickyHeader &&
					"fixed justify-around p-3 w-full z-10"
				} flex  md:flex-row  profile_related_section space-x-10 items-center`}
			>
				<button
					className="left_sidebar_open md:hidden"
					onClick={() => setIsLeftSidebarOpen(true)}
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<Notification />
				<div className="h-12 -mt-4 bg-white w-14 image rounded-xl">
					<img
						src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
						alt="Muhammad Prottoy"
						className="object-cover object-top w-16 h-14 rounded-2xl"
					/>
				</div>
				<button
					className="left_sidebar_open md:hidden"
					onClick={() => setIsRightSidebarOpen(true)}
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Header;
