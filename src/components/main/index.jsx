import React from "react";
import DawahFeedContainer from "./DawahFeedContainer";
import LeftSidebar from "./LeftSidebar.jsx";
import RightSidebar from "./RightSidebar";

const Main = () => {
	return (
		<div className="relative justify-center p-3 mx-auto md:container md:p-8 md:flex md:space-x-11">
			<LeftSidebar />
			<DawahFeedContainer />
			<RightSidebar />
		</div>
	);
};

export default Main;
