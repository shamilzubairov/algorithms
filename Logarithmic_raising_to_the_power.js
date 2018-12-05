function pow(x, y) {
	if(y == 1) {
		return x;
    } else if(y == 0) {
		return 1;
    } else if(y % 2 == 0) {
		return pow(x * x, y / 2);
    } else {
		return x * pow(x * x, Math.floor(y / 2))
	}
}