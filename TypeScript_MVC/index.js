/// <reference path="jquery.d.ts" />
$(document).ready(function () {
    var e = new Employee();
    var v = new EmployeeView(e);
});
var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 0;
        this.name = "Unknown";
        this.status = "Initialzed";
    }
    return Employee;
}());
var EmployeeView = /** @class */ (function () {
    function EmployeeView(m) {
        this.model = m;
        this.createView();
        this.update();
    }
    EmployeeView.prototype.createView = function () {
        this.box = $("<div/>").attr("id", "employeeView").appendTo($("body"));
        this.idTextBox = $("<input/>").attr("type", "text").attr("id", "idTextBox").appendTo(this.box);
        this.statusTextBox = $("<input/>").attr("type", "text").attr("id", "statusTextBox").appendTo(this.box);
        this.saveButton = $("<input/>").attr("type", "button").attr("id", "saveButton").attr("value", "Save").appendTo(this.box);
    };
    EmployeeView.prototype.update = function () {
        this.idTextBox.val(this.model.id.toString);
        this.nameTextBox.val(this.model.name);
        this.statusTextBox.val(this.model.status);
    };
    return EmployeeView;
}());
var EmployeeController = /** @class */ (function () {
    function EmployeeController(m, v) {
        this.model = m;
        this.view = v;
        this.subscribeEvents();
    }
    EmployeeController.prototype.subscribeEvents = function () {
        var _this = this;
        this.view.saveButton.click(function () { return _this.saveEmployee(); });
    };
    EmployeeController.prototype.saveEmployee = function () {
        alert("save!");
        this.model.status = "Saved";
        this.view.update();
    };
    return EmployeeController;
}());
