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
      <styles.MainImage />
      <styles.PickupText>골라보시라</styles.PickupText>
      <CategoryCarousel />
      <styles.ButtonSection>
        <styles.OptionButton>
          <Link to="/quiz/create">직접 문제 만들기 </Link>
        </styles.OptionButton>
        <styles.OptionButton onClick={openJoinPresetModal}>
          PIN 입력하기
        </styles.OptionButton>
      </styles.ButtonSection>
    </>
  );
};

export default Home;
