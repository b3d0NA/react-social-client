import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import sunnah from "../../../helpers/axios";
import DawahFeed from "../feed/DawahFeed";
import ProfileHeader from "./ProfileHeader";
import ProfileHeaderSkeleton from "./ProfileHeaderSkeleton";
const ProfileContainer = ({ muslimId, guest }) => {
	const [loading, setLoading] = useState(true);
	const [muslim, setMuslim] = useState(null);
	const [noProfile, setNoProfile] = useState(false);

	useEffect(() => {
		sunnah
			.get(`muslims/${muslimId}`)
			.then(({ data }) => {
				const { muslim } = data;
				setMuslim(muslim);
				setLoading(false);
			})
			.catch((err) => {
				if (err.response.status === 404) {
					setNoProfile(true);
				}
				setLoading(false);
			});
	}, [muslimId]);
	return (
		<div
			className={`w-12/12 ${
				!guest ? "md:w-6/12" : "md:w-8/12"
			} muslim-feed-section`}
		>
			{loading ? (
				<ProfileHeaderSkeleton />
			) : !noProfile ? (
				<>
					<ProfileHeader muslim={muslim} />
					<div className="my-10 mt-44">
						<DawahFeed muslim={muslim} />
					</div>
				</>
			) : (
				<>
					<h2 className="flex items-center justify-center pt-10 text-5xl font-semibold text-center text-gray-500 gap-x-3">
						<FontAwesomeIcon
							icon={faCircleInfo}
							className="text-6xl text-cyan-500"
						/>
						No muslim found!
					</h2>
				</>
			)}
		</div>
	);
};

export default ProfileContainer;
