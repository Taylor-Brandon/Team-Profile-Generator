const Engineer = require("../lib/engineer");

describe('Engineer class', () => {
    it('should return the name of an engineer after its parameters have been met', () => {
        const newEngineer = new Engineer("Tyrion", 1, "t.lannister@gmail.com", "Tyrion-Lannister");

        expect(newEngineer.name).toEqual("Tyrion");
        expect(newEngineer.id).toEqual(1);
        expect(newEngineer.email).toEqual("t.lannister@gmail.com");
        expect(newEngineer.github).toEqual("Tyrion-Lannister");
    });

    it('should throw an error if provided no arguments', () => {
        const cb = () => new Engineer();
        expect(cb).toThrow();
    });

    it('should throw an error if provided no id', () => {
        const cb = () => new Engineer("Tyrion");
        const err = new Error("Expected id parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if provided no email', () => {
        const cb = () => new Engineer("Tyrion", 1);
        const err = new Error("Expected email parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if provided no GitHub username', () => {
        const cb = () => new Engineer("Tyrion", 1, "t.lannister@gmail.com");
        const err = new Error("Expected GitHub username parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if name is not a string', () => {
        const cb = () => new Engineer(3, 1, "t.lannister@gmail.com", "Tyrion-Lannister");
        const err = new Error("Name must be a string");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if id is not a number', () => {
        const cb = () => new Engineer("Tyrion", "1", "t.lannister@gmail.com", "Tyrion-Lannister");
        const err = new Error("ID must be a number");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if email is not a string', () => {
        const cb = () => new Engineer("Tyrion", 1, 2, "Tyrion-Lannister");
        const err = new Error("Email must be a string");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if GitHub username is not a string', () => {
        const cb = () => new Engineer("Tyrion", 1, "t.lannister@gmail.com", 3);
        const err = new Error("GitHub username must be a string");

        expect(cb).toThrowError(err);
    });
});
