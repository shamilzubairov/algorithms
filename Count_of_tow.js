function countTow(n, T, cnt) {
	if(T == 0) return 0;
	if(n >= T) return cnt;
	cnt = 2 * cnt + 1;
	n++;
	return countTow(n, T, cnt);
}