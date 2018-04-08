var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print_ = function () {
        console.log("Person:" + this.name + "," + this.age);
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age, tel) {
        var _this = _super.call(this, name, age) || this;
        _this.tel = tel;
        return _this;
    }
    Man.prototype.print_ = function () {
        _super.prototype.print_.call(this);
        console.log(this.tel);
    };
    Man.hello = function () {
        console.log('hello world');
    };
    return Man;
}(Person));
var p = new Person('wangyu', 10);
p.print_();
var m = new Man('www', 20, 123);
m.print_();
Man.hello();
