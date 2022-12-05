const Employee = require("./Employee");

class Manager extends Employee {
    // constructor (managerName, managerId, managerEmail, managerOffice) {
    //     this.name = managerName;
    //     this.id = managerId;
    //     this.email = managerEmail;
    //     this.office = managerOffice;
    // }

    constructor (managerName, managerId, managerEmail, managerOffice) {
        super (managerName, managerId, managerEmail);
        this.office = managerOffice;
    }

    getOfficeNumber() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
}



module.exports = Manager;