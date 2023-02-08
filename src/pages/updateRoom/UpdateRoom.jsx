import React, { useState } from 'react';
import styles from './updateRoom.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowArcLeft } from 'phosphor-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UpdateRoom(props) {
  let room = props.room;

  const [roomType, setRoomType] = useState(room.type);
  const [roomName, setRoomName] = useState(room.name);
  const [color, setColor] = useState(room.color);
  const nav = useNavigate();

  const updateRoom = () => {
    if (!roomType) {
      alert('A room type must be selected');
      return;
    }
    if (!roomName) {
      alert('Choose the name of the room!');
      return;
    }
    if (roomName.length > 5) {
      alert('The room name must be up to 5 characters');
      return;
    }
    if (!color) {
      alert('Choose the color of the room');
      return;
    }
    room.type = roomType;
    room.name = roomName;
    room.color = color;
    nav('/');
  };

  const generateOption = (type) => {
    if (type === roomType) {
      return (
        <option key={type} value={type} selected>
          {type}
        </option>
      );
    }
    return (
      <option key={type} value={type}>
        {type}
      </option>
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.backWrapper}>
            <div className={styles.back}>
              <Link to='/'>
                <ArrowArcLeft size={36} color='#17210d' weight='bold' />
              </Link>
            </div>
          </div>
          <div className={styles.title}>
            <h1>Update room</h1>
          </div>
          <div className={styles.rest}></div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.typeWrapper}>
            <Form.Select
              onChange={(e) => {
                setRoomType(e.target.value);
              }}
            >
              {props.roomsType.map((roomType) => {
                return generateOption(roomType);
              })}
            </Form.Select>
          </div>
          <div className={styles.nameWrapper}>
            <Form.Control
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
              type='text'
              placeholder='Room name'
              value={roomName}
            />
          </div>
          <div className={styles.colorWrapper}>
            <div className={styles.colorLabel}>
              <label for='color' style={{ color: `${color}` }}>
                Color:
              </label>
            </div>
            <input
              id={styles.color}
              type='color'
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <Button className={styles.btn} onClick={updateRoom} variant='primary'>
            Update Room
          </Button>
        </div>
      </div>
    </div>
  );
}
