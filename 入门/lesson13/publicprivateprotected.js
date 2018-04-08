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
    function Person(name, age, tel) {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }
    Person.prototype.printTel = function () {
        console.log(this.tel);
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age, tel) {
        return _super.call(this, name, age, tel) || this;
    }
    Man.prototype.printAge = function () {
        console.log(this.age);
    };
    return Man;
}(Person));
var p1 = new Man("wy", 10, 123783232);
console.log(p1.name);
p1.printAge();
p1.printTel();
