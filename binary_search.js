function binary_search(ar, key) {
	var l = 0, u = ar.length - 1, curr;
	while(true) {
		curr = Math.ceil((l + u) / 2);
		if(ar[curr] == key) return key;
		else if(l > u) return 'Key has not found';
		else {
			if(ar[curr] < key) l = curr + 1;
			else u = curr - 1;
		}
	}
}

var arr = [1,2,3,4,5,6,7,8,9];

binary_search(arr, 4);