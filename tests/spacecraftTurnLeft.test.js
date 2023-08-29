const { Spacecraft } = require("../src/spacecraft");

describe("Turn left testing", () => {
  test("Move left with North", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.turnLeft();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "W",
    });
  });

  test("Move left with South", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "S");
    spacecraft.turnLeft();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "E",
    });
  });

  test("Move left with East", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "E");
    spacecraft.turnLeft();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "N",
    });
  });

  test("Move left with West", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "W");
    spacecraft.turnLeft();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "S",
    });
  });

  test("Move left with Up", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "U");
    spacecraft.turnLeft();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "N",
    });
  });

  test("Move left with Down", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "D");
    spacecraft.turnLeft();

    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "S",
    });
  });
});
