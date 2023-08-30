const { Spacecraft } = require("../src/spacecraft");

describe("Turn right testing", () => {
  const testCases = [
    { x: 0, y: 0, z: 0, direction: "N" },
    { x: 0, y: 0, z: 0, direction: "S" },
    { x: 0, y: 0, z: 0, direction: "W" },
    { x: 0, y: 0, z: 0, direction: "E" },
    { x: 0, y: 0, z: 0, direction: "U" },
    { x: 0, y: 0, z: 0, direction: "D" },
  ];

  for (const testCase of testCases) {
    test(`Turn Right with direction ${testCase.direction}`, () => {
      const spacecraft = new Spacecraft(
        testCase.x,
        testCase.y,
        testCase.z,
        testCase.direction
      );
      spacecraft.turnRight();

      var directions = ["N", "E", "S", "W"];
      var expectedDirection = "";

      if (testCase.direction === "U" || testCase.direction === "D") {
        const directions = {
          U: "S",
          D: "N",
        };
        expectedDirection = directions[testCase.direction];
      } else {
        const currentIdx = directions.indexOf(testCase.direction);
        const nextIdx = (currentIdx + 1) % directions.length;
        console.log("nextIdx", nextIdx);
        expectedDirection = directions[nextIdx];
      }

      expect(spacecraft.position()).toEqual({
        x: testCase.x,
        y: testCase.y,
        z: testCase.z,
        direction: expectedDirection,
      });
    });
  }
});
