function fun1(param1: string, param2?: string, param3: string = 'wy') {	// 可选参数，带默认值的参数声明，需在普通参数后面
    console.log(`${param1},${param2},${param3}`);
}
fun1('a');
fun1('a', 'b', 'c');
fun1('a', 'b');