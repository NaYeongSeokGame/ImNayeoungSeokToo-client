import { useNavigate } from 'react-router-dom';

import { ReactComponent as HomeIconSvg } from '@/assets/icons/homeIcon.svg';
import { ReactComponent as SoundIconSvg } from '@/assets/icons/soundIcon.svg';
import GameSettingModal from '@/components/main/GameSettingModal';
import useModal from '@/hooks/useModal';

import * as styles from './Navigator.style';

const Navigator = () => {
  const { openModal } = useModal();
  const navigation = useNavigate();

  const openGameSettingModal = () => openModal(<GameSettingModal />);

  return (
    <styles.Wrapper>
      <HomeIconSvg onClick={() => navigation('/')} />
      <SoundIconSvg onClick={openGameSettingModal} />
    </styles.Wrapper>
  );
};

export default Navigator;
