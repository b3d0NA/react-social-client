import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecuritySettings = () => {
	return (
		<div>
			<h1 className="mb-5 text-2xl font-bold text-center text-gray-700">
				Securtiy
			</h1>
			<div className="mx-auto mt-10 w-96 sm:mt-0">
				<div className="face-recog">
					<button className="flex items-center px-4 py-2 space-x-4 border border-gray-200 rounded-xl hover:bg-gray-100 w-72">
						<div className="w-2/12">
							<FontAwesomeIcon
								icon={faFaceSmile}
								className="w-8 h-8"
							/>
						</div>
						<div className="w-10/12">
							<h2 className="text-xl font-semibold text-gray-700">
								Save Face
							</h2>
							<p className="text-xs text-gray-500">
								Use face recognition system for your
								authentication
							</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SecuritySettings;
