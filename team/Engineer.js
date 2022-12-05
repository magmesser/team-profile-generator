class Engineer {
    constructor (engineerName, engineerId, engineerEmail, engineerGithub) {
        this.name = engineerName;
        this.id = engineerId;
        this.email = engineerEmail;
        this.github = engineerGithub;
    }
    job() {
        return "Engineer";
    }
}

module.exports = Engineer;