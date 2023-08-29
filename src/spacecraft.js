class Spacecraft {
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }

  moveForward() {
    switch (this.direction) {
      case "N":
        this.y += 1;
        break;
      case "S":
        this.y -= 1;
        break;
      case "E":
        this.x += 1;
        break;
      case "W":
        this.x -= 1;
        break;
      case "U":
        this.z += 1;
        break;
      case "D":
        this.z -= 1;
        break;
      default:
        break;
    }
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
      default:
        break;
    }
  }
}

module.exports = { Spacecraft };
