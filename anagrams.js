var size = 4;
var arr = ['a', 'b', 'c', 'd'];
function ana(sz) {
	if(sz == 1) return;
	for(var j = 0; j < sz; j++) {
		ana(sz - 1);
		rotate(sz);
	}
}
function rotate(sz) {
	var j;
	var pos = size - sz;
	var temp = arr[pos];
	for(var j = pos + 1; j < size; j++) {
		arr[j - 1] = arr[j];
    }
	arr[j - 1] = temp;
	if(sz == 2) console.log(arr)
}