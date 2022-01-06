import React from "react";
import Skeleton from "../../Skeleton";
const PostSkeleton = () => {
	return (
		<div className="p-5 my-5 bg-white rounded-xl">
			<div className="flex flex-col space-y-5 post">
				<div className="flex items-center justify-between post-header">
					<div className="flex items-center space-x-4 post_header_left">
						<Skeleton w="w-12" h="h-12" />
						<div className="user_info">
							<Skeleton w="w-44" h="h-5" />
							<Skeleton w="w-32" h="h-4" />
						</div>
					</div>
					<div className="relative post_options">
						<Skeleton w="w-10" h="h-6" />
					</div>
				</div>
				<div className="p-2 space-y-3 post_text">
					<Skeleton w="w-96" h="h-4" />
					<Skeleton w="w-64" h="h-4" />
					<Skeleton w="w-80" h="h-4" />
					<Skeleton w="w-full" h="h-4" />
				</div>
				<div className="flex flex-row justify-between post_images">
					<Skeleton w="w-full" h="h-80" />
				</div>
				<div className="flex justify-center space-x-4 post_actions">
					<div className="love">
						<button className="flex p-3 space-x-4 text-center text-gray-500 border border-gray-200 md:p-3 rounded-xl justif-center hover:bg-green-400 hover:text-white">
							<Skeleton w="w-6" h="h-6" />
							<Skeleton w="w-8" h="h-6" />
						</button>
					</div>
					<div className="love">
						<button className="flex p-3 space-x-4 text-center text-gray-500 border border-gray-200 md:p-3 rounded-xl justif-center hover:bg-green-400 hover:text-white">
							<Skeleton w="w-6" h="h-6" />
							<Skeleton w="w-8" h="h-6" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostSkeleton;
