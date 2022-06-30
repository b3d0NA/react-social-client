import Skeleton from "../../Skeleton";

const ProfileHeaderSkeleton = () => {
	return (
		<>
			<Skeleton
				w="w-full"
				h="h-56"
				rounded="rounded-2xl"
				bg="bg-slate-200"
			/>
			<div className="flex flex-col items-center justify-center -mt-10 profile-image-container">
				<div className="flex justify-center w-full m-auto profileImage">
					<Skeleton
						w="w-52"
						h="h-52"
						rounded="rounded-full"
						className="border border-gray-300 "
					/>
				</div>
				<div className="muslimInfo text-md">
					<Skeleton w="w-48" />
					<Skeleton w="w-28" h="h-4" />
				</div>
			</div>
		</>
	);
};

export default ProfileHeaderSkeleton;
