const { Spacecraft } = require("../src/spacecraft");

describe("Basic initialization testing", () => {
  test("Initialize spacecraft", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");

    expect(spacecraft).toBeDefined();
  });

  test("Initialize spacecraft with values", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "N",
    });
  });
});

describe("Forward movement testing", () => {
  test("Move forward with North", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.moveForward();

    expect(spacecraft).toEqual({
      x: 0,
      y: 1,
      z: 0,
      direction: "N",
    });
  });
});
