import { useState } from 'react';

import { ReactComponent as MuteIcon } from '@/assets/icons/muteIcon.svg';
import { ReactComponent as SoundIcon } from '@/assets/icons/soundIcon.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
import ModalButton from '@/components/common/buttons/ModalButton/ModalButton';
import useModal from '@/hooks/useModal';

import * as styles from './GameSettingModal.style';

const GameSettingModal = () => {
  const { closeModal } = useModal();
  return (
    <ModalTemplate
      buttons={[
        <ModalButton title="저장" colorScheme="pink" onClick={closeModal} />,
        <ModalButton
          title="나가기"
          colorScheme="darkblue"
          onClick={closeModal}
        />,
      ]}
    >
      <styles.Wrapper>
        <h4>설정</h4>
        <styles.SettingBox>
          <h5>사운드</h5>
          <styles.SoundOptionBox>
            <SoundOptionBox title="배경음" value={100} />
            <SoundOptionBox title="효과음" value={80} />
          </styles.SoundOptionBox>
        </styles.SettingBox>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default GameSettingModal;

interface SoundOptionBoxProps {
  title: string;
  value: number;
}

const SoundOptionBox = ({ title, value }: SoundOptionBoxProps) => {
  const [volume, setVolume] = useState(value);
  return (
    <styles.SoundOptionBox>
      <styles.SoundOptionRow>
        <span>
          <h6>{title}</h6>
          {volume === 0 ? <MuteIcon /> : <SoundIcon />}
        </span>
        <p>{volume} %</p>
      </styles.SoundOptionRow>
      <styles.SoundOptionRow>
        <input
          type="range"
          defaultValue={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          min="0"
          max="100"
        />
      </styles.SoundOptionRow>
    </styles.SoundOptionBox>
  );
};
