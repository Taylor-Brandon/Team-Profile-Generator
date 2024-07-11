const Employee = require('./employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

   async getGithub() {
    const {github} = await inquirer .prompt([
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
    ]);

    this.getRole();
    }
}

module.exports = Engineer;