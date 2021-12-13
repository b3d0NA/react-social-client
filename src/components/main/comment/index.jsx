import React from "react";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
const CommentContainer = ({ isCommentClicked }) => {
	return (
		<div>
			{isCommentClicked && (
				<>
					<CreateComment />
					<Comments />
				</>
			)}
		</div>
	);
};

export default CommentContainer;
