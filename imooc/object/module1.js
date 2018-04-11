"use strict";
exports.__esModule = true;
exports.a = "aaa";
function b() {
    console.log("bb");
}
exports.b = b;
var C = /** @class */ (function () {
    function C(name, age) {
        this.name = name;
        this.age = age;
    }
    C.prototype.print = function () {
        console.log("name:" + this.name + ",age:" + this.age);
    };
    return C;
}());
exports.C = C;
