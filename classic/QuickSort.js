function quickSort(left, right) {
	debugger
	if(right - left <= 0) { // left >= right
		return;
	} else {
		var p = part(left, right, arr[right]);
		quickSort(left, p - 1);
		quickSort(p + 1, right)
	}
}
function part(l, r, p) {
	var lP = l - 1;
	var rP = r;
	while(true) {
		
		while(arr[++lP] < p);
		while(arr[--rP] > p);
		
		if(lP >= rP) {
			break;
        } else {
			swap(lP, rP);
		}
    }
	swap(lP, r);
	return lP;
}

function swap(de1, de2) {
	var temp;
	temp = arr[de1];
	arr[de1] = arr[de2];
	arr[de2] = temp;
}

var arr = [2,8,1,4,6,3]

quickSort(0, arr.length - 1)