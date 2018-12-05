function merge_sort(ar, low, upp) {
	if(low == upp) return ar;
	var mid = Math.floor((low + upp) / 2);
	merge_sort(ar, low, mid);
	merge_sort(ar, mid + 1, upp);
	return merge(ar, low, mid + 1, upp);
}
function merge(ar, low, mid, upp) {
	var b = ar.slice(low, mid);
	var c = ar.slice(mid, upp + 1);
	var k = low; 
	var i = j = 0;
	while(i < b.length && j < c.length) {
		if(b[i] < c[j]) {
			ar[k++] = b[i++];
		} else {
			ar[k++] = c[j++];
		}
	}
	while(i < b.length) {
		ar[k++] = b[i++];
	}
	while(j < c.length) {
		ar[k++] = c[j++];
	}
	return ar;
}

var arr = [20, 43, 4, 1, 56, 1];
merge_sort(arr, 0, arr.length - 1); 