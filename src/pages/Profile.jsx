import _ from "lodash";
import { useParams } from "react-router-dom";
import Header from "../components/header/";
import GuestHeader from "../components/header/GuestHeader";
import LeftSidebar from "../components/main/LeftSidebar";
import ProfileContainer from "../components/main/profile";
import RightSidebar from "../components/main/RightSidebar";
import useAuthUser from "../hooks/useAuthUser";
const Profile = () => {
	const { currentUser, loading } = useAuthUser();
	const { id: muslimId } = useParams();
	return !_.isEmpty(currentUser) ? (
		<div>
			<Header userLoading={loading} />
			<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
				<LeftSidebar loading={loading} />
				<ProfileContainer muslimId={muslimId} />
				<RightSidebar />
			</div>
		</div>
	) : (
		<>
			<GuestHeader />
			<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
				<ProfileContainer muslimId={muslimId} guest />
			</div>
		</>
	);
};

export default Profile;
