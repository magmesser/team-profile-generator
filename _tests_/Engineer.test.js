const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("constructor", () => {
    it("should set the 'Engineer' object's 'github' value", () => {
      const github = "peterp";
      const obj = new Engineer("Wormtail", "02", "peter@hogwarts.com", github);

      const githubResult = obj.github;

      expect(githubResult).toBe(github);
    });
  });
  describe("getGithub", () => {
    it("should return the 'Engineer' object's 'github' value", () => {
      const github = "peterp";
      const obj = new Engineer("Wormtail", "02", "peter@hogwarts.com", github);

      const result = obj.github;

      expect(result).toBe(github);
    });
  });
  describe("getRole", () => {
    it("should return the role of 'Engineer'", () => {
      const role = "Engineer";
      const obj = new Engineer();
      const result = obj.getRole();

      expect(result).toBe(role);
    });
  });
});
