import { useNavigate } from 'react-router-dom';

import CategoryCarousel from '@/components/main/CategoryCarousel';
import JoinPresetModal from '@/components/main/JoinPresetModal';
import useModal from '@/hooks/useModal';

import * as styles from './Home.style';

const Home = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  const openJoinPresetModal = () => openModal(<JoinPresetModal />);
  const openCreateQuiz = () => navigate('/create');
  const openSearchQuiz = () => navigate('/search');

  return (
    <>
      <styles.Section>
        <CategoryCarousel />
      </styles.Section>
      <styles.Section>
        <styles.ButtonSection>
          <styles.OptionButton onClick={openCreateQuiz}>
            직접 퀴즈 만들기
          </styles.OptionButton>
          <styles.OptionButton onClick={openJoinPresetModal}>
            비공개 PIN 입력하기
          </styles.OptionButton>
          <styles.OptionButton onClick={openSearchQuiz}>
            퀴즈목록 보러가기
          </styles.OptionButton>
        </styles.ButtonSection>
      </styles.Section>
      <styles.Section>
        <styles.TitleSection>
          <styles.Title>나도... 나영석!</styles.Title>
        </styles.TitleSection>
      </styles.Section>
    </>
  );
};

export default Home;
