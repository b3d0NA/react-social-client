import React from "react";
import CreatePost from "./CreatePost";
import DawahFeed from "./DawahFeed";
const DawahFeedContainer = () => {
	return (
		<div className="w-12/12 md:w-6/12 dawah-feed-section">
			<CreatePost />
			<DawahFeed />
			<DawahFeed />
		</div>
	);
};

export default DawahFeedContainer;
