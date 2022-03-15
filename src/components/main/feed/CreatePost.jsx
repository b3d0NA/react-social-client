import React, { useRef, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import sunnah from "../../../helpers/axios";
import Error from "../../messages/Error";
import Skeleton from "../../Skeleton";
const CreatePost = ({ loading }) => {
	const { currentUser } = useAuthContext();
	const [text, setText] = useState();
	const [files, setFiles] = useState([]);
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState([]);
	const createPostWrapper = useRef();
	const createPost = useRef();
	const fileInput = useRef();

	function uploadFile() {
		fileInput.current.click();
	}

	function submitPost() {
		if (text || files.length !== 0) {
			let formData = new FormData();
			files.map((file) => {
				return formData.append("images[]", file);
			});
			text && formData.append("text", text);
			const options = {
				onUploadProgress: (progressEvent) => {
					const percentCompleted = Math.round(
						(progressEvent.loaded * 100) / progressEvent.total
					);
					setProgress(percentCompleted);
				},
			};
			sunnah
				.post("posts", formData, options)
				.then((resp) => {
					setProgress(0);
					const { data } = resp;

					if (data.hasOwnProperty("status") && data.status === 200) {
						setFiles([]);
						setText("");
						createPost.current.blur();
						const postEvent = new CustomEvent("postCreated", {
							detail: {
								post: data.post,
							},
						});
						document.dispatchEvent(postEvent);
					}
					data.hasOwnProperty("errors") &&
						setError({
							message:
								"The file type must be jpeg, png, jpg, gif, svg. Max upload size: 2MB",
						});
					data.hasOwnProperty("status") &&
						data.status === 401 &&
						setError(data);
				})
				.catch((err) => {
					setProgress(0);
					setError({
						unknown: "Unknown error happend! Try again later.",
					});
				});
		}
	}

	function handleImages(e) {
		const uploadedFiles = fileInput.current.files;
		Array.from(uploadedFiles).forEach((file, index) => {
			const url = URL.createObjectURL(file);
			uploadedFiles[index].url = url;
		});
		setFiles([...files, ...uploadedFiles]);
	}

	function removeSelectedImage(url) {
		const newArray = files.filter((file) => file.url !== url);
		setFiles([...newArray]);
	}

	function handleCreatePostFocus(e) {
		createPostWrapper.current.classList.remove("h-20");
		e.target.classList.add("max-h-32");
	}

	function handleBlurCreatePost(e) {
		createPostWrapper.current.classList.add("h-20");
		e.target.classList.remove("h-32");
	}
	return (
		<div className="flex p-3 space-x-5 bg-white md:p-5 create_post rounded-xl">
			<div className="profile_image">
				{loading ? (
					<Skeleton w="w-12" h="h-12" />
				) : (
					<img
						src={currentUser.image}
						alt={currentUser.name}
						className="object-cover object-top w-12 h-12 rounded-2xl"
					/>
				)}
			</div>
			<div className="w-full input_post" onFocus={handleCreatePostFocus}>
				<div
					ref={createPostWrapper}
					className="h-20 overflow-hidden create_post"
				>
					<textarea
						ref={createPost}
						onBlur={handleBlurCreatePost}
						name="text"
						cols="30"
						className="w-full p-5 text-gray-700 transition duration-500 ease-linear focus:outline-none focus:bg-gray-100 rounded-xl"
						placeholder={`What's new found, ${
							!loading ? currentUser.name : ""
						}?`}
						resize="false"
						onChange={(e) => setText(e.target.value)}
						value={text}
					></textarea>
					{files.length !== 0 && (
						<div className="flex flex-wrap h-auto space-x-3 space-y-3 image_preview">
							{files.map((image, index) => {
								return (
									<div
										className="relative w-32 h-auto border border-gray-50 image rounded-xl"
										key={index}
									>
										<button
											onClick={() => {
												removeSelectedImage(image.url);
											}}
											className="absolute px-1.5 hover:bg-gray-200 text-xl bg-gray-100 rounded-xl right-2 top-2"
										>
											&times;
										</button>
										<img
											className="object-contain rounded-xl"
											src={`${image.url}`}
											alt="Ajaira"
										/>
									</div>
								);
							})}
						</div>
					)}
					{error.hasOwnProperty("message") && (
						<Error message={error.message} />
					)}
					{error.hasOwnProperty("unknown") && (
						<Error message={error.unknown} />
					)}
					<div
						className="flex ml-2 space-x-4 create_post_bottom"
						onFocus={handleCreatePostFocus}
					>
						<button
							onClick={submitPost}
							type="submit"
							disabled={progress > 0}
							className="relative flex p-2 my-3 space-x-3 overflow-hidden bg-green-400 w-36 md:p-3 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 rounded-xl"
						>
							{progress <= 0 ? (
								<>
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
										/>
									</svg>
									<span className="font-semibold text-white">
										Post Now
									</span>
								</>
							) : (
								<>
									<svg
										viewBox="0 0 100 100"
										preserveAspectRatio="xMidYMid"
										className={`left-16 absolute animate-spin h-6 w-6 z-20`}
									>
										<circle
											cx="50"
											cy="50"
											fill="none"
											stroke="#ffffff"
											strokeWidth="10"
											r="35"
											strokeDasharray="164.93361431346415 56.97787143782138"
											transform="matrix(1,0,0,1,0,0)"
										></circle>
									</svg>
									<div
										className="absolute bottom-0 z-10 h-full overflow-hidden transform bg-green-600 shadow-xl -left-3 progress rounded-xl"
										style={{ width: progress + "%" }}
									></div>
								</>
							)}
						</button>
						<button
							onClick={uploadFile}
							type="file"
							className="p-1 px-3 my-4 bg-blue-500 md:p-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 rounded-xl"
						>
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<input
								ref={fileInput}
								onChange={handleImages}
								type="file"
								hidden
								multiple
								accept="image/*"
								name="images"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
