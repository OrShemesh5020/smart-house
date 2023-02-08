class House {
  rooms = [];

  addRoom(newRoom) {
    let existRoom = this.rooms.find((room) => {
      return room.name === newRoom.name && room.type === newRoom.type;
    });
    if (existRoom) throw new Error('The room is already created');

    this.rooms.push(newRoom);
  }

  deleteRoom(id) {
    let filteredRooms = this.rooms.filter((room, index) => {
      return index !== id;
    });
    this.rooms = [...filteredRooms];
  }
}

module.exports = House;
