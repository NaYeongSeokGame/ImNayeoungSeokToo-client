import { useState } from 'react';

import { ReactComponent as MuteIcon } from '@/assets/icons/muteIcon.svg';
import { ReactComponent as SoundIcon } from '@/assets/icons/soundIcon.svg';
import Modal from '@/components/common/modal';
import useModal from '@/hooks/useModal';

import * as styles from './GameSettingModal.style';

const GameSettingModal = () => {
  const { closeModal } = useModal();
  return (
    <Modal>
      <Modal.MainContent>
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
      </Modal.MainContent>
      <Modal.Button title="저장" colorScheme="pink" onClick={closeModal} />,
      <Modal.Button
        title="나가기"
        colorScheme="darkblue"
        onClick={closeModal}
      />
      ,
    </Modal>
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
