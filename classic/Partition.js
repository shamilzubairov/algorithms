var arr = [4, 8, 2, 1, 5, 11];

function part(l = 0, r = arr.length - 1, p) {
	var lP = l - 1;
	var rP = r + 1;
	while(true) {
		while(lP < r && arr[++lP] < p);
		while(rP > l && arr[--rP] > p);
		if(lP >= rP) {
			break;
        } else {
			swap(lP, rP);
		}
    }
	return lP;
}

function swap(de1, de2) {
	var temp;
	temp = arr[de1];
	arr[de1] = arr[de2];
	arr[de2] = temp;
}