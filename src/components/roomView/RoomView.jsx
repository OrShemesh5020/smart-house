import { Bathtub, Bed, CookingPot, PencilLine, Trash } from 'phosphor-react';
import React from 'react';
import styles from './roomView.module.css';
import tinycolor from 'tinycolor2';
import { useNavigate } from 'react-router-dom';

let fontSize = 60;
export default function RoomView(props) {
  const nav = useNavigate();

  let room = props.room;

  let colorFont = tinycolor(room.color).isLight() ? '#000' : '#fff';

  let icons = {
    Bedroom: <Bed size={fontSize} color={colorFont} weight='duotone' />,
    Bathroom: <Bathtub size={fontSize} color={colorFont} weight='duotone' />,
    Kitchen: <CookingPot size={fontSize} color={colorFont} weight='duotone' />,
  };

  const deleteRoom = () => {
    if (window.confirm('Are you sure you want to delete this room?'))
      props.delete(props.id);
  };

  const updateRoom = () => {
    props.select(room);
    nav('/update-room');
  };

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: `${room.color}`, color: `${colorFont}` }}
    >
      <div className={styles.header}>
        <div className={styles.left}>
          <PencilLine
            onClick={() => {
              updateRoom();
            }}
            size={30}
            color={colorFont}
            weight='duotone'
          />
        </div>
        <div
          className={styles.middle}
          onClick={() => {
            props.enter(room);
          }}
        ></div>
        <div className={styles.right}>
          <Trash
            onClick={() => {
              deleteRoom();
            }}
            size={30}
            color={colorFont}
            weight='duotone'
          />
        </div>
      </div>
      <div
        className={styles.content}
        onClick={() => {
          props.enter(room);
        }}
      >
        <div className={styles.icon}>{icons[room.type]}</div>
        <div className={styles.name}>{room.name}</div>
      </div>
    </div>
  );
}
