// function.test.js

const { asyncHelloWorld } = require("./function");

describe("asyncHelloWorld", () => {
  it("should resolve to 'hello world'", async () => {
    await expect(asyncHelloWorld()).resolves.toBe("hello world");
  });
});
