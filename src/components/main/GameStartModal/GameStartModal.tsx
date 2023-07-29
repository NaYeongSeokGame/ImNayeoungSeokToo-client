import { useNavigate } from 'react-router-dom';

import { ReactComponent as MinusIconSvg } from '@/assets/icons/minusIcon.svg';
import { ReactComponent as PlusIconSvg } from '@/assets/icons/plusIcon.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
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

  const StartQuizButton = () => (
    <styles.StartQuizButton onClick={redirectToLandingPage}>
      완료
    </styles.StartQuizButton>
  );

  return (
    <ModalTemplate title={title || '게임 시작'} button={<StartQuizButton />}>
      <styles.Wrapper>
        <div>
          <styles.Title>메인 이미지</styles.Title>
          <styles.ThumbnailSection>
            <img
              src={thumbnailUrl || getCloudFrontUrl('/static/thumbnail.jpg')}
              alt="dwd"
            />
          </styles.ThumbnailSection>
        </div>
        <div>
          <styles.Title>타이머 설정</styles.Title>
          <styles.StartDelayCounter>
            <PlusIconSvg onClick={() => handleTimeToSolveQuiz(1)} />
            {timeToSolveQuiz}
            <MinusIconSvg onClick={() => handleTimeToSolveQuiz(-1)} />
          </styles.StartDelayCounter>
        </div>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default GameStartModal;
