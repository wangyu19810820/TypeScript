class Person {
    constructor(public name, public age) {
        // 自动新建属性name，age和赋值
    }

    print() {   // 默认public
        console.log(this.name + "," + this.age);
    }
}

var p = new Person("abc", 10);
p.print();