function fun1(obj) {
    console.log(obj.name);
    console.log(obj.age);
    obj.eat();
}
fun1({ name: 'abc', age: 10, eat: function () {
        console.log("eat");
    } });
