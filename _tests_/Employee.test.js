const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should set the 'Employee' object's 'name' value", () => {
      const name = "Padfoot";
      const obj = new Employee(name);

      const nameResult = obj.name;

      expect(nameResult).toBe(name);
    });
    it("should set the 'Employee' object's 'id' value", () => {
      const id = "03";
      const obj = new Employee("Padfoot", id);

      const idResult = obj.id;

      expect(idResult).toBe(id);
    });
    it("should set the 'Employee' object's 'email' value", () => {
      const email = "sirius@hogwarts.com";
      const obj = new Employee("Padfoot", "03", email);

      const emailResult = obj.email;

      expect(emailResult).toBe(email);
    });
  });
  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      const name = "Prongs";
      const obj = new Employee(name);

      const result = obj.name;

      expect(result).toBe(name);
    });
  });
  describe("getId", () => {
    it("should return the 'Employee' object's 'id' value", () => {
      const id = "04";
      const obj = new Employee("Prongs", id);

      const result = obj.id;

      expect(result).toBe(id);
    });
  });
  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      const email = "james@hogwarts.com";
      const obj = new Employee("Prongs", "04", email);

      const result = obj.email;

      expect(result).toBe(email);
    });
  });
  describe("getRole", () => {
    it("should return the role of 'Employee'", () => {
      const role = "Employee";
      const obj = new Employee();
      const result = obj.getRole();

      expect(result).toBe(role);
    });
  });
});
