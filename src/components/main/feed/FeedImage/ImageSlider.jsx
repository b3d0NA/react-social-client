import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import validateImageIndex from "../../../../helpers/validateImageIndex";
import GalleryImage from "./GalleryImage";

const ImageSlider = ({
	sliderIndex,
	setSliderIndex,
	images,
	posted_user,
	text,
	modalImageSlider,
}) => {
	function nextImage() {
		setSliderIndex((prevIndex) =>
			validateImageIndex(images, prevIndex + 1)
		);
	}
	function prevImage() {
		setSliderIndex((prevIndex) =>
			validateImageIndex(images, prevIndex - 1)
		);
	}

	return (
		<>
			<div className="relative flex slider">
				<div className="h-[431px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-teal-100 scrollbar-thumb-rounded thin-scroll scroll-m-2">
					<GalleryImage
						images={images[sliderIndex]}
						posted_user={posted_user}
						text={text}
						modalImageSlider={modalImageSlider}
					/>
				</div>
				{images.length > 1 && (
					<>
						{images[sliderIndex] !== images.length - 1 && (
							<button
								onClick={nextImage}
								className="absolute md:-right-[35px] right-0 shadow-lg px-2 md:px-4 md:py-2 py-.5 text-lg md:text-2xl text-teal-500 ease-in-out bg-white rounded-full top-1/2 hover:text-white hover:bg-teal-300 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
							>
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						)}
						{images[sliderIndex] !== 0 && (
							<button
								onClick={prevImage}
								className="absolute md:-left-[35px] shadow-lg px-2 md:px-4 md:py-2 py-.5 text-lg md:text-2xl text-teal-500 ease-in-out bg-white rounded-full top-1/2 hover:text-white hover:bg-teal-300 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
							>
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default ImageSlider;
