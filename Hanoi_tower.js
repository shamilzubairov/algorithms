function tow(top, from, int, to) {
	if(top == 1) {
		console.log(`Disk 1 from ${from} to ${to}`);
		return;
    } else {
		tow(top - 1, from, to, int);
		console.log(`Disk ${top} from ${from} to ${to}`);
		tow(top - 1, int, from, to);
	}
}