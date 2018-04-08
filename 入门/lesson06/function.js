var fun;
fun = function (a) {
    return 'ok' + a;
};
console.log(fun('zzz'));
var obj1 = {
    fun1: function (a) {
        return a + 10;
    }
};
var r = obj1.fun1(3);
console.log(r);
