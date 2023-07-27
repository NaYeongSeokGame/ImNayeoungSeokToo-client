import { useState } from 'react';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import ModalTemplate from '@/components/common/ModalTemplate';
import ModalButton from '@/components/common/buttons/ModalButton/ModalButton';
import useModal from '@/hooks/useModal';
import { QuizPresetPinType } from '@/types/quiz';

import * as styles from './JoinPresetModal.style';

const JoinPresetButton = ({ presetPin }: QuizPresetPinType) => {
  const joinPresetQuiz = async () => {
    if (!presetPin) {
      toast.error('플레이하려는 프리셋 PIN을 입력해주세요.');
      return;
    }

    try {
      const presetData = await QuizRepository.getQuizByPinAsync(presetPin);
      console.log(presetData);
      return presetData;
    } catch (error) {
      toast.error('프리셋을 불러올 수 없습니다.');
    }
  };

  return (
    <ModalButton
      title={'퀴즈 풀기'}
      colorScheme="pink"
      onClick={joinPresetQuiz}
    />
  );
};

const JoinPresetModal = () => {
  const { closeModal } = useModal();
  const [presetPin, setPresetPin] = useState('');

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresetPin(e.target.value);
  };

  return (
    <ModalTemplate
      buttons={[
        <JoinPresetButton presetPin={presetPin} />,
        <ModalButton
          title="나가기"
          colorScheme="darkblue"
          onClick={closeModal}
        />,
      ]}
    >
      <styles.Wrapper>
        <h4>핀 입력</h4>
        <styles.SettingBox>
          <span>플레이할 퀴즈 핀 번호를 입력해 주세요.</span>
          <styles.PrivatePinInput
            value={presetPin}
            onChange={handleAnswerInput}
          />
        </styles.SettingBox>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default JoinPresetModal;
