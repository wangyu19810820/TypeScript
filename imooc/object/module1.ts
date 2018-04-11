export var a = "aaa";
export function b() {
    console.log("bb");
}
export class C {
    constructor(public name:string, public age:number) {
    }
    public print():void {
        console.log("name:" + this.name + ",age:" + this.age);
    }
}