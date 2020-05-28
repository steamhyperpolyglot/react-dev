export function sumValues(values) {
	return values.reduce((total, val) => total + val, 0);
}

export default function sumOdds(values) {
	return sumValues(values.filter((item, index) => index % 2 === 0));
}