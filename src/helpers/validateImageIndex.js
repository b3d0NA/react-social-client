export default function validateImageIndex(images, index) {
	if (images.length - 1 < index) {
		return 0;
	} else if (index < 0) {
		return 0;
	} else {
		return index;
	}
}
