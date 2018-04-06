function fun(a:string | number) {
    return (<string>a).length;
}

console.log(fun(123));
console.log(fun("abcd"));
