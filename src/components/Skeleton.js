const Skeleton = ({
	w = "w-full",
	h = "h-6",
	bg = "bg-gray-200",
	rounded = "",
	className = "",
}) => {
	return (
		<div
			className={`${w} ${h} ${bg} ${rounded} animate-pulse select-none rounded-xl my-1 transition duration-300 ${className}`}
		></div>
	);
};

export default Skeleton;
