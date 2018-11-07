function hcf(a, b) {
	let k;
	if(a < b) {
		k = a;
    } else {
		k = b;
    }
	while(!(a % k == 0 && b % k == 0)) {
        k = k - 1;
    }
	return k;
}