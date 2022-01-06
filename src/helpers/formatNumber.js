export default function formatNumber(number) {
	return Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1,
	}).format(parseInt(number));
}
