import { useState } from 'react';

import { ReactComponent as MuteIcon } from '@/assets/icons/muteIcon.svg';
import { ReactComponent as SoundIcon } from '@/assets/icons/soundIcon.svg';
import Modal from '@/components/common/modal';
import useModal from '@/hooks/useModal';
import useVolumeControl from '@/hooks/useVolumeControl';

import * as styles from './GameSettingModal.style';

const GameSettingModal = () => {
  const { closeModal } = useModal();
  const { volume, onChange } = useVolumeControl();
  const [volumeState, setVolumeState] = useState(volume);

  const onSave = () => {
    onChange({ ...volumeState });
    closeModal();
  };

  const handleChange = (id: SoundOptionType, optionVolume: number) => {
    setVolumeState((prev) => {
      return {
        ...prev,
        [id]: optionVolume,
      };
    });
  };

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
                handleChange={handleChange}
              />
              <SoundOptionBox
                title="효과음"
                value={volume.soundEffectVolume}
                id="soundEffectVolume"
                handleChange={handleChange}
              />
            </styles.SoundOptionBox>
          </styles.SettingBox>
        </styles.Wrapper>
      </Modal.MainContent>
      <Modal.Button title="저장" colorScheme="pink" onClick={onSave} />,
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
  handleChange: (id: SoundOptionType, optionVolume: number) => void;
}

const SoundOptionBox = ({
  id,
  title,
  value,
  handleChange,
}: SoundOptionBoxProps) => {
  const [optionVolume, setOptionVolume] = useState(value);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOptionVolume(Number(value));
    handleChange(id, Number(value));
  };

  return (
    <styles.SoundOptionBox>
      <styles.SoundOptionRow>
        <span>
          <h6>{title}</h6>
          {optionVolume === 0 ? <MuteIcon /> : <SoundIcon />}
        </span>
        <p>{optionVolume} %</p>
      </styles.SoundOptionRow>
      <styles.SoundOptionRow>
        <input
          type="range"
          defaultValue={optionVolume}
          onChange={onChange}
          min="0"
          max="100"
        />
      </styles.SoundOptionRow>
    </styles.SoundOptionBox>
  );
};
