class Person {
    public name;
    protected age;
    private tel;

    constructor(name:string, age:number, tel:number) {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }

    public printTel():void {
        console.log(this.tel);
    }
}

class Man extends Person {
    constructor(name:string, age:number, tel:number) {
        super(name, age, tel);
    }

    public printAge():void {
        console.log(this.age);
    }
}

var p1 = new Man("wy", 10, 123783232);
console.log(p1.name);
p1.printAge();
p1.printTel();