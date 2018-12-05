// Массив включает любое натуральное число, кроме 0 (предмет весом 0 не имеет смысла)
function r(i, to) {
	while(i < n) {
        var first = ar[i];
		if(first < to) {
			count.push(first);
			r(i + 1, to - first);
        } else if(first == to) {
			count.length ? console.log(count.join('+') + '+' + first) : console.log(first + '');
        }
		i++;
	}
	count.pop();
	return 'done';
}

var ar = [5, 6, 7, 8, 11], n = ar.length;
var count = [];
r(0, 20);