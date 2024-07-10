const Manager = require("../lib/manager");

describe('Manager Class', () => {
    it('should return the manager after its parameters have been met', () => {
        const manager = new Manager("Rhaenyra Targaryen", 4, "r.targ@gmail.com", "DragonStone: 425");

        expect(manager.name).toEqual("Rhaenyra Targaryen");
        expect(manager.id).toEqual(4);
        expect(manager.email).toEqual("r.targ@gmail.com");
        expect(manager.officeNumber).toEqual("DragonStone: 425");
    });

    it('should throw an error if provided no arguments', () => {
        const cb = () => new Manager();
        expect(cb).toThrow();
    });

    it('should throw an error if provided no id', () => {
        const cb = () => new Manager("Rhaenyra Targaryen");
        const err = new Error("Expected id parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if provided no email', () => {
        const cb = () => new Manager("Rhaenyra Targaryen", 4);
        const err = new Error("Expected email parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if provided no office number', () => {
        const cb = () => new Manager("Rhaenyra Targaryen", 4, "r.targ@gmail.com");
        const err = new Error("Expected office number parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if name is not a string', () => {
        const cb = () => new Manager(3, 4, "r.targ@gmail.com", "DragonStone: 425");
        const err = new Error("Name must be a string");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if id is not a number', () => {
        const cb = () => new Manager("Rhaenyra Targaryen", "4", "r.targ@gmail.com", "DragonStone: 425");
        const err = new Error("ID must be a number");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if email is not a string', () => {
        const cb = () => new Manager("Rhaenyra Targaryen", 4, 2, "DragonStone: 425");
        const err = new Error("Email must be a string");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if office number is not a string', () => {
        const cb = () => new Manager("Rhaenyra Targaryen", 4, "r.targ@gmail.com", 3);
        const err = new Error("Office number must be a string");

        expect(cb).toThrowError(err);
    });
});
