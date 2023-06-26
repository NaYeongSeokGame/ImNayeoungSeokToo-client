import { useLottie } from 'lottie-react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import DotLottie from '@/assets/lotties/dot.json';
import getCloudFrontUrl from '@/utils/getCloudFrontUrl';
import playAudioFile from '@/utils/playAudio';

import * as styles from './Landing.style';

const Landing = () => {
  const { presetPin } = useParams();
  const navigation = useNavigate();
  const location = useLocation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DotLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { View } = useLottie(defaultOptions);

  const delay: number = location.state.delay;

  useEffect(() => {
    const redirectUrl = presetPin ? `/quiz/${presetPin}/0` : '/';
    const timerSoundInterval = setInterval(
      () => playAudioFile('/static/timer.mp3'),
      800,
    );
    const delayTimeout = setTimeout(() => navigation(redirectUrl), delay);
    return () => {
      clearInterval(timerSoundInterval);
      clearTimeout(delayTimeout);
    };
  }, []);

  return (
    <styles.Wrapper>
      <styles.LandingText />
      <styles.LandingImage src={getCloudFrontUrl('/static/landingImage.svg')} />
      <styles.Lottie>{View}</styles.Lottie>
    </styles.Wrapper>
  );
};

export default Landing;
