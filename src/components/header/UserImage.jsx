import React from "react";

const UserImage = ({ image, username, loading }) => {
	return (
		<div className="flex flex-col items-center">
			{loading ? (
				<>
					<div className="w-10 h-10 bg-gray-200 md:h-12 md:-mt-4 md:w-14 image rounded-xl animate-pulse"></div>
					<span className="text-xs text-gray-200 transform translate-y-1 bg-gray-200 rounded-xl animate-pulse">
						@user_name
					</span>
				</>
			) : (
				<>
					<div className="w-10 h-10 bg-white md:h-12 md:-mt-4 md:w-14 image rounded-xl">
						<img
							src={image}
							alt={username + "s Profile Image"}
							className="object-cover object-top h-10 w-14 md:w-16 md:h-14 rounded-2xl"
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default UserImage;
