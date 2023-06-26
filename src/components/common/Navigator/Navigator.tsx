import { Link } from 'react-router-dom';

import { ReactComponent as SoundIconSvg } from '@/assets/icons/SoundIcon.svg';
import { ReactComponent as HomeIconSvg } from '@/assets/icons/homeIcon.svg';

import * as styles from './Navigator.style';

const Navigator = () => {
  return (
    <styles.Wrapper>
      <Link to="/">
        <HomeIconSvg />
      </Link>
      <SoundIconSvg />
    </styles.Wrapper>
  );
};

export default Navigator;
