var obj = {
    code:"IBM",
    price:100,
    obj:{
        me:'a',
        tel:'123',
    }
}
var {code, price:p, obj:{me}} = obj;
console.log(code + "," + p + "," + obj + "," + me);

var arr = ['a', 'b', 'c'];
var [num1, ,num2] = arr;
console.log(num1 + "," + num2);
