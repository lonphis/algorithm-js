/*
* 数学算法
* @author lonphis
* @date 2015-08-17
*/

//最大公约数 greatest common divisor
function gcd(a, b){
	var r;
	if ((r = a % b) == 0) {
		return b;
	}else{
		a = b;
		b = r;
		return gcd(a, b);
	}
}

//最大公约数判定2
function stem(a, b){
	var a1, b1
	//有一个为零，返回另一个
	if(a === 0)
		return b;
	else if(b === 0)
		return a;
	//判断a,b的奇偶性
	if ((a%2===0) && (b%2===0) ) {
			a1 = a/2;
			b1 = b/2;
			return 2 * stem(a1,b1);
	}

	if(a%2 === 0){
			a1 = a/2;
			b1 = b;
	}else if(b%2 ===0){
			b1 = b/2;
			a1 = a;
	}else{
			a1 = Math.abs(a-b);
			b1 = Math.min(a,b);
	}
	return stem(a1,b1);
}
//最小公倍数
function lcm(a, b){
	var c = gcd(a, b);
	return (a*b)/c;
}
//是否是素数
function isPrime(a){
	if(a <= 1)
		return false;
	var temp = Math.floor(Math.sqrt(a));
	for(var i=2; i <= temp; i++){
		if (a % i === 0) {
			return false;	
		}
	}
	return true;
}