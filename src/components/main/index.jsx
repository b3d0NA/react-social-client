import DawahFeedContainer from "./feed/DawahFeedContainer";
import LeftSidebar from "./LeftSidebar.jsx";
import RightSidebar from "./RightSidebar";

const Main = ({ userLoading }) => {
	return (
		<>
			<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
				<LeftSidebar loading={userLoading} />
				<DawahFeedContainer loading={userLoading} />
				<RightSidebar />
			</div>
		</>
	);
};

export default Main;
