const Intern = require("../lib/intern");

describe('Intern Class', () => {
    it('should return the intern after its parameters have been met', () => {
        const intern = new Intern("Jon Snow", 2, "j.snow@gmail.com", "The Night's Watch");

        expect(intern.name).toEqual("Jon Snow");
        expect(intern.id).toEqual(2);
        expect(intern.email).toEqual("j.snow@gmail.com");
        expect(intern.school).toEqual("The Night's Watch");
    });

    it('should throw an error if provided no arguments', () => {
        const cb = () => new Intern();
        expect(cb).toThrow();
    });

    it('should throw an error if provided no id', () => {
        const cb = () => new Intern("Jon Snow");
        const err = new Error("Expected id parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if provided no email', () => {
        const cb = () => new Intern("Jon Snow", 2);
        const err = new Error("Expected email parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if provided no school', () => {
        const cb = () => new Intern("Jon Snow", 2, "j.snow@gmail.com");
        const err = new Error("Expected school parameter that was not given");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if name is not a string', () => {
        const cb = () => new Intern(3, 1, "j.snow@gmail.com", "The Night's Watch");
        const err = new Error("Name must be a string");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if id is not a number', () => {
        const cb = () => new Intern("Jon Snow", "2", "j.snow@gmail.com", "The Night's Watch");
        const err = new Error("ID must be a number");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if email is not a string', () => {
        const cb = () => new Intern("Jon Snow", 2, 2, "The Night's Watch");
        const err = new Error("Email must be a string");

        expect(cb).toThrowError(err);
    });

    it('should throw an error if school is not a string', () => {
        const cb = () => new Intern("Jon Snow", 2, "j.snow@gmail.com", 3);
        const err = new Error("School must be a string");

        expect(cb).toThrowError(err);
    });
});
