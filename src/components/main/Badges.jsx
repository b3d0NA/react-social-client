const Badges = ({ text, className = null }) => {
	return (
		<span
			className={`px-2 py-1 text-xs text-gray-800 bg-teal-100 rounded-xl ${className}`}
		>
			{text}
		</span>
	);
};

export default Badges;
