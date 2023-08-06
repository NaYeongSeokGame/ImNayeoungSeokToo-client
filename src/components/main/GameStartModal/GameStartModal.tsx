import { useNavigate } from 'react-router-dom';

import AllowDownUrl from '@/assets/icons/pixil-arrow-down.png';
import AllowUpUrl from '@/assets/icons/pixil-arrow-up.png';
import Modal from '@/components/common/modal';
import useModal from '@/hooks/useModal';
import usePresetSetting from '@/hooks/usePresetSetting.ts';
import getCloudFrontUrl from '@/utils/getCloudFrontUrl';

import * as styles from './GameStartModal.style';

interface GameStartModalProps {
  presetPin: string;
  thumbnailUrl: string;
  title: string;
}

const GameStartModal = ({
  presetPin,
  thumbnailUrl,
  title,
}: GameStartModalProps) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const { timeToSolveQuiz, startQuizGame, handleTimeToSolveQuiz } =
    usePresetSetting({
      presetPin,
      thumbnailUrl,
    });

  const redirectToLandingPage = async () => {
    await startQuizGame();
    closeModal();
    navigate(`/quiz/loading`);
  };

  return (
    <Modal>
      <Modal.MainContent>
        <styles.ThumbnailSection
          $thumbnailUrl={
            thumbnailUrl || getCloudFrontUrl('/static/thumbnail.jpg')
          }
        >
          <styles.Title>{title}</styles.Title>
        </styles.ThumbnailSection>
      </Modal.MainContent>
      <Modal.SubContentWrapper>
        <Modal.SubTitle>문제 타이머</Modal.SubTitle>
        <Modal.SubContent>
          <styles.StartDelayCounter>
            <styles.TimerButton onClick={() => handleTimeToSolveQuiz(-1)}>
              <img
                src={AllowDownUrl}
                alt="button"
                style={{ width: '1.5rem', height: '1.5rem' }}
              />
            </styles.TimerButton>
            {timeToSolveQuiz}
            <styles.TimerButton onClick={() => handleTimeToSolveQuiz(1)}>
              <img
                src={AllowUpUrl}
                alt="button"
                style={{ width: '1.5rem', height: '1.5rem' }}
              />
            </styles.TimerButton>
          </styles.StartDelayCounter>
        </Modal.SubContent>
      </Modal.SubContentWrapper>
      <Modal.Button
        title="시작"
        colorScheme="pink"
        onClick={redirectToLandingPage}
      />
      ,
      <Modal.Button
        title="나가기"
        colorScheme="darkblue"
        onClick={closeModal}
      />
    </Modal>
  );
};

export default GameStartModal;
