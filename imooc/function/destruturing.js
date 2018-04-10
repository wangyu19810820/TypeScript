var obj = {
    code: "IBM",
    price: 100,
    obj: {
        me: 'a',
        tel: '123'
    }
};
var code = obj.code, p = obj.price, me = obj.obj.me;
console.log(code + "," + p + "," + obj + "," + me);
var arr = ['a', 'b', 'c'];
var num1 = arr[0], num2 = arr[2];
console.log(num1 + "," + num2);
