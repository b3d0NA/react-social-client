export default function tee(a, fn) {
	var non_matches = [];
	var matches = a.filter(function (e, i, a) {
		var match = fn(e, i, a);
		if (!match) non_matches.push(e);
		return match;
	});
	return matches.concat(non_matches);
}
