function binary_recursive_search(ar, key, low, upp) {
	var curr;
	curr = Math.ceil((low + upp) / 2);
	
	if(ar[curr] == key) return key;
    else if(low > upp) return 'Key has not found';
    else {
        if(ar[curr] < key) return binary_recursive_search(ar, key, curr + 1, upp);
        else return binary_recursive_search(ar, key, low, curr - 1);
    }
}

var arr = [1,2,3,4,5,6,7,8,9];

binary_recursive_search(arr, 4, 0, arr.length - 1);