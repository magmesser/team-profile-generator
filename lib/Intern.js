const Employee = require("./Employee");

class Intern extends Employee{
    // constructor(internName, internId, internEmail, internSchool) {
    //     this.name = internName;
    //     this.id = internId;
    //     this.email = internEmail;
    //     this.school = internSchool;      
    // }

    constructor(internName, internId, internEmail, internSchool) {
        super (internName, internId, internEmail);
        this.school = internSchool;        
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;