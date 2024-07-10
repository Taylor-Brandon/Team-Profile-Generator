jest.mock("inquirer");

describe("Employee Class", () => {
    it('should prompt users with a set of questions once the application has started', async () => {
        const mockPrompts = [
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your id?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
            },
        ];

        inquirer.prompt.mockResolvedValueOnce({
            name: 'Daemon Targaryen',
            id: 2,
            email: 'd.targ@gmail.com',
            officeNumber: 'DragonStone: 492',
        });

        await startApp();

        expect(inquirer.prompt).toHaveBeenCalledTimes(1);
        expect(inquirer.prompt).toHaveBeenCalledWith(mockPrompts);
    });

    it('should prompt the user with a menu once a manager has been submitted', async () => { 
        const mockMenuPrompt = [
            {
                type: 'list',
                message: 'Select which team member you would like to add',
                name: 'menu',
                choices: ['Engineer', 'Intern', 'Finish Building'],
            },
        ];

        inquirer.prompt.mockResolvedValueOnce({
            menu: 'Engineer',
        });

        await getRole(); 
        expect(inquirer.prompt).toHaveBeenCalledTimes(1);
        expect(inquirer.prompt).toHaveBeenCalledWith(mockMenuPrompt);
    });

    it('should generate the html file once the user has selected to finish building the team', async () => {
        const mockMenuPrompt = [
            {
                type: 'list',
                message: 'Select which team member you would like to add',
                name: 'menu',
                choices: ['Engineer', 'Intern', 'Finish Building'],
            }
        ];

        inquirer.prompt.mockResolvedValueOnce({
            menu: 'Finish Building',
        });

        await generateHtml();
        expect(inquirer.prompt).toHaveBeenCalledTimes(1);
        expect(inquirer.prompt).toHaveBeenCalledWith(mockMenuPrompt);
    });
});