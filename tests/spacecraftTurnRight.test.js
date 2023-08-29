const { Spacecraft } = require("../src/spacecraft");

describe("Turn right testing", () => {
  test("Move right with North", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.turnRight();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "E",
    });
  });

  test("Move right with South", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "S");
    spacecraft.turnRight();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "W",
    });
  });

  test("Move right with East", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "E");
    spacecraft.turnRight();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "S",
    });
  });

  test("Move right with West", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "W");
    spacecraft.turnRight();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "N",
    });
  });

  test("Move right with Up", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "U");
    spacecraft.turnRight();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "S",
    });
  });

  test("Move right with Down", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "D");
    spacecraft.turnRight();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "N",
    });
  });
});
