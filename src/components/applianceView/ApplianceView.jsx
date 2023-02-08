import { Lamp, SpeakerHigh, ThermometerHot, Trash, Wind } from 'phosphor-react';
import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import styles from './applianceView.module.css';

export default function ApplianceView(props) {
  let appliance = props.appliance;
  const [power, setPower] = useState(appliance.power);
  let backGroundColor = power ? '#7dd87d' : '#eb2632';
  let colorFont = tinycolor(backGroundColor).isLight() ? '#000' : '#fff';

  let icon;
  let iconSize = 35;

  const toggle = () => {
    props.toggle(props.id);
    setPower(!power);
  };

  const deleteDevice = () => {
    if (window.confirm('Are you sure you want to delete this device?'))
      props.delete(props.id);
  };

  switch (appliance.name) {
    case 'Air-Conditioner':
      icon = <Wind size={iconSize} color={colorFont} weight='duotone' />;
      break;
    case 'Lamp':
      icon = <Lamp size={iconSize} color={colorFont} weight='duotone' />;
      break;
    case 'Stereo system':
      icon = <SpeakerHigh size={iconSize} color={colorFont} weight='duotone' />;
      break;
    case 'Boiler':
      icon = (
        <ThermometerHot size={iconSize} color={colorFont} weight='duotone' />
      );
      break;
    default:
      icon = '';
      break;
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backGroundColor, color: colorFont }}
    >
      <div
        className={styles.wrapper}
        onClick={() => {
          toggle();
        }}
      >
        <div className={styles.name}>{appliance.name}</div>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.trash}>
        {
          <Trash
            onClick={deleteDevice}
            size={iconSize}
            color={colorFont}
            weight='duotone'
          />
        }
      </div>
    </div>
  );
}
