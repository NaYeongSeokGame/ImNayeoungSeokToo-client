import { useLottie } from 'lottie-react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import DotLottie from '@/assets/lotties/dot.json';
import { useQuizDispatch } from '@/hooks/useQuizContext';
import getCloudFrontUrl from '@/utils/getCloudFrontUrl';
import playAudioFile from '@/utils/playAudio';

import * as styles from './Landing.style';

const Landing = () => {
  const { presetPin } = useParams();
  const navigation = useNavigate();
  const location = useLocation();
  const { fetchQuizData } = useQuizDispatch();

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

    const initQuizData = async (presetPin: string) => {
      try {
        const { quizList } = await QuizRepository.getQuizByPinAsync(presetPin);
        fetchQuizData(quizList);
      } catch (error) {
        toast.error('게임을 실행하던 중 문제가 발생했습니다.');
        navigation('/');
      }
    };

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
      <styles.LandingImage src={getCloudFrontUrl('/static/landingImage.svg')} />
      <styles.Lottie>{View}</styles.Lottie>
    </styles.Wrapper>
  );
};

export default Landing;
