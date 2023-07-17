import { useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import useShare from '@/hooks/useShare.ts';
import { quizPlayStateAtom, terminateQuizGameAtom } from '@/stores/quiz';

import * as styles from './QuizResult.style';

const QuizResult = () => {
  const navigate = useNavigate();
  const {
    shareToTwitter,
    shareToFacebook,
    shareToKakaoTalk,
    shareToNavigator,
  } = useShare({
    url: 'http://nayeongseokgame.site/',
    title: '나도 나영석',
    text: '나도 나영석 게임 사이트입니다.',
  });
  const { totalScore, quizList } = useAtomValue(quizPlayStateAtom);
  const terminateQuizGame = useSetAtom(terminateQuizGameAtom);

  const totalQuizAmount = quizList.length;

  const redirectToUrl = (url: string) => {
    navigate(url, { replace: true });
  };

  return (
    <>
      <styles.Title>QUIZ SCORE</styles.Title>
      <styles.QuestionResult>
        <styles.Result>
          <styles.ResultCorrect>{totalScore}</styles.ResultCorrect>/
          {totalQuizAmount}
        </styles.Result>
      </styles.QuestionResult>
      <styles.ShareIcon></styles.ShareIcon>
      {/*  <TwitterSvg />*/}
      {/*<UrlLinkSvg />*/}
      {/*<FacebookSvg />*/}
      {/*<KakaoTalkSvg />*/}
      <styles.LobbyButton onClick={() => redirectToUrl('/')}>
        홈으로
      </styles.LobbyButton>
    </>
  );
};

export default QuizResult;
