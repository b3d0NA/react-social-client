import React from "react";

const GalleryImage = ({ images, posted_user, text, modalImageSlider }) => {
	if (images.length === 1 && images[0].constructor !== Array) {
		const image = images[0];
		return (
			<div className="w-full h-fit post_images">
				<img
					onClick={() => modalImageSlider(0)}
					src={image}
					alt={posted_user + " posted - " + text}
					className={`object-contain object-center aspect-auto rounded-xl m-auto hover:saturate-150  cursor-pointer`}
				/>
			</div>
		);
	} else if (images.length === 2 && images[0].constructor !== Array) {
		return (
			<div className="box-border flex flex-wrap w-full">
				{images.map((image, index) => {
					return (
						<div
							key={image}
							className="box-border flex-grow-0 max-w-full p-1 post_images basis-full"
						>
							<img
								onClick={() => modalImageSlider(index)}
								src={image}
								alt={posted_user + " posted - " + text}
								className={`object-contain object-center aspect-auto rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
							/>
						</div>
					);
				})}
			</div>
		);
	} else if (images.length === 3 && images[0].constructor !== Array) {
		return (
			<div className="box-border flex flex-wrap w-full">
				<div className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1">
					<img
						onClick={() => modalImageSlider(0)}
						src={images[0]}
						alt={posted_user + " posted - " + text}
						className={`object-contain object-center aspect-auto rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
					/>
				</div>
				{images.map((image, index) => {
					return (
						<div
							key={image}
							className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1"
						>
							<img
								onClick={() => modalImageSlider(index)}
								src={image}
								alt={posted_user + " posted - " + text}
								className={`object-contain object-center aspect-auto rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
							/>
						</div>
					);
				})}
			</div>
		);
	} else if (images.length === 4 && images[0].constructor !== Array) {
		return (
			<>
				<div className="box-border flex flex-wrap w-full">
					<div className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1">
						<img
							onClick={() => modalImageSlider(0)}
							src={images[0]}
							alt={posted_user + " posted - " + text}
							className={`object-cover object-center h-full rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
						/>
					</div>
					<div className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1 overflow-hidden space-y-2 h-fit">
						{images.map((image, index) => {
							if (index >= 1 && index <= 4) {
								return (
									<img
										onClick={() => modalImageSlider(index)}
										key={image}
										src={image}
										alt={posted_user + " posted - " + text}
										className={`object-cover object-center h-1/3 w-full rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
									/>
								);
							}
							return "";
						})}
					</div>
				</div>
			</>
		);
	} else if (images.length === 5 && images[0].constructor !== Array) {
		return (
			<div className="box-border flex flex-wrap w-full">
				<div className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1">
					<img
						onClick={() => modalImageSlider(0)}
						src={images[0]}
						alt={posted_user + " posted - " + text}
						className={`object-cover object-center h-full rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
					/>
				</div>
				<div className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1 overflow-hidden space-y-2 h-fit">
					<div className="box-border flex flex-wrap w-full">
						<div className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1 overflow-hidden space-y-2 h-fit">
							{images.map((image, index) => {
								if (index >= 1 && index <= 3) {
									return (
										<img
											onClick={() =>
												modalImageSlider(index)
											}
											key={image}
											src={image}
											alt={
												posted_user +
												" posted - " +
												text
											}
											className={`object-cover object-center h-full w-full rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
										/>
									);
								}
								return "";
							})}
						</div>
						<div className="post_images box-border flex-grow-0 basis-1/2 max-w-[50%] p-1 overflow-hidden space-y-2">
							{images.map((image, index) => {
								if (index >= 4 && index <= 7) {
									return (
										<img
											onClick={() =>
												modalImageSlider(index)
											}
											key={image}
											src={image}
											alt={
												posted_user +
												" posted - " +
												text
											}
											className={`object-cover object-center h-full w-full rounded-xl flex flex-wrap box-border justify-center m-auto hover:saturate-150 cursor-pointer`}
										/>
									);
								}
								return "";
							})}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return "";
	}
};

export default GalleryImage;
