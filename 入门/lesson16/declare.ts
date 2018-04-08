function f1(name:string):string;
function f1(name:any):any {
    return "f1";
}

interface f2 {
    say1();
}
interface f2 {
    say2();
}

class M implements f2 {
    constructor(){}

    say1() {

    }
    say2() {

    }

}