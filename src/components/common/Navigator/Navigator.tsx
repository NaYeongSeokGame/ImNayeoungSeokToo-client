import { Link } from 'react-router-dom';

import { ReactComponent as SoundIconSvg } from '@/assets/icons/SoundIcon.svg';
import { ReactComponent as HomeIconSvg } from '@/assets/icons/homeIcon.svg';
import GameSettingModal from '@/components/main/GameSettingModal';
import useModal from '@/hooks/useModal';

import * as styles from './Navigator.style';

const Navigator = () => {
  const { openModal } = useModal();

  const openGameSettingModal = () => openModal(<GameSettingModal />);

  return (
    <styles.Wrapper>
      <Link to="/">
        <HomeIconSvg />
      </Link>
      <SoundIconSvg onClick={openGameSettingModal} />
    </styles.Wrapper>
  );
};

export default Navigator;
