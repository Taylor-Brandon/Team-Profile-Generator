const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
}

async getOfficeNumber() {
    const { officeNumber } = await inquirer.createPromptModule([
        {
            type: 'input',
            messagee: 'What is your office number?',
            name: 'officeNumber'
        }
    ])
}
getRole();
}

module.exports = Manager;