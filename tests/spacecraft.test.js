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

  test("Move forward with West", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "W");
    spacecraft.moveForward();

    expect(spacecraft).toEqual({
      x: -1,
      y: 0,
      z: 0,
      direction: "W",
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

  test("Move backward with South", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "S");
    spacecraft.moveBackward();

    expect(spacecraft).toEqual({
      x: 0,
      y: 1,
      z: 0,
      direction: "S",
    });
  });

  test("Move backward with West", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "W");
    spacecraft.moveBackward();

    expect(spacecraft).toEqual({
      x: 1,
      y: 0,
      z: 0,
      direction: "W",
    });
  });

  test("Move backward with East", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "E");
    spacecraft.moveBackward();

    expect(spacecraft).toEqual({
      x: -1,
      y: 0,
      z: 0,
      direction: "E",
    });
  });

  test("Move backward with Up", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "U");
    spacecraft.moveBackward();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: -1,
      direction: "U",
    });
  });

  test("Move backward with Down", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "D");
    spacecraft.moveBackward();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 1,
      direction: "D",
    });
  });
});

describe("Turn left testing", () => {
  test("Move left with North", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.turnLeft();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "W",
    });
  });

  test("Move left with South", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "S");
    spacecraft.turnLeft();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "E",
    });
  });

  test("Move left with East", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "E");
    spacecraft.turnLeft();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "N",
    });
  });

  test("Move left with West", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "W");
    spacecraft.turnLeft();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "S",
    });
  });

  test("Move left with Up", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "U");
    spacecraft.turnLeft();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "N",
    });
  });

  test("Move left with Down", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "D");
    spacecraft.turnLeft();

    expect(spacecraft).toEqual({
      x: 0,
      y: 0,
      z: 0,
      direction: "S",
    });
  });
});
