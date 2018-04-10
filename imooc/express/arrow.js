function fun(arr) {
    this.a = 'a';
    var r = arr.filter(function (v) {
        return v != this.a; // fun1的this.a有问题
    });
    for (var _i = 0, r_1 = r; _i < r_1.length; _i++) {
        var v = r_1[_i];
        console.log(v);
    }
}
new fun(['a', 'b', 'c']);
function fun1(arr) {
    var _this = this;
    this.a = 'a';
    var r = arr.filter(function (v) { return v != _this.a; }); // fun2的this.a没问题
    for (var _i = 0, r_2 = r; _i < r_2.length; _i++) {
        var v = r_2[_i];
        console.log(v);
    }
}
new fun1(['a', 'b', 'c']);
