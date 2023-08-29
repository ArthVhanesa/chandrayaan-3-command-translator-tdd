class Spacecraft {
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;

    this.directionMappings = {
      N: { x: 0, y: 1, z: 0 },
      S: { x: 0, y: -1, z: 0 },
      E: { x: 1, y: 0, z: 0 },
      W: { x: -1, y: 0, z: 0 },
      U: { x: 0, y: 0, z: 1 },
      D: { x: 0, y: 0, z: -1 },
    };
  }

  position() {
    return { x: this.x, y: this.y, z: this.z, direction: this.direction };
  }

  moveForward() {
    const { x, y, z } = this.directionMappings[this.direction];
    this.x += x;
    this.y += y;
    this.z += z;
  }

  moveBackward() {
    switch (this.direction) {
      case "N":
        this.y -= 1;
        break;
      case "S":
        this.y += 1;
        break;
      case "E":
        this.x -= 1;
        break;
      case "W":
        this.x += 1;
        break;
      case "U":
        this.z -= 1;
        break;
      case "D":
        this.z += 1;
        break;
      default:
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
      case "W":
        this.direction = "S";
        break;
      case "U":
        this.direction = "N";
        break;
      case "D":
        this.direction = "S";
        break;
      default:
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "S";
        break;
      case "W":
        this.direction = "N";
        break;
      case "U":
        this.direction = "S";
        break;
      case "D":
        this.direction = "N";
        break;
      default:
        break;
    }
  }

  turnUp() {
    if (this.direction != "U") {
      this.direction = "U";
    }
  }

  turnDown() {
    if (this.direction != "D") {
      this.direction = "D";
    }
  }

  translateCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
        case "u":
          this.turnUp();
          break;
        case "d":
          this.turnDown();
          break;
        default:
          console.log(`Unknown command: ${command}`);
      }
    }
    return this;
  }
}

module.exports = { Spacecraft };
