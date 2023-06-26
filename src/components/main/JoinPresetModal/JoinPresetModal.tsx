import { useState } from 'react';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import ModalTemplate from '@/components/common/ModalTemplate';
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

  return <styles.Button onClick={joinPresetQuiz}>퀴즈 풀기</styles.Button>;
};

const JoinPresetModal = () => {
  const [presetPin, setPresetPin] = useState('');

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresetPin(e.target.value);
  };

  return (
    <ModalTemplate
      title="비공개 PIN 입력"
      button={<JoinPresetButton presetPin={presetPin} />}
    >
      <styles.Wrapper>
        <styles.SettingBox>
          <h5>비공개 PIN</h5>
          <styles.PrivatePinInput
            value={presetPin}
            onChange={handleAnswerInput}
            placeholder="PIN 입력"
          />
        </styles.SettingBox>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default JoinPresetModal;
