import React, { useEffect, useState } from "react";

const Error = ({ message, durationTimeout = 5000 }) => {
	const [remove, setRemove] = useState(false);
	useEffect(() => {
		setRemove(false);
	}, []);
	return (
		!remove && (
			<div
				className={`flex items-center my-3 w-full px-4 py-3 space-x-4 text-white bg-red-500 rounded-xl transition ease-in-out duration-300`}
			>
				<button
					onClick={() => setRemove(true)}
					className="text-white hover:bg-white rounded-xl hover:text-red-500"
				>
					<svg
						className="w-6 h-6 rounded-full"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
				<p className="text-sm">{message}</p>
			</div>
		)
	);
};

export default Error;
