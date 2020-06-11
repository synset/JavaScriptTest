
function distance(input) {

	let ip = input.map(Number);

	let x1 = ip[0];
	let y1 = ip[1];
	let x2 = ip[2];
	let y2 = ip[3];

	let xs = x2 - x1;
	let ys = y2 - y1;

	xs *= xs;
	ys *= ys;

	let result = Math.sqrt(xs + ys);
	console.log(result);
	return result;
}
distance(['2', '4', '5', '0']);
distance(['2.34', '15.66', '-13.55', '-2.9985']);
