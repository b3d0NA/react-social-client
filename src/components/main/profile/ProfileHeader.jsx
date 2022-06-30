import React from "react";

const ProfileHeader = ({ muslim }) => {
	const { profile, name, username } = muslim;
	return (
		<div className="relative w-full px-5 py-20 text-center bg-opacity-50 rounded-lg h-fit bg-gradient-to-tr from-lime-100 to-indigo-100 profile-image-container">
			<h2 className="text-transparent font-gruffly text-8xl bg-clip-text bg-gradient-to-r from-teal-400 to-lime-500">
				{name}
			</h2>
			<div className="absolute flex flex-col items-center justify-center w-full p-3 -bottom-40">
				<div className="w-56 border border-teal-300 rounded-full shadow-md profileImage bg-gradient-to-b from-slate-100 to-lime-100">
					<img
						src={profile}
						alt={name + "s Profile"}
						className="object-cover object-top h-56 m-auto w-52 rounded-2xl"
					/>
				</div>
				<div className="muslimInfo text-md">
					<h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
						{name}
					</h2>
					<p className="text-sm font-light text-center text-gray-500">
						@{username}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
