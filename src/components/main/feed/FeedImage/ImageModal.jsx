import {
	faChevronLeft,
	faChevronRight,
	faCircleNotch,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useAppContext } from "../../../../contexts/AppContext";
import validateImageIndex from "../../../../helpers/validateImageIndex";
const ImageModal = () => {
	const { imageModal, setImageModal } = useAppContext();
	const [isOpen, setIsOpen] = useState(false);
	const [images, setImages] = useState([]);
	const [index, setIndex] = useState(imageModal.index);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (imageModal.images.length > 0) {
			setImages(imageModal.images);
			setIndex(imageModal.index);
			// setLoading(false);
			setIsOpen(true);
		}

		return () => {};
	}, [imageModal]);

	function closeImageModal() {
		setIsOpen(false);
	}

	function nextImage() {
		setIndex((prevIndex) => validateImageIndex(images, prevIndex + 1));
	}
	function prevImage() {
		setIndex((prevIndex) => validateImageIndex(images, prevIndex - 1));
	}

	if (imageModal.images.length > 0) {
		return (
			<Transition.Root show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-30 overflow-y-auto"
					onClose={setIsOpen}
				>
					<div className="relative flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-100"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block overflow-hidden text-left align-bottom transition-all transform shadow-xl ring-2 ring-white ring-offset-2 rounded-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
								<div className="relative p-1 ring-2 ring-white ring-offset-2 sm:p-1">
									<button
										onClick={closeImageModal}
										className="absolute px-[9px] cursor-pointer bg-white py-0.5 rounded-full top-2 right-2 text-bold text-teal-500 shadow-xl hover:bg-teal-500 hover:text-white focus:outline-none"
									>
										<FontAwesomeIcon icon={faXmark} />
									</button>
									<div className="sm:flex sm:items-start">
										{loading && (
											<FontAwesomeIcon
												className="flex mx-auto my-4 text-2xl text-center text-teal-500 animate-spin"
												icon={faCircleNotch}
											/>
										)}
										<img
											onLoad={() => setLoading(false)}
											src={images[index]}
											alt={images[index]}
											className={`h-full w-full rounded-xl m-auto shadow-md ${
												!loading ? "block" : "hidden"
											}`}
										/>
									</div>
								</div>
							</div>
						</Transition.Child>
						<Transition.Child
							enter=""
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							{images.length > 1 && !loading && (
								<>
									{index !== images.length - 1 && (
										<button
											onClick={nextImage}
											className="absolute right-0 px-4 py-2 text-lg text-teal-500 ease-in-out bg-white rounded-full md:text-2xl md:right-1/3 top-1/2 hover:text-white hover:bg-teal-500"
										>
											<FontAwesomeIcon
												icon={faChevronRight}
											/>
										</button>
									)}
									{index !== 0 && (
										<button
											onClick={prevImage}
											className="absolute left-0 px-4 py-2 text-lg text-teal-500 ease-in-out bg-white rounded-full md:text-2xl top-1/2 md:left-1/3 hover:text-white hover:bg-teal-500"
										>
											<FontAwesomeIcon
												icon={faChevronLeft}
											/>
										</button>
									)}
								</>
							)}
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		);
	} else {
		return "";
	}
};

export default ImageModal;
