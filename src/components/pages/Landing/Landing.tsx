import { useSetAtom } from 'jotai';
import { useLottie } from 'lottie-react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import DotLottie from '@/assets/lotties/dot.json';
import { controlPlayingStateAtom, initQuizPresetDataAtom } from '@/stores/quiz';
import getCloudFrontUrl from '@/utils/getCloudFrontUrl';
import playAudioFile from '@/utils/playAudio';

import * as styles from './Landing.style';

const Landing = () => {
  const { presetPin } = useParams();
  const navigation = useNavigate();
  const location = useLocation();

  const initQuizPreset = useSetAtom(initQuizPresetDataAtom);
  const changePlayState = useSetAtom(controlPlayingStateAtom);

  const delay: number = location.state.delay;
  const landingImageUrl = getCloudFrontUrl('/static/landingImage.svg');
  const soundFileUrl = getCloudFrontUrl('/static/timer.mp3');

  const { View } = useLottie({
    loop: true,
    autoplay: true,
    animationData: DotLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  useEffect(() => {
    const redirectUrl = presetPin ? `/quiz/${presetPin}/0` : '/';
    const timerSoundInterval = setInterval(
      () => playAudioFile(soundFileUrl),
      800,
    );
    const delayTimeout = setTimeout(() => {
      changePlayState(true);
      navigation(redirectUrl);
    }, delay);

    if (!presetPin) {
      toast.error('게임을 실행하던 중 문제가 발생했습니다.');
      navigation('/');
      return;
    }
    initQuizData(presetPin);

    return () => {
      clearInterval(timerSoundInterval);
      clearTimeout(delayTimeout);
    };
  }, []);

  return (
    <styles.Wrapper>
      <styles.LandingText />
      <styles.LandingImage src={landingImageUrl} />
      <styles.Lottie>{View}</styles.Lottie>
    </styles.Wrapper>
  );
};

export default Landing;
