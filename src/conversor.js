function romanize(n) {

	if (!Number.isInteger(Number(n))) {
		return 'Solo se permite el ingreso de números enteros'
	}
	if (n <= 0) {
		return 'Solo se permiten números positivos'
	}

	let
		values = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		res = [],
		num, letra, val, pos, insert

	for(var i = 6; num = values[i], letra = letras[i]; i--) {
		if(n >= num) {
			var r = Math.floor(n / num)
			n -= r * num
			if(r < 4){
				while(r--){
					res.push(letra)
				}
			} else {
				val = res.pop()
				pos = (val ? letras.indexOf(val) : i) + 1
				insert = letra + (letras[pos] || 'M') 
				res.push(insert)
			}
		} else {
			res.push('')
		}
	}

	return res.join('')
}

export default romanize

