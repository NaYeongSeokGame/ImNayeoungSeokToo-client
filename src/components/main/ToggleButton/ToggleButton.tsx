import React, { ChangeEvent, useState } from 'react';
import * as styles from './ToggleButton.style';

interface ToggleButton {
  onColor?: string,
  offColor?: string,
  circleColor?: string,
  toggleState: (status:boolean) => void,
}
const ToggleButton = ({
  onColor = 'green',
  offColor = 'grey',
  circleColor = 'white',
  toggleState
}: ToggleButton) => {
  const [checked, setChecked] = useState(false); // store value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked),
    toggleState(e.target.checked)
  };

  return (
    <styles.Label>
      <styles.Toggle onColor={onColor} checked={checked} onChange={handleChange} type="checkbox" />
      <styles.Switch offColor={offColor} circleColor={circleColor}/>
    </styles.Label>
  );
};

export default ToggleButton;
