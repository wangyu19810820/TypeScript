interface Test1 {
    say1();
}

interface Test2 {
    say2();
}

// 接口可以继承接口
interface Test3 extends Test2 {
    say3();
}

// 接口可以继承类
interface Test4 extends Man {

}

class Man implements Test1, Test3 {
    constructor(){}

    public say1() {
        console.log("say1");
    }

    public say2() {
        console.log("say2");
    }

    public say3() {
        console.log("say3");
    }
}

var m = new Man();
m.say1();
m.say2();
m.say3();
