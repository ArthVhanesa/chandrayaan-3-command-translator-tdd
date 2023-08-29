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

  test("Move forward with South", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "S");
    spacecraft.moveForward();

    expect(spacecraft).toEqual({
      x: 0,
      y: -1,
      z: 0,
      direction: "S",
    });
  });

  test("Move forward with East", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "E");
    spacecraft.moveForward();

    expect(spacecraft).toEqual({
      x: 1,
      y: 0,
      z: 0,
      direction: "E",
    });
  });

  test("Move forward with Up", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "U");
    spacecraft.moveForward();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 1,
      direction: "U",
    });
  });

  test("Move forward with Down", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "D");
    spacecraft.moveForward();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: -1,
      direction: "D",
    });
  });
});

describe("Backward movement testing", () => {
  test("Move backward with North", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.moveBackward();

    expect(spacecraft).toEqual({
      x: 0,
      y: -1,
      z: 0,
      direction: "N",
    });
  });
});
