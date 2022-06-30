import React, { useState } from "react";
import { useAppContext } from "../../../../contexts/AppContext";
import GalleryImage from "./GalleryImage";
import ImageSlider from "./ImageSlider";
const FeedImage = ({ images, posted_user, text }) => {
	// const [sliderView, setSliderView] = useState(false);
	const [sliderIndex, setSliderIndex] = useState(0);
	const { setImageModal } = useAppContext();

	function modalImageSlider(index) {
		if (images.length <= 5 && images[0].constructor !== Array) {
			setImageModal({ images, index });
		} else {
			setImageModal({ images: images[sliderIndex], index });
		}
	}

	if (images) {
		if (images.length <= 5 && images[0].constructor !== Array) {
			return (
				<GalleryImage
					images={images}
					posted_user={posted_user}
					text={text}
					modalImageSlider={modalImageSlider}
				/>
			);
		} else {
			return (
				<ImageSlider
					images={images}
					posted_user={posted_user}
					text={text}
					sliderIndex={sliderIndex}
					setSliderIndex={setSliderIndex}
					modalImageSlider={modalImageSlider}
				/>
			);
		}
	}
};

export default FeedImage;
