import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MinusIconSvg } from '@/assets/icons/minusIcon.svg';
import { ReactComponent as PlusIconSvg } from '@/assets/icons/plusIcon.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
import useModal from '@/hooks/useModal';
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
  const [delayBeforePlay, setDelayBeforePlay] = useState(3);

  const handleDelayBeforePlay = (diff: 1 | -1) => {
    const changedResult = delayBeforePlay + diff;
    if (changedResult < 3 || changedResult > 10) return;

    setDelayBeforePlay(changedResult);
  };

  const redirectToLandingPage = () => {
    closeModal();
    navigate(`/quiz/${presetPin}/loading`, {
      state: { delay: delayBeforePlay * 1000 },
    });
  };

  const StartQuizButton = useMemo(
    () => (
      <styles.StartQuizButton onClick={redirectToLandingPage}>
        완료
      </styles.StartQuizButton>
    ),
    [delayBeforePlay],
  );

  return (
    <ModalTemplate title={title || '게임 시작'} button={StartQuizButton}>
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
            <PlusIconSvg onClick={() => handleDelayBeforePlay(1)} />
            {delayBeforePlay}
            <MinusIconSvg onClick={() => handleDelayBeforePlay(-1)} />
          </styles.StartDelayCounter>
        </div>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default GameStartModal;
