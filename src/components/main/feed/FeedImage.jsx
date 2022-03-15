import _ from "lodash";
import React, { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
const FeedImage = ({ images, posted_user, text }) => {
	function getSpanEstimate(size) {
		if (size > 250) {
			return 2;
		}

		return 1;
	}

	const [postImages, setPostImages] = useState([]);
	useEffect(() => {
		const imagesClone = _.cloneWith(images);
		const newImages = [];
		imagesClone.map((image) => {
			var newImg = new Image();
			const newImage = {};
			newImg.onload = function () {
				var height = newImg.height;
				var width = newImg.width;
				newImage.thumbnail = image;
				newImage.thumbnailWidth = width;
				newImage.thumbnailHeight = height;
				newImage.src = image;
			};
			newImg.src = image;
			return newImages.push(newImage);
		});
		setPostImages(newImages);
		console.log(newImages);
	}, [images]);
	return (
		<div className="justify-between grid-flow-col-dense grid-cols-2 gap-x-3 gap-y-3 post_images">
			<Gallery images={postImages} />
			{/* {images.map((image) => {
				return (
					// <img
					// 	key={image}
					// 	onLoad={(e) => {
					// 		e.target.style.gridColumnEnd = `span ${getSpanEstimate(
					// 			e.target.width
					// 		)}`;
					// 		e.target.style.gridRowEnd = `span ${getSpanEstimate(
					// 			e.target.width
					// 		)}`;
					// 	}}
					// 	src={image}
					// 	alt={posted_user + " posted - " + text}
					// 	className={`object-contain object-center ${
					// 		images.length === 1
					// 			? "w-12/12 h-12/12"
					// 			: `w-6/12 h-6/12`
					// 	} rounded-xl`}
					// />
				);
			})} */}
		</div>
	);
};

export default FeedImage;
