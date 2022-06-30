import { useState } from "react/cjs/react.development";
import useInfiniteComments from "../../../hooks/useInfiniteComments";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
const CommentContainer = ({
	isCommentClicked,
	setCommentsCount,
	post,
	isGuest,
	comment = null,
}) => {
	const [cursor, setCursor] = useState(null);
	const { comments, isLoading, error, hasMore, data, setComments } =
		useInfiniteComments(post.id, cursor);
	return (
		<div>
			<>
				{!isGuest && (
					<CreateComment
						setCommentsCount={setCommentsCount}
						post={post}
						setComments={setComments}
					/>
				)}
				<Comments
					setComments={setComments}
					comments={comments}
					isLoading={isLoading}
					error={error}
					highlightedComment={comment}
				/>
				{hasMore && (
					<button
						onClick={() => setCursor(data.cursor)}
						className="text-center text-blue-400 hover:underline"
					>
						view more comments...
					</button>
				)}
			</>
		</div>
	);
};

export default CommentContainer;
