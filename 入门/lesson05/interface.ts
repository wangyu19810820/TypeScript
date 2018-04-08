interface Person {
    name:string,
    age:number,
	sex?:string,
	[propName:string]:any,
}

let me:Person = {
    name:"test",
    age:10,
	sex:'male',
	tel:123432,
	mail:'adf@dfd.com',
}