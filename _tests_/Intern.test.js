const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("constructor", () => {
    it("should set the 'Intern' object's 'school' value", () => {
      const school = "Hogwarts";
      const obj = new Intern("Moony", "01", "remus@hogwarts.com", school);

      const schoolResult = obj.school;

      expect(schoolResult).toBe(school);
    });
  });
  describe("getSchool", () => {
    it("should return the 'Intern' object's 'school' value", () => {
      const school = "Hogwarts";
      const obj = new Intern("Moony", "01", "remus@hogwarts.com", school);

      const result = obj.school;

      expect(result).toBe(school);
    });
  });
  describe("getRole", () => {
    it("should return the role of 'Intern'", () => {
      const role = "Intern";
      const obj = new Intern();
      const result = obj.getRole();

      expect(result).toBe(role);
    });
  });
});
