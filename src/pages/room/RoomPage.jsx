import React, { useState } from 'react';
import styles from './roomPage.module.css';
import { useParams, Link } from 'react-router-dom';
import { ArrowArcLeft } from 'phosphor-react';
import AddAppliance from '../../components/addAppliance/AddAppliance';
import Appliance from '../../models/appliance';
import ApplianceView from '../../components/applianceView/ApplianceView';

export default function RoomPage(props) {
  const [showSelect, setShowSelect] = useState(false);
  const [flag, toggleFlag] = useState(false);
  let room = props.room;

  const addAppliance = (prod) => {
    let appliance = new Appliance(prod);
    try {
      room.addAppliance(appliance);
    } catch (error) {
      alert(error);
    } finally {
      setShowSelect(false);
    }
  };

  const toggleAppliance = (index) => {
    room.appliances[index].toggle();
  };

  const deleteAppliance = (index) => {
    room.deleteAppliance(index);
    toggleFlag(!flag);
  };

  const { roomName } = useParams();
  return (
    <div className={styles.roomPage}>
      <div className={styles.back}>
        <Link to='/'>
          <ArrowArcLeft size={70} color='#17210d' weight='bold' />
        </Link>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.roomDetails}>
            <div>
              <h2>Room name: {roomName}</h2>
            </div>
            <div>
              <h2>Room type: {room.type}</h2>
            </div>
          </div>
          <div className={styles.appliances}>
            {room.appliances.map((appliance, index) => {
              return (
                <div
                  key={`${appliance.name}-${index}`}
                  className={styles.applianceWrapper}
                >
                  <ApplianceView
                    appliance={appliance}
                    id={index}
                    toggle={toggleAppliance}
                    delete={deleteAppliance}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.addAppliance}>
          <div className={styles.btnRight}>
            <button
              className={styles.btn}
              onClick={() => {
                setShowSelect(true);
              }}
            >
              Add device
            </button>
          </div>
          <div className={styles.subComponent}>
            {showSelect && (
              <AddAppliance
                add={addAppliance}
                close={() => {
                  setShowSelect(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
