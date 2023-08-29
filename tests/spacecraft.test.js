const { Spacecraft } = require("../src/spacecraft");

test("Initialize spacecraft with values", () => {
  const spacecraft = new Spacecraft(0, 0, 0, "N");

  expect(spacecraft).toBeDefined();
});
