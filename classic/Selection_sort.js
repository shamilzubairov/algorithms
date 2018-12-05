function sS(arr) {
	let i, o, min;
	for(o = 0; o < arr.length - 1; o++) {
		min = o;
		for(i = o + 1; i < arr.length; i++) {
			if(arr[i] < arr[min]) min = i;
		}
		let temp = arr[o];
		arr[o] = arr[min];
		arr[min] = temp;
	}
	return arr;
}