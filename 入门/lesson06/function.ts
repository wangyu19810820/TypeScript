var fun:(a:string) => string;
fun = function(a:string):string {
	return 'ok' + a;
}
console.log(fun('zzz'));

interface obj {
	fun1:(a:number)=>number
}
let obj1:obj = {
	fun1:function(a:number):number {
		return a + 10;
	},
}
var r:number = obj1.fun1(3);
console.log(r);
