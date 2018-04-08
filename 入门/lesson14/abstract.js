var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bread = /** @class */ (function () {
    function Bread() {
    }
    return Bread;
}());
var NewBread = /** @class */ (function (_super) {
    __extends(NewBread, _super);
    function NewBread() {
        return _super.call(this) || this;
    }
    NewBread.prototype.way = function () {
        console.log("这是一个做面包的方法！");
    };
    return NewBread;
}(Bread));
var b = new NewBread();
b.way();
