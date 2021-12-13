import React from "react";
import { useAppContext } from "../../contexts/AppContext";

const LeftSidebar = () => {
	const { isLeftSidebarOpen, setIsLeftSidebarOpen, isMobile } =
		useAppContext();
	return (
		<>
			{isMobile ? (
				<div
					className={`absolute left-0 z-10 w-10/12 p-2 transition ease-in-out transform ${
						!isLeftSidebarOpen && "-translate-x-full"
					} bg-white top-3 rounded-xl`}
				>
					<button
						className="inline-block float-right px-3 py-1 text-3xl bg-gray-100 rounded-xl"
						onClick={() => setIsLeftSidebarOpen(false)}
					>
						&times;
					</button>
					<div className="flex items-center justify-center p-3 space-x-5 bg-white user_summary rounded-2xl">
						<div className="left_summary">
							<img
								src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
								alt="Muhammad Prottoy"
								className="object-cover object-top w-16 h-16 rounded-2xl"
							/>
						</div>
						<div className="right_summary text-md">
							<h2 className="font-bold text-gray-700">
								Muhammad Prottoy
							</h2>
							<p className="text-sm font-light text-gray-500">
								@b3d0na
							</p>
						</div>
					</div>
					<div className="p-3 my-3 bg-white navigation rounded-xl">
						<ul>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										className="w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Home
									</span>
								</button>
							</li>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										aria-hidden="true"
										focusable="false"
										className="w-6 h-6 text-gray-400"
										role="img"
										viewBox="0 0 640 512"
									>
										<path
											fill="currentColor"
											d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
										></path>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Muslims
									</span>
								</button>
							</li>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										aria-hidden="true"
										focusable="false"
										className="w-6 h-6 text-gray-400"
										role="img"
										viewBox="0 0 448 512"
									>
										<path
											fill="currentColor"
											d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
										></path>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Dawah Feed
									</span>
								</button>
							</li>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										aria-hidden="true"
										focusable="false"
										className="w-6 h-6 text-gray-400"
										role="img"
										viewBox="0 0 448 512"
									>
										<path
											fill="currentColor"
											d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
										></path>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Profile
									</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<div className="w-3/12">
					<div className="flex items-center justify-center p-5 space-x-5 bg-white user_summary rounded-2xl">
						<div className="left_summary">
							<img
								src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
								alt="Muhammad Prottoy"
								className="object-cover object-top w-16 h-16 rounded-2xl"
							/>
						</div>
						<div className="right_summary text-md">
							<h2 className="font-bold text-gray-700">
								Muhammad Prottoy
							</h2>
							<p className="text-sm font-light text-gray-500">
								@b3d0na
							</p>
						</div>
					</div>
					<div className="p-8 my-8 bg-white navigation rounded-xl">
						<ul>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										className="w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Home
									</span>
								</button>
							</li>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										aria-hidden="true"
										focusable="false"
										className="w-6 h-6 text-gray-400"
										role="img"
										viewBox="0 0 640 512"
									>
										<path
											fill="currentColor"
											d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
										></path>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Muslims
									</span>
								</button>
							</li>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										aria-hidden="true"
										focusable="false"
										className="w-6 h-6 text-gray-400"
										role="img"
										viewBox="0 0 448 512"
									>
										<path
											fill="currentColor"
											d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
										></path>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Dawah Feed
									</span>
								</button>
							</li>
							<li className="pb-2">
								<button className="flex w-full px-4 py-4 space-x-5 hover:bg-gray-50 rounded-xl">
									<svg
										aria-hidden="true"
										focusable="false"
										className="w-6 h-6 text-gray-400"
										role="img"
										viewBox="0 0 448 512"
									>
										<path
											fill="currentColor"
											d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
										></path>
									</svg>
									<span className="font-semibold text-gray-600 hover:text-green-300">
										Profile
									</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default LeftSidebar;
