class Manager {
    constructor (managerName, managerId, managerEmail, managerOffice) {
        this.name = managerName;
        this.id = managerId;
        this.email = managerEmail;
        this.office = managerOffice;
    }
    job() {
        return "Manager";
    }
}

module.exports = Manager;