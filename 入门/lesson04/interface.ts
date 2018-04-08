interface Person {
    name:string,
    age:number,
    sex?:string,            // 可缺省
    [propName:string]:any,  // 可添加自定义属性
}

let me:Person = {
    name:"test",
    age:10,
    sex:'male',
    tel:123233,
    mail:'adfs@dfa.com',
}