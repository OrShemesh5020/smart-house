import React, { useState } from 'react';
import styles from './homePage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Plus } from 'phosphor-react';
import RoomView from '../../components/roomView/RoomView';

export default function HomePage(props) {
  const nav = useNavigate();
  const [flag, toggleFlag] = useState(false);

  let house = props.house;

  const enterRoom = (room) => {
    props.selectRoom(room);
    nav(`/room/${room.name}`);
  };

  const deleteRoom = (index) => {
    house.deleteRoom(index);
    toggleFlag(!flag);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.roomsWrapper}>
        {house.rooms.map((room, index) => {
          return (
            <div
              className={styles.roomViewWrapper}
              key={`${room.name}-${room.type}`}
            >
              <RoomView
                room={room}
                enter={enterRoom}
                id={index}
                delete={deleteRoom}
                select={props.selectRoom}
              />
            </div>
          );
        })}
      </div>
      <Link to='/add-room'>
        <div className={styles.btnWrapper}>
          <Plus size={60} color={'#000'} weight={'bold'}></Plus>
        </div>
      </Link>
    </div>
  );
}
