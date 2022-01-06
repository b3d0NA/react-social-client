import _ from "lodash";
import React from "react";
import { useEffect } from "react/cjs/react.development";
import Comment from "./Comment";
import CommentSkeleton from "./CommentSkeleton";
const Comments = ({ comments, isLoading, error, setComments }) => {
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
							<Comment singleComment={comment} key={comment.id} />
						);
					})}
				</>
			)}
		</div>
	);
};

export default Comments;
