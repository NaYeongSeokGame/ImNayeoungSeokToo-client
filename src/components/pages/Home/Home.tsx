import { Link } from 'react-router-dom';

import CategoryCarousel from '@/components/main/CategoryCarousel';
import JoinPresetModal from '@/components/main/JoinPresetModal';
import useModal from '@/hooks/useModal';

import * as styles from './Home.style';

const Home = () => {
  const { openModal } = useModal();

  const openJoinPresetModal = () => openModal(<JoinPresetModal />);
  return (
    <>
      <styles.Title />
      <CategoryCarousel />
      <styles.ButtonSection>
        <styles.OptionButton>
        <Link to="/create">직접 퀴즈 만들기</Link>
        </styles.OptionButton>
        <styles.OptionButton onClick={openJoinPresetModal}>
          비공개 PIN 입력하기
        </styles.OptionButton>
        <styles.OptionButton> 
          <Link to="/search">퀴즈목록 보러가기</Link>
        </styles.OptionButton>
      </styles.ButtonSection>
    </>
  );
};

export default Home;
