const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("constructor", () => {
    it("should set the 'Manager' object's 'office' value", () => {
      const office = "Headmaster";
      const obj = new Manager("Albus", "00", "dumbledore@hogwarts.com", office);

      const officeResult = obj.office;

      expect(officeResult).toBe(office);
    });
  });
  describe("getOfficeNumber", () => {
    it("should return the 'Manager' object's 'office' value", () => {
      const office = "Headmaster";
      const obj = new Manager("Albus", "00", "dumbledore@hogwarts.com", office);

      const result = obj.office;

      expect(result).toBe(office);
    });
  });
  describe("getRole", () => {
    it("should return the role of 'Manager'", () => {
      const role = "Manager";
      const obj = new Manager();
      const result = obj.getRole();

      expect(result).toBe(role);
    });
  });
});
