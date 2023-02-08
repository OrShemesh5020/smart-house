import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AddRoom from './pages/addRoom/AddRoom';
import Header from './components/header/Header';
import RoomPage from './pages/room/RoomPage';
import Room from './models/room';
import { roomsTypes, appliance } from './data/data';
import { Provider } from './contextApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import House from './models/house';
import UpdateRoom from './pages/updateRoom/UpdateRoom';

let house = new House();

function App() {
  const [selectedRoom, setSelectedRoom] = useState({});

  const addRoom = (type, name, color) => {
    let room = new Room(type, name, color);
    try {
      house.addRoom(room);
    } catch (error) {
      alert(error);
    }
  };

  const selectRoom = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<HomePage house={house} selectRoom={selectRoom} />}
          />
          <Route
            path='/add-room'
            element={<AddRoom rooms={roomsTypes} addRoom={addRoom} />}
          />
          <Route
            path='/update-room'
            element={<UpdateRoom room={selectedRoom} roomsType={roomsTypes} />}
          />
          <Route
            path='/room/:roomName'
            element={
              <Provider value={appliance}>
                <RoomPage room={selectedRoom} />
              </Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
