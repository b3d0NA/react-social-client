import React from "react";

const FeedImage = ({ images, posted_user, text }) => {
	function getSpanEstimate(size) {
		if (size > 250) {
			return 2;
		}

		return 1;
	}
	return (
		<div className="grid justify-between grid-flow-col-dense grid-cols-2 gap-x-3 gap-y-3 post_images">
			{images.map((image) => {
				return (
					<img
						key={image}
						onLoad={(e) => {
							e.target.style.gridColumnEnd = `span ${getSpanEstimate(
								e.target.width
							)}`;
							e.target.style.gridRowEnd = `span ${getSpanEstimate(
								e.target.width
							)}`;
						}}
						src={image}
						alt={posted_user + " posted - " + text}
						className={`object-contain object-center ${
							images.length === 1
								? "w-12/12 h-12/12"
								: "w-6/12 h-6/12"
						} rounded-xl`}
					/>
				);
			})}
		</div>
	);
};

export default FeedImage;
