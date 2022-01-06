import React, { useEffect, useState } from "react";

const Success = ({ message, durationTimeout = 5000 }) => {
	const [remove, setRemove] = useState(false);
	const [hidden, setHidden] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setRemove(true);
		}, durationTimeout);
		const hiddenTimeout = setTimeout(() => {
			setHidden(true);
		}, durationTimeout + 500);
		return () => {
			clearTimeout(timeout);
			clearTimeout(hiddenTimeout);
			setRemove(false);
			setHidden(false);
		};
	}, [durationTimeout, message]);
	return (
		<div
			className={`flex items-center w-full px-4 py-3 space-x-4 text-white bg-green-500 rounded-xl transition ease-in-out duration-300 ${
				remove && "opacity-0"
			} ${hidden && "hidden"}`}
		>
			<svg
				className="w-6 h-6 text-white rounded-full"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					clip-rule="evenodd"
				/>
			</svg>
			<p className="text-sm">{message}</p>
		</div>
	);
};

export default Success;
