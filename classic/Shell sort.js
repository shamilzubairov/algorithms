var arr = [2,4,1,10,5,7,8,15,1,3]

function shellS(arr) {
	debugger;
    var h = 1;
	var i, o;
    
	while(h <= (arr.length / 3)) {
        h = h * 3 + 1;
    }
	while(h > 0) {
		// the insertion sort is in addition
        for(o = h; o < arr.length; o++) {
            let temp = arr[o];
            i = o;
            while(i > h - 1 && arr[i - h] >= temp) {
                arr[i] = arr[i - h];
                i -= h;
            }
            arr[i] = temp;
        }
		// end of is
        h = (h - 1) / 3;
    }
	return arr;
}