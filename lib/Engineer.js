const Employee = require("./Employee");

class Engineer extends Employee {
    // constructor (engineerName, engineerId, engineerEmail, engineerGithub) {
    //     this.name = engineerName;
    //     this.id = engineerId;
    //     this.email = engineerEmail;
    //     this.github = engineerGithub;
    // }

        constructor (engineerName, engineerId, engineerEmail, engineerGithub) {
            super (engineerName, engineerId, engineerEmail);
            this.github = engineerGithub;
        }
    
        getGithub() {
            return this.github;
        }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;