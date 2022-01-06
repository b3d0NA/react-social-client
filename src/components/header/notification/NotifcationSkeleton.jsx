import React from "react";
import Skeleton from "../../Skeleton";
const NotifcationSkeleton = () => {
	return (
		<li>
			<div className="flex p-1 space-x-4">
				<div className="w-12 h-12 bg-white image rounded-xl">
					<Skeleton w="w-14" h="h-14" />
				</div>
				<div className="w-full text-sm">
					<Skeleton w="w-20" h="h-4" />
					<Skeleton h="h-4" />
					<Skeleton w="w-24" h="h-4" />
				</div>
			</div>
		</li>
	);
};

export default NotifcationSkeleton;
