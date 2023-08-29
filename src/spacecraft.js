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
      default:
        break;
    }
  }
}

module.exports = { Spacecraft };
