import { useMatch, Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '@/assets/icons/homeIcon.svg';
import { ReactComponent as SearchIcon } from '@/assets/icons/searchIcon.svg';
import { ReactComponent as CheckIcon } from '@/assets/icons/checkIcon.svg';
import { ReactComponent as SettingIcon } from '@/assets/icons/settingIcon.svg';
import useModal from '@/hooks/useModal';
import GameSettingModal from '@/components/main/GameSettingModal';

import * as styles from './Navigator.style';

const Navigator = () => {
  const matchHomeUrl = useMatch('/');
  const matchQuizGameUrl = useMatch('/quiz/*')
  const matchCreateQuizUrl = useMatch('/create');

  const { openModal } = useModal();
  const openGameSettingModal = () => openModal(<GameSettingModal />)

  return (
    <styles.Wrapper>
      <Link to="/">
        <styles.Section isSelected={matchHomeUrl !== null}>
          <HomeIcon  />
          <p>홈</p>
        </styles.Section>
      </Link>
      <Link to="/create">
        <styles.Section isSelected={matchCreateQuizUrl !== null}>
          <CheckIcon />
          <p>퀴즈 생성</p>
        </styles.Section>
      </Link>
      {/** TODO : 추후 퀴즈 목록 페이지 개설 시 추가 */}
      <Link to="/list">
        <styles.Section isSelected={matchQuizGameUrl !== null}>
          <SearchIcon />
          <p>퀴즈 검색</p>
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
