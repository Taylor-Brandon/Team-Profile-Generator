const Employee = require('./employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

   async getSchool() {
    const {school} = await inquirer .prompt([
        {
            type: 'input',
            message: 'What is your school?',
            name: 'school',
        },
    ]);

    this.getRole();
    }
}

module.exports = Intern;