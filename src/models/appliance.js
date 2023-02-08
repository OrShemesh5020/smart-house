class Appliance {
  constructor(name) {
    this.name = name;
    this.power = false;
  }

  toggle() {
    this.power = !this.power;
  }
}

module.exports = Appliance;
