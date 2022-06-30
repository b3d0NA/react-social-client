import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const UserImage = ({ id, image, username, loading }) => {
	const [isProfileOptionOpen, setIsProfileOptionOpen] = useState();

	const profileOptionRef = useRef();

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
		function handleClick(e) {
			if (profileOptionRef && profileOptionRef.current) {
				const ref = profileOptionRef.current;
				if (!ref.contains(e.target) && isProfileOptionOpen) {
					setIsProfileOptionOpen(false);
				}
			}
		}
	}, [isProfileOptionOpen, setIsProfileOptionOpen]);

	return (
		<div className="flex flex-col items-center ">
			{loading ? (
				<>
					<div className="w-10 h-10 bg-gray-200 md:h-12 md:-mt-4 md:w-14 image rounded-xl animate-pulse"></div>
					<span className="text-xs text-gray-200 transform translate-y-1 bg-gray-200 rounded-xl animate-pulse">
						@user_name
					</span>
				</>
			) : (
				<div
					onClick={() => setIsProfileOptionOpen(!isProfileOptionOpen)}
					className="relative cursor-pointer"
				>
					<div className="w-10 h-10 transition ease-in-out bg-white md:h-14 md:-mt-4 md:w-14 image rounded-xl hover:border hover:border-teal-500">
						<img
							src={image}
							alt={username + "s Profile Image"}
							className="object-cover object-top h-10 w-14 md:w-16 md:h-14 rounded-2xl"
						/>
					</div>
					<div
						className={`absolute z-10 md:right-0 md:-left-[100px] p-2 transition transform duration-200 ease-in-out ${
							!isProfileOptionOpen
								? "-translate-y-2/4 md:translate-x-2/4 translate-x-0 opacity-0 scale-0"
								: "-translate-x-1/2 md:translate-x-0"
						} overflow-auto bg-white shadow-xl notification_details rounded-xl w-52 h-fit max-h-[500px] scrollbar left-20 top-14`}
						ref={profileOptionRef}
					>
						<Link to={`/muslims/${id}`}>
							<div className="flex w-full px-4 py-4 space-x-3 text-md hover:bg-gray-50 rounded-xl">
								<svg
									aria-hidden="true"
									focusable="false"
									className="w-6 h-6 text-gray-700"
									role="img"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
									></path>
								</svg>
								<span className="font-light text-gray-600 hover:text-green-300">
									Profile
								</span>
							</div>
						</Link>
						<Link to="/settings/profile">
							<div className="flex w-full px-4 py-4 space-x-3 text-md hover:bg-gray-50 rounded-xl">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 text-gray-700"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span className="font-light text-gray-600 hover:text-green-300">
									Settings
								</span>
							</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserImage;
