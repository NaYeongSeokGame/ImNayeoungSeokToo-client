import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './Landing.style';

const Landing = () => {
  const { presetPin } = useParams();
  const navigation = useNavigate();
  console.log(location);

  useEffect(() => {
    const redirectUrl = presetPin ? `/quiz/${presetPin}/0` : '/';
    setTimeout(() => navigation(redirectUrl), 3000);
  }, []);

  return (
    <styles.Wrapper>
      <styles.LandingText />
      <styles.LandingImage />
    </styles.Wrapper>
  );
};

export default Landing;
