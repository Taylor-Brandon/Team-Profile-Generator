const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    createHtml() {
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Team Profile</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css">
            </head>
            <body>
                <header class="bg-danger text-white text-center p-5">
                    <h1 class="fs-2">My Team</h1>
                </header>
                <section class="container d-flex justify-content-center m-3">
                    <div class="card w-25 border-bottom shadow-lg">
                        <div class="card-header bg-primary text-white">
                            <h4 class="ms-3">${this.name}</h4>
                            <h5 class="ms-2"><i class="bi bi-cup-hot-fill me-1"></i>Manager</h5>
                        </div>
                        <div class="card-body bg-secondary bg-opacity-10">
                            <ul class="list-group"></ul>
                            <li class="list-group-item mt-5 ms-2 me-2">ID: ${this.id}</li>
                            <li class="list-group-item ms-2 me-2">Email: ${this.email}</li>
                            <li class="list-group-item mb-4 ms-2 me-2">Office Number:</li>
                        </div>
                    </div>
                    <div class="card w-25 border-bottom shadow-lg ms-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="ms-3">${this.name}</h4>
                            <h5 class="ms-2"><i class="bi bi-eyeglasses me-2"></i>Engineer</h5>
                        </div>
                        <div class="card-body bg-secondary bg-opacity-10">
                            <ul class="list-group"></ul>
                            <li class="list-group-item mt-5 ms-2 me-2">ID: ${this.id}</li>
                            <li class="list-group-item ms-2 me-2">Email: ${this.email}</li>
                            <li class="list-group-item mb-4 ms-2 me-2">Github:</li>
                        </div>
                    </div>
                    <div class="card w-25 border-bottom shadow-lg ms-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="ms-3">${this.name}</h4>
                            <h5 class="ms-2"><i class="bi bi-mortarboard-fill me-2"></i>Student</h5>
                        </div>
                        <div class="card-body bg-secondary bg-opacity-10">
                            <ul class="list-group"></ul>
                            <li class="list-group-item mt-5 ms-2 me-2">ID: ${this.id}</li>
                            <li class="list-group-item ms-2 me-2">Email: ${this.email}</li>
                            <li class="list-group-item mb-4 ms-2 me-2">School:</li>
                        </div>
                    </div>
                </section>
            </body>
        </html>`;
    }

    async getName() {
        const { name } = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
        ]);
        this.name = name;
        await this.getId();
    }

    async getId() {
        const { id } = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is your id?',
                name: 'id',
            },
        ]);
        this.id = id;
        await this.getEmail();
    }

    async getEmail() {
        const { email } = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
        ]);
        this.email = email;
        await this.getRole();
    }

    async getRole() {
        const { menu } = await inquirer.prompt([
            {
                type: 'list',
                message: 'Who would you like to add?',
                choices: ['Engineer', 'Intern', 'Finish Building'],
                name: 'menu',
            },
        ]);

        if (menu === 'Finish Building') {
            this.generateHtml();
        } else {
            //finish later
        }
    }

    generateHtml() {
        const htmlContent = this.createHtml();
        fs.writeFile('index.html', htmlContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }
}

module.exports = Employee;

