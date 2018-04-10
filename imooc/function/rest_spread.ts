function fun1(arg1, arg2, ...args) {
    console.log(arg1 + "," + arg2);
    args.forEach(arg => console.log(arg));
}
fun1('a', 'b', 'c' + 'd' + 'e');
