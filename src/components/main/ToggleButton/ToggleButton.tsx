import { ChangeEvent, useState } from 'react';

import * as styles from './ToggleButton.style';

interface ToggleButton {
  onColor?: string;
  offColor?: string;
  circleColor?: string;
  defaultValue?: boolean;
  toggleState: (status: boolean) => void;
}
const ToggleButton = ({
  toggleState,
  onColor = 'green',
  offColor = 'grey',
  circleColor = 'white',
  defaultValue = false,
}: ToggleButton) => {
  const [checked, setChecked] = useState(defaultValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked), toggleState(e.target.checked);
  };

  return (
    <styles.Label>
      <styles.Toggle
        $onColor={onColor}
        checked={checked}
        onChange={handleChange}
        type="checkbox"
      />
      <styles.Switch $offColor={offColor} $circleColor={circleColor} />
    </styles.Label>
  );
};

export default ToggleButton;
