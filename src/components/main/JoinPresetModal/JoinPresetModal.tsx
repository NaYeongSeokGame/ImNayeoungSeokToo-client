import { useState } from 'react';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import Modal from '@/components/common/modal';
import useModal from '@/hooks/useModal';

import * as styles from './JoinPresetModal.style';

const JoinPresetModal = () => {
  const { closeModal } = useModal();
  const [presetPin, setPresetPin] = useState('');

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresetPin(e.target.value);
  };
  const joinPresetQuiz = async () => {
    if (!presetPin) {
      toast.error('플레이하려는 프리셋 PIN을 입력해주세요.');
      return;
    }

    try {
      const presetData = await QuizRepository.getQuizByPinAsync(presetPin);
      return presetData;
    } catch (error) {
      toast.error('프리셋을 불러올 수 없습니다.');
    }
  };

  return (
    <Modal>
      <Modal.MainContent>
        <styles.Wrapper>
          <h4>핀 입력</h4>
          <styles.SettingBox>
            <span>플레이할 퀴즈 프리셋 핀 번호를 입력해 주세요.</span>
            <styles.PrivatePinInput
              value={presetPin}
              onChange={handleAnswerInput}
            />
          </styles.SettingBox>
        </styles.Wrapper>
      </Modal.MainContent>
      <Modal.Button
        title={'퀴즈 풀기'}
        colorScheme="pink"
        onClick={joinPresetQuiz}
      />
      <Modal.Button
        title="나가기"
        colorScheme="darkblue"
        onClick={closeModal}
      />
    </Modal>
  );
};

export default JoinPresetModal;
