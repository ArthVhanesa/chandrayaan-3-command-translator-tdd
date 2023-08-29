const { Spacecraft } = require("../src/spacecraft");

describe("Basic initialization testing", () => {
  test("Initialize spacecraft", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");

    expect(spacecraft.position()).toBeDefined();
  });

  const testCases = [
    { x: 0, y: 0, z: 0, direction: "N" },
    { x: 0, y: 0, z: 0, direction: "S" },
    { x: 0, y: 0, z: 0, direction: "W" },
    { x: 0, y: 0, z: 0, direction: "E" },
    { x: 0, y: 0, z: 0, direction: "U" },
    { x: 0, y: 0, z: 0, direction: "D" },
  ];

  for (const testCase of testCases) {
    test(`Initialize spacecraft with values`, () => {
      const spacecraft = new Spacecraft(
        testCase.x,
        testCase.y,
        testCase.z,
        testCase.direction
      );

      expect(spacecraft.position()).toEqual({
        x: testCase.x,
        y: testCase.y,
        z: testCase.z,
        direction: testCase.direction,
      });
    });
  }
});

describe("Spacecraft translate command test", () => {
  test("Translate command 1", () => {
    // Arrange
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    // Act
    spacecraft.translateCommands(["f", "r", "u", "b", "l"]);
    // Assert
    expect(spacecraft.position()).toEqual({
      x: 0,
      y: 1,
      z: -1,
      direction: "N",
    });
  });

  test("Translate command 2", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.translateCommands(["f", "r", "u", "b", "l", "b", "b", "d", "l"]);
    expect(spacecraft.position()).toEqual({
      x: 0,
      y: -1,
      z: -1,
      direction: "S",
    });
  });

  test("Translate command 3", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.translateCommands(["f", "r", "u", "b", "l", "b", "b"]);
    expect(spacecraft.position()).toEqual({
      x: 0,
      y: -1,
      z: -1,
      direction: "N",
    });
  });
});
