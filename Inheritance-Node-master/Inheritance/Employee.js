var person1 = require("./Person.js");
var org1 = require("./Organization.js");

class Employee{
    constructor(empid){
        this.empid = empid;
    }

    empDetails(){
        return person1.per.name + " of Age " + person1.per.age + " holding ID: " + this.empid + " is working in " + org1.org.orgname;
    }
}

var obj = new Employee("1806");
console.log(obj.empDetails());

