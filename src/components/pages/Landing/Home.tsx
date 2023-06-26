import { Link } from 'react-router-dom';

import CategoryCarousel from '@/components/main/CategoryCarousel';

import * as styles from './Home.style';

const Home = () => {
  return (
    <>
      <styles.Title />
      <styles.MainImage />
      <styles.PickupText>골라보시라</styles.PickupText>
      <CategoryCarousel />
      <styles.CreatePresetBtn>
        <Link to="/quiz/create">직접 문제 만들기 </Link>
      </styles.CreatePresetBtn>
    </>
  );
};

export default Home;
