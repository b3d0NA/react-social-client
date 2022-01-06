import React from "react";

const Skeleton = ({ w = "w-full", h = "h-6", bg = "bg-gray-200" }) => {
	return (
		<div
			className={`${w} ${h} ${bg} animate-pulse select-none rounded-xl my-1 transition duration-300`}
		></div>
	);
};

export default Skeleton;
