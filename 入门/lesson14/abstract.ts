abstract class Bread {
    constructor() {

    }

    public abstract way();
}

class NewBread extends Bread {
    constructor() {
        super();
    }

    public way() {
        console.log("这是一个做面包的方法！");
    }
}

var b = new NewBread();
b.way();