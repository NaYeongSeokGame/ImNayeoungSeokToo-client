import { useAtomValue } from 'jotai';
import { useLottie } from 'lottie-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import DotLottie from '@/assets/lotties/dot.json';
import useVolumeControl from '@/hooks/useVolumeControl';
import { quizPlayStateAtom } from '@/stores/quiz';
import getCloudFrontUrl from '@/utils/getCloudFrontUrl';
import playAudioFile from '@/utils/playAudio';

import * as styles from './Landing.style';

const Landing = () => {
  const navigation = useNavigate();
  const { delayBeforeStart, presetPin } = useAtomValue(quizPlayStateAtom);
  const { volume } = useVolumeControl();

  const landingImageUrl = getCloudFrontUrl('/static/landingImage.svg');
  const soundEffectUrl = getCloudFrontUrl('/static/timer.mp3');

  const { View } = useLottie({
    loop: true,
    autoplay: true,
    animationData: DotLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  useEffect(() => {
    if (!presetPin) {
      toast.error('게임을 실행하던 중 문제가 발생했습니다.');
      navigation('/', { replace: true });
      return;
    }

    const soundInterval = setInterval(
      () => playAudioFile(soundEffectUrl, volume.soundEffectVolume),
      800,
    );
    const delayTimeout = setTimeout(
      () => navigation(`/quiz`, { replace: true }),
      delayBeforeStart * 1000,
    );

    return () => {
      clearInterval(soundInterval);
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
