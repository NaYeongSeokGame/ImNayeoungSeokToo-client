import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MinusIconSvg } from '@/assets/icons/minusIcon.svg';
import { ReactComponent as PlusIconSvg } from '@/assets/icons/plusIcon.svg';
import ModalTemplate from '@/components/common/ModalTemplate';

import * as styles from './GameStartModal.style';

interface GameStartModalProps {
  presetPin: string;
}

const GameStartModal = ({ presetPin }: GameStartModalProps) => {
  const navigate = useNavigate();
  const [delayBeforePlay, setDelayBeforePlay] = useState(3);

  const handleDelayBeforePlay = (diff: 1 | -1) => {
    const changedResult = delayBeforePlay + diff;
    if (changedResult < 3 || changedResult > 10) return;

    setDelayBeforePlay(changedResult);
  };

  const redirectToLandingPage = () => {
    navigate(`/quiz/${presetPin}/loading`, {
      state: { delay: delayBeforePlay },
    });
  };

  return (
    <ModalTemplate title="게임 시작">
      <styles.Wrapper>
        <styles.StartDelayCounter>
          <PlusIconSvg onClick={() => handleDelayBeforePlay(1)} />
          {delayBeforePlay}
          <MinusIconSvg onClick={() => handleDelayBeforePlay(-1)} />
        </styles.StartDelayCounter>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default GameStartModal;
