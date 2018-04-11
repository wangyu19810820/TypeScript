var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // 自动新建属性name，age和赋值
    }
    Person.prototype.print = function () {
        console.log(this.name + "," + this.age);
    };
    return Person;
}());
var p = new Person("abc", 10);
p.print();
