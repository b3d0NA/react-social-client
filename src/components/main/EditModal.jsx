import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import sunnah from "../../helpers/axios";

const EditModal = () => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState();
	const [data, setData] = useState();
	const dataTextRef = useRef();
	useEffect(() => {
		function openEditModal(e) {
			const { data } = e.detail;
			setData(data);
			setText(data.text);
			setOpen(true);
		}
		document.addEventListener("openEditModal", openEditModal);

		return () => {
			document.removeEventListener("openEditModal", openEditModal);
		};
	}, []);

	function handleUpdate() {
		sunnah
			.put(`${data.path}/${data.id}`, { text })
			.then(({ data: resp }) => {
				if (resp.status === 200) {
					const editEvent = new CustomEvent(
						data.path === "posts"
							? "closePostEditModal"
							: "closeCommentEditModal",
						{
							detail: {
								data: data,
								updatedText: resp.text,
							},
						}
					);
					document.dispatchEvent(editEvent);
					setOpen(false);
				}
			})
			.catch((err) => {
				console.log(err);
				setOpen(false);
			});
	}
	return (
		<>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					initialFocus={dataTextRef}
					onClose={setOpen}
				>
					<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="opacity-100 ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="opacity-0 ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-300 bg-opacity-75" />
						</Transition.Child>
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="opacity-100 ease-in duration-200"
							enterFrom="translate-y-full"
							enterTo="translate-y-3"
							leave="opacity-0 translate-y-full ease-out duration-300"
							leaveFrom="opacity-100 translate-y-3"
							leaveTo="opacity-0 translate-y-full"
						>
							<div className="inline-block overflow-hidden text-left align-bottom transition-all transform translate-y-1 bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full">
								<div className="pb-2 bg-white sm:p-2 sm:pb-2">
									<div className="pb-2 bg-white sm:p-2 sm:pb-2">
										<div className="sm:flex sm:items-start">
											<textarea
												ref={dataTextRef}
												name="text"
												cols="30"
												rows="4"
												className="w-full p-3 text-gray-700 transition duration-500 ease-linear focus:outline-none focus:bg-gray-100 rounded-xl"
												resize="false"
												onChange={(e) =>
													setText(e.target.value)
												}
												value={text}
											></textarea>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
									<button
										type="button"
										className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-400 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={handleUpdate}
									>
										Update
									</button>
									<button
										type="button"
										className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
									>
										Cancel
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

export default EditModal;
