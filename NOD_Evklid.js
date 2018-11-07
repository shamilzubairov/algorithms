function hcfEvklid(m, n) {
	while(!(m == 0 || n == 0)) {
        if(m >= n) {
            m = m - n;
        } else {
            n = n - m;
        }
	}
	if(m == 0) {
		return n;
    } else if(n == 0) return m;
}