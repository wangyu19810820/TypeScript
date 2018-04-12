/// <reference path="jquery.d.ts" />
$(document).ready(function(){
    var e = new Employee();
    var v = new EmployeeView(e);
    
})

class Employee {
    id:number = 0;
    name:string = "Unknown";
    status:string = "Initialzed";
}

class EmployeeView {
    box:JQuery;
    idTextBox:JQuery;
    nameTextBox:JQuery;
    statusTextBox:JQuery;
    saveButton:JQuery;
    model:Employee;

    constructor(m:Employee) {
        this.model = m;
        this.createView();
        this.update();
    }

    createView() {
        this.box = $("<div/>").attr("id","employeeView").appendTo($("body"));
        this.idTextBox = $("<input/>").attr("type", "text").attr("id", "idTextBox").appendTo(this.box);
        this.statusTextBox = $("<input/>").attr("type", "text").attr("id", "statusTextBox").appendTo(this.box);
        this.saveButton = $("<input/>").attr("type", "button").attr("id", "saveButton").attr("value", "Save").appendTo(this.box);
    }

    update() {
        this.idTextBox.val(this.model.id.toString);
        this.nameTextBox.val(this.model.name);
        this.statusTextBox.val(this.model.status);
    }
}

class EmployeeController {
    model:Employee;
    view:EmployeeView;

    constructor(m:Employee, v:EmployeeView) {
        this.model = m;
        this.view = v;
        this.subscribeEvents();
    }

    subscribeEvents() {
        this.view.saveButton.click(() => this.saveEmployee());
    }

    saveEmployee() {
        alert("save!");
        this.model.status = "Saved";
        this.view.update();
    }
}