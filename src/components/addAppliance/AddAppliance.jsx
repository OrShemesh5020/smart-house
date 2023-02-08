import React, { useState } from 'react';
import styles from './addAppliance.module.css';
import { Consumer } from '../../contextApi';
import Form from 'react-bootstrap/Form';
import { X } from 'phosphor-react';

export default function AddAppliance(props) {
  const [appliance, setAppliance] = useState('');

  const add = () => {
    if (!appliance) {
      alert('you have select device');
      return;
    }
    props.add(appliance);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <X
          onClick={() => {
            props.close();
          }}
          size={45}
          color='#1d1b1b'
          weight='duotone'
          className={styles.icon}
        />
      </div>
      <div className={styles.selectWrapper}>
        <Form.Select
          onChange={(e) => {
            setAppliance(e.target.value);
          }}
          className={styles.select}
        >
          <option value='' disabled hidden selected>
            Select device
          </option>
          <Consumer>
            {(appliances) => {
              return appliances.map((appliance) => {
                return <option value={appliance}>{appliance}</option>;
              });
            }}
          </Consumer>
        </Form.Select>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}
