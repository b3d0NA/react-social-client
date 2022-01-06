import React from "react";
import CreatePost from "./CreatePost";
import DawahFeed from "./DawahFeed";
const DawahFeedContainer = ({ loading }) => {
	return (
		<div className="w-12/12 md:w-6/12 dawah-feed-section">
			<CreatePost loading={loading} />
			<DawahFeed />
		</div>
	);
};

export default DawahFeedContainer;
