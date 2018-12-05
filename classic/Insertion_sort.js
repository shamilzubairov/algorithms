function iS(arr) {
	let i, o;
	for(o = 1; o < arr.length; o++) {
		let temp = arr[o];
		i = o;
		while(i > 0 && arr[i - 1] >= temp) {
			arr[i] = arr[i - 1];
			--i;
		}
		arr[i] = temp;
	}
	return arr;
}