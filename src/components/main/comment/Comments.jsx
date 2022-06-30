import _ from "lodash";
import { useEffect } from "react/cjs/react.development";
import tee from "../../../helpers/formatComments";
import Comment from "./Comment";
import CommentSkeleton from "./CommentSkeleton";
const Comments = ({
	comments,
	isLoading,
	error,
	setComments,
	highlightedComment = null,
}) => {
	useEffect(() => {
		function updateComment(e) {
			const { data: comment, updatedText } = e.detail;
			setComments((prev) => {
				const commentClone = _.cloneWith(prev);
				const updatedComment = commentClone.filter(
					(item) => comment.id === item.id
				);
				updatedComment[0].text = updatedText;
				return commentClone;
			});
		}
		document.addEventListener("closeCommentEditModal", updateComment);

		return () => {
			document.removeEventListener(
				"closeCommentEditModal",
				updateComment
			);
		};
	}, [setComments]);

	useEffect(() => {
		function deleteComment(e) {
			const { data: comment } = e.detail;
			setComments((prev) => {
				const commentClone = _.cloneWith(prev);
				const updatedComment = commentClone.filter(
					(item) => comment.id !== item.id
				);
				return updatedComment;
			});
		}
		document.addEventListener("closeCommentDeleteModal", deleteComment);

		return () => {
			document.removeEventListener(
				"closeCommentDeleteModal",
				deleteComment
			);
		};
	}, [setComments]);

	useEffect(() => {
		if (!isLoading && comments && highlightedComment) {
			const newSortedComments = tee(
				comments,
				(item) => item.id === highlightedComment.comment_id
			);
			setComments(newSortedComments);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [highlightedComment, setComments, isLoading]);
	return (
		<div className="py-4 mx-4 space-y-3 md:mx-8 comments_section">
			{error && <CommentSkeleton />}
			{isLoading ? (
				<>
					<CommentSkeleton />
				</>
			) : (
				<>
					{comments.map((comment) => {
						return (
							<Comment
								highlightedComment={highlightedComment}
								singleComment={comment}
								key={comment.id}
							/>
						);
					})}
				</>
			)}
		</div>
	);
};

export default Comments;
