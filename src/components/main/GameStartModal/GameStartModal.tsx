import { useSetAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QuizRepository from '@/apis/quiz';
import { ReactComponent as MinusIconSvg } from '@/assets/icons/minusIcon.svg';
import { ReactComponent as PlusIconSvg } from '@/assets/icons/plusIcon.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
import useModal from '@/hooks/useModal';
import { startQuizGameAtom } from '@/stores/quiz';
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
  const startQuizGame = useSetAtom(startQuizGameAtom);
  const { closeModal } = useModal();

  const [delayBeforeStart, setDelayBeforeStart] = useState(3);

  const handleDelayBeforeStart = (diff: number) => {
    const changedResult = delayBeforeStart + diff;
    if (changedResult < 3 || changedResult > 10) return;
    setDelayBeforeStart(changedResult);
  };

  const redirectToLandingPage = async () => {
    const { quizList } = await QuizRepository.getQuizByPinAsync(presetPin);
    startQuizGame({
      quizList,
      thumbnailUrl: '',
      presetPin,
      delayBeforeStart: delayBeforeStart * 1000,
      timeToSolveQuiz: 3 * 1000, // FIXME : 추후 문제 별 딜레이 설정 기능도 추가해야 함.
    });
    closeModal();
    navigate(`/quiz/${presetPin}/loading`);
  };

  const StartQuizButton = useCallback(
    () => (
      <styles.StartQuizButton onClick={redirectToLandingPage}>
        완료
      </styles.StartQuizButton>
    ),
    [delayBeforeStart],
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
            <PlusIconSvg onClick={() => handleDelayBeforeStart(1)} />
            {delayBeforeStart}
            <MinusIconSvg onClick={() => handleDelayBeforeStart(-1)} />
          </styles.StartDelayCounter>
        </div>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default GameStartModal;
