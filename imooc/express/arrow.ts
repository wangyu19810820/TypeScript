function fun(arr) {
    this.a = 'a';
    var r = arr.filter(function(v){
        return v != this.a; // fun1的this.a有问题
    });
    for(var v of r) {
        console.log(v);
    }
}
new fun(['a', 'b', 'c'])

function fun1(arr) {
    this.a = 'a';
    var r = arr.filter(v => {return v != this.a});// fun2的this.a没问题
    for(var v of r) {
        console.log(v);
    }
}
new fun1(['a', 'b', 'c'])

