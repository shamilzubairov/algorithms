function anag(ar, count) {
	if(count == 0) {
		console.log(ar.join('\n'));
		return;
    }
    if(ar.length == count /* <-- кол-во доп. операндов */) return;
    var temp = ar[0], rest = ar.slice(1);

    for(var i = 0; i < rest.length; i++) {

        var bust = rest.slice(i, i + count); // извлекаем доп. кол-во операндов
        
		if(bust.length >= count) {
			var res = bust.reduce((s, e) => { // суммируем все значения
				return s + e;
            }, temp);
            console.log(`${temp} + ${bust.join(' + ')} = ${res}`);
        }
    }
    anag(rest, count);
}

var arr = [1, 2, 3, 4];

for(var i = 0; i < arr.length; i++) {
	anag(arr, i)
}