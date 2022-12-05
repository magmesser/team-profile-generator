class Intern {
    constructor(internName, internId, internEmail, internSchool) {
        this.name = internName;
        this.id = internId;
        this.email = internEmail;
        this.school = internSchool;      
    }
    job() {
        return "Intern";
    }
}

module.exports = Intern;