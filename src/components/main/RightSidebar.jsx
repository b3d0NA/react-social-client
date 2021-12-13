import React from "react";
import { useAppContext } from "../../contexts/AppContext";
const RightSidebar = () => {
	const { isRightSidebarOpen, setIsRightSidebarOpen, isMobile } =
		useAppContext();
	return (
		<>
			{isMobile ? (
				<div
					className={`absolute right-0 float-right w-10/12 p-3 transition ease-in-out transform ${
						!isRightSidebarOpen && "translate-x-full"
					} bg-white top-3 rounded-xl`}
				>
					<div className="flex justify-between w-full">
						<button
							onClick={() => setIsRightSidebarOpen(false)}
							className="px-3 py-1 text-3xl bg-gray-100 rounded-xl"
						>
							&times;
						</button>
						<h2 className="px-10 font-semibold text-gray-400 text-md">
							Contacts
						</h2>
						<span className="px-3 py-1 text-xs text-white bg-gray-400 h-1/2 contact_count rounded-xl">
							32
						</span>
					</div>
					<div className="p-3 my-5 space-y-4 bg-white contacts rounded-xl">
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
										alt="Muhammad Prottoy"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Muhammad Prottoy
									</h2>
									<p className="text-xs font-light text-gray-400">
										@b3d0na
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://i.pinimg.com/474x/52/fe/87/52fe873be054e7f8345c65281b02c63b.jpg"
										alt="Mirror Code"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Mirror Code
									</h2>
									<p className="text-xs font-light text-gray-400">
										@mirror_code
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://www.meme-arsenal.com/memes/774b99a3a704e01c9022cee263de2732.jpg"
										alt="Ajaira Polapain thabra thabri"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Ajaira Polapain
									</h2>
									<p className="text-xs font-light text-gray-400">
										@thabra_thabri
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://swall.teahub.io/photos/small/180-1801445_mind-blowing-anime-cool-boy-wallpaper-te-images.jpg"
										alt="Root Hunter"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Root Hunter
									</h2>
									<p className="text-xs font-light text-gray-400">
										@r00t_hun13r
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://wallpapercave.com/wp/wp6627001.jpg"
										alt="Chiki Chiki"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="relative w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Chiki Chiki
									</h2>
									<p className="text-xs font-light text-gray-400">
										@chiki124
									</p>
									<span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full top-1 right-3">
										3
									</span>
								</div>
							</div>
						</button>
					</div>
				</div>
			) : (
				<div className="w-3/12">
					<div className="flex justify-between w-full">
						<h2 className="px-10 font-semibold text-gray-400 text-md">
							Contacts
						</h2>
						<span className="px-3 py-1 text-xs text-white bg-gray-400 contact_count rounded-xl">
							32
						</span>
					</div>
					<div className="p-3 my-5 space-y-4 bg-white contacts rounded-xl">
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://iphoneswallpapers.com/wp-content/uploads/2021/06/Anime-Boy-Masked.jpg"
										alt="Muhammad Prottoy"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Muhammad Prottoy
									</h2>
									<p className="text-xs font-light text-gray-400">
										@b3d0na
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/429ed5e1-cf76-4307-b77a-d0cdf9683533/dec55ir-ec0eb40c-a230-4f06-ae36-94e6d3b80b5e.jpg/v1/fill/w_670,h_1192,q_70,strp/anime_boy_by_tiszardinio_dec55ir-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQxNCIsInBhdGgiOiJcL2ZcLzQyOWVkNWUxLWNmNzYtNDMwNy1iNzdhLWQwY2RmOTY4MzUzM1wvZGVjNTVpci1lYzBlYjQwYy1hMjMwLTRmMDYtYWUzNi05NGU2ZDNiODBiNWUuanBnIiwid2lkdGgiOiI8PTc5NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4Qdj2GYYQo_nCsbPRAN_Nlw3ECt5FaloY768RKXsik4"
										alt="Mirror Code"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Mirror Code
									</h2>
									<p className="text-xs font-light text-gray-400">
										@mirror_code
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://www.meme-arsenal.com/memes/774b99a3a704e01c9022cee263de2732.jpg"
										alt="Ajaira Polapain thabra thabri"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Ajaira Polapain
									</h2>
									<p className="text-xs font-light text-gray-400">
										@thabra_thabri
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://swall.teahub.io/photos/small/180-1801445_mind-blowing-anime-cool-boy-wallpaper-te-images.jpg"
										alt="Root Hunter"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Root Hunter
									</h2>
									<p className="text-xs font-light text-gray-400">
										@r00t_hun13r
									</p>
								</div>
							</div>
						</button>
						<button className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-xl">
							<div className="flex items-center space-x-4 contact">
								<div className="w-16 bg-white h-14 image rounded-xl">
									<img
										src="https://wallpapercave.com/wp/wp6627001.jpg"
										alt="Chiki Chiki"
										className="object-cover object-top w-16 h-14 rounded-2xl"
									/>
								</div>
								<div className="relative w-11/12">
									<h2 className="space-y-1 text-sm font-semibold text-gray-800">
										Chiki Chiki
									</h2>
									<p className="text-xs font-light text-gray-400">
										@chiki124
									</p>
									<span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full top-1 right-3">
										3
									</span>
								</div>
							</div>
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default RightSidebar;
