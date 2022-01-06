import React from "react";
import Skeleton from "../../Skeleton";

const CommentSkeleton = () => {
	return (
		<div className="flex px-3 py-3 space-x-3 md:space-x-4 comment">
			<div className="w-2/12 md:w-auto">
				<Skeleton w="w-12" h="h-12" />
			</div>
			<div className="w-10/12 px-4 py-4 space-y-4 comment bg-gray-50 rounded-xl">
				<Skeleton w="w-32" h="h-4" />
				<Skeleton h="h-12" />
			</div>
		</div>
	);
};

export default CommentSkeleton;
