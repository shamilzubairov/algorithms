function mul(a, b) {
	// учесть проверку на 0
	if(b == 1) return a;
	return a + mul(a, b - 1);
}