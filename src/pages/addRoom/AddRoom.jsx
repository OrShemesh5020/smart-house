import React, { useState } from 'react';
import styles from './addRoom.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowArcLeft } from 'phosphor-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddRoom(props) {
  const [roomType, setRoomType] = useState('');
  const [roomName, setRoomName] = useState('');
  const [color, setColor] = useState('#60D7A4');
  const nav = useNavigate();

  const createRoom = () => {
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
    try {
      props.addRoom(roomType, roomName, color);
    } catch (error) {
      alert(error);
      return;
    }
    nav('/');
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
            <h1>Add new room</h1>
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
              <option value='' disabled selected hidden>
                Select a new room
              </option>
              {props.rooms.map((roomType) => {
                return (
                  <option key={roomType} value={roomType}>
                    {roomType}
                  </option>
                );
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
          <Button className={styles.btn} onClick={createRoom} variant='primary'>
            Create Room
          </Button>
        </div>
      </div>
    </div>
  );
}
