import { useState } from 'react';

import { ReactComponent as MuteIcon } from '@/assets/icons/muteIcon.svg';
import { ReactComponent as SoundIcon } from '@/assets/icons/soundIcon.svg';
import Modal from '@/components/common/modal';
import useModal from '@/hooks/useModal';
import useVolumeControl from '@/hooks/useVolumeControl';

import * as styles from './GameSettingModal.style';

const GameSettingModal = () => {
  const { closeModal } = useModal();
  const { volume } = useVolumeControl();

  return (
    <Modal>
      <Modal.MainContent>
        <styles.Wrapper>
          <h4>설정</h4>
          <styles.SettingBox>
            <h5>사운드</h5>
            <styles.SoundOptionBox>
              <SoundOptionBox
                title="배경음"
                value={volume.backgroundVolume}
                id="backgroundVolume"
              />
              <SoundOptionBox
                title="효과음"
                value={volume.soundEffectVolume}
                id="soundEffectVolume"
              />
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

type SoundOptionType = 'backgroundVolume' | 'soundEffectVolume';
interface SoundOptionBoxProps {
  id: SoundOptionType;
  title: string;
  value: number;
}

const SoundOptionBox = ({ id, title, value }: SoundOptionBoxProps) => {
  const [volume, setVolume] = useState(value * 100);
  const { onChange } = useVolumeControl();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVolume(Number(value));
    onChange({ [id]: Number(value) / 100 });
  };

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
          onChange={handleChange}
          min="0"
          max="100"
        />
      </styles.SoundOptionRow>
    </styles.SoundOptionBox>
  );
};
