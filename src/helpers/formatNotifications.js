export default function formatNotifications(type, data) {
	if (type.includes("LikedNotification")) {
		return "loved your photo";
	} else if (type.includes("CommentNotification")) {
		return `commented "${data.comment.substring(0, 20)} ${
			data.comment.length > 20 ? "..." : ""
		}" to your photo`;
	}
}
