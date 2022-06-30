import { NavLink } from "react-router-dom";

const SettingsLeft = () => {
	return (
		<div className="flex flex-col w-full p-2 overflow-auto md:border-r md:border-gray-200 md:w-2/12 text-md">
			<div className="p-3 my-3 bg-white navigation rounded-xl">
				<ul>
					<li className="pb-2">
						<NavLink
							to="profile"
							className={({ isActive }) =>
								isActive
									? "flex w-full px-4 py-4 space-x-3 hover:bg-gray-50 bg-teal-50 rounded-xl"
									: "flex w-full px-4 py-4 space-x-3 hover:bg-gray-50 rounded-xl"
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<span className="font-semibold text-gray-600">
								Profile
							</span>
						</NavLink>
					</li>
					<li className="pb-2">
						<NavLink
							to="security"
							className={({ isActive }) =>
								isActive
									? "flex w-full px-4 py-4 space-x-3 hover:bg-gray-50 bg-teal-50 rounded-xl"
									: "flex w-full px-4 py-4 space-x-3 hover:bg-gray-50 rounded-xl"
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
							<span className="font-semibold text-gray-600">
								Security
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SettingsLeft;
