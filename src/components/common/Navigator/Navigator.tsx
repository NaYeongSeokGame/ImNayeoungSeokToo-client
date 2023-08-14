import { Link, useMatch } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '@/assets/icons/homeIcon.svg';
import { ReactComponent as SettingIcon } from '@/assets/icons/settingIcon.svg';
import { ReactComponent as SmileIcon } from '@/assets/icons/smileIcon.svg';
import { ReactComponent as ZoomIcon } from '@/assets/icons/zoomIcon.svg';
import GameSettingModal from '@/components/main/GameSettingModal';
import useModal from '@/hooks/useModal';

import * as styles from './Navigator.style';

const Navigator = () => {
  const matchHomeUrl = useMatch('/');
  const matchSearchUrl = useMatch('/search');
  const matchQuizGameUrl = useMatch('/quiz/*');
  const matchMyQuizUrl = useMatch('/my-quiz');

  const { openModal } = useModal();
  const openGameSettingModal = () => openModal(<GameSettingModal />);

  return (
    <styles.Wrapper>
      <Link to="/">
        <styles.Section isSelected={matchHomeUrl !== null}>
          <HomeIcon />
          <p>홈</p>
        </styles.Section>
      </Link>
      {/** TODO : 추후 퀴즈 목록 페이지 개설 시 추가 */}
      <Link to="/search">
        <styles.Section isSelected={matchSearchUrl !== null}>
          <ZoomIcon />
          <p>퀴즈 검색</p>
        </styles.Section>
      </Link>
      {/** TODO : 나의 퀴즈 목록 페이지 개설 시 수정 필요 */}
      <Link to="/my-quiz">
        <styles.Section isSelected={matchMyQuizUrl !== null}>
          <SmileIcon />
          <p>나의 퀴즈</p>
        </styles.Section>
      </Link>
      <styles.Section onClick={openGameSettingModal}>
        <SettingIcon />
        <p>설정</p>
      </styles.Section>
    </styles.Wrapper>
  );
};

export default Navigator;
