class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print_() {
        console.log("Person:" + this.name + "," + this.age);
    }
}

class Man extends Person {
    tel;
    constructor(name, age, tel) {
        super(name, age);
        this.tel = tel;
    }
    print_() {
        super.print_();
        console.log(this.tel);
    }
    static hello() {
        console.log('hello world';)
    }
}

var p:Person = new Person('wangyu', 10);
p.print_();

var m:Man = new Man('www', 20, 123);
m.print_();
Man.hello();