var arr = ['a','b','c','d'], res = [];
function comb(n, k, lev = 0) {
	if(k <= 0 || k > n) return;
	if(k == 1) {
		console.log(res.join('') + arr[lev]);
    } else {
        res.push(arr[lev]);
    }
    comb(n - 1, k - 1, lev + 1);
    comb(n - 1, k, lev + 1);
	res.pop();
}