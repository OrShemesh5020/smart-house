class Room {
  appliances = [];
  constructor(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
  }

  addAppliance(prod) {
    if (this.appliances.length === 5)
      throw new Error('length is bugger than 5');
    if (prod.name === 'Stereo system' && this.hasStereo())
      throw new Error('Stereo is already exists!');
    if (this.type !== 'Bathroom' && prod.name === 'Boiler')
      throw new Error('A boiler can only be added in the bathroom');
    this.appliances.push(prod);
  }
  hasStereo() {
    for (let appliance of this.appliances) {
      if (appliance.name === 'Stereo system') return true;
    }
    return false;
  }

  deleteAppliance(id) {
    let filteredAppliances = this.appliances.filter((appliance, index) => {
      return index !== id;
    });
    this.appliances = [...filteredAppliances];
  }
}

module.exports = Room;
