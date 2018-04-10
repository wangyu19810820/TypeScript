function fun1(arg1, arg2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log(arg1 + "," + arg2);
    args.forEach(function (arg) { return console.log(arg); });
}
fun1('a', 'b', 'c' + 'd' + 'e');
