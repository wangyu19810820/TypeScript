var Man = /** @class */ (function () {
    function Man() {
    }
    Man.prototype.say1 = function () {
        console.log("say1");
    };
    Man.prototype.say2 = function () {
        console.log("say2");
    };
    Man.prototype.say3 = function () {
        console.log("say3");
    };
    return Man;
}());
var m = new Man();
m.say1();
m.say2();
m.say3();
