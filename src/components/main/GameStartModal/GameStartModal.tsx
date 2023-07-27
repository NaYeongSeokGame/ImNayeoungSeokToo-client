import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AllowDownUrl from '@/assets/icons/pixil-arrow-down.png';
import AllowUpUrl from '@/assets/icons/pixil-arrow-up.png';
import ModalTemplate from '@/components/common/ModalTemplate';
import ModalButton from '@/components/common/buttons/ModalButton/ModalButton';
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

  const StartQuizButton = useCallback(
    () => (
      <ModalButton
        title="시작"
        colorScheme="pink"
        onClick={redirectToLandingPage}
      />
    ),
    [timeToSolveQuiz],
  );

  return (
    <ModalTemplate
      buttons={[
        <StartQuizButton />,
        <ModalButton
          title="나가기"
          colorScheme="darkblue"
          onClick={closeModal}
        />,
      ]}
      subSection={
        <styles.Wrapper>
          <styles.SubSectionTitle>문제 타이머</styles.SubSectionTitle>
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
        </styles.Wrapper>
      }
    >
      <styles.ThumbnailSection
        $thumbnailUrl={
          thumbnailUrl || getCloudFrontUrl('/static/thumbnail.jpg')
        }
      >
        <styles.Title>{title}</styles.Title>
      </styles.ThumbnailSection>
    </ModalTemplate>
  );
};

export default GameStartModal;
