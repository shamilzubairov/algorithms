let ar = [4, 1, 5, 0, 1, 6, 5, 1, 5, 3];

// count-keys-equal
function cke(arr, m) {
	let i = 0, eq = Array(m).fill(0);
	while(i < arr.length) {
		let key = arr[i];
		eq[key]++;
		i++;
	}
	return eq;
}

let eq = cke(ar, 7);

// count-keys-less
function ckl(eq, m) {
	let j = 1, less = Array(m).fill(0);
	while(j < m) {
		less[j] = less[j - 1] + eq[j - 1];
		j++;
	}
	return less;
}

ckl(eq, 7);