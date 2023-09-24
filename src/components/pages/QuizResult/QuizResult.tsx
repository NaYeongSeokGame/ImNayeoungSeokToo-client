import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as FacebookSvg } from '@/assets/icons/facebookIcon.svg';
import { ReactComponent as KakaoTalkSvg } from '@/assets/icons/kakaoTalkIcon.svg';
import { ReactComponent as TwitterSvg } from '@/assets/icons/twitterIcon.svg';
import { ReactComponent as UrlLinkSvg } from '@/assets/icons/urlLinkIcon.svg';
import { RESULT_COMMENT } from '@/constants/resultComment.ts';
import useShare from '@/hooks/useShare.ts';
import { quizPlayStateAtom } from '@/stores/quiz';

import * as styles from './QuizResult.style';


const QuizResult = () => {
  const navigate = useNavigate();
  const { totalScore, quizList, presetPin } = useAtomValue(quizPlayStateAtom);
  const {
    shareToTwitter,
    shareToFacebook,
    shareToKakaoTalk,
    shareToNavigator,
  } = useShare({
    url: 'http://nayeongseokgame.site/',
    title: '나도 나영석',
    text: '나도 나영석 게임 사이트입니다.',
    presetPin
  });

  const totalQuizAmount = quizList.length;
  const scoreRate = (totalScore / totalQuizAmount) * 100;

  const makeComment = () => {
    if (scoreRate === 100) {
      return RESULT_COMMENT['100'];
    } else if (scoreRate > 80) {
      return RESULT_COMMENT['80'];
    } else if (scoreRate > 60) {
      return RESULT_COMMENT['60'];
    } else if (scoreRate > 30) {
      return RESULT_COMMENT['30'];
    } else if (scoreRate === 0) {
      return RESULT_COMMENT['0'];
    }
  };

  const redirectToUrl = (url: string) => {
    navigate(url, { replace: true });
  };

  return (
    <styles.QuizResultWrapper>
      <styles.QuestionResult>
        <styles.Title>{`QUIZ\nSCORE`}</styles.Title>
        <styles.Result>
          <styles.ResultCorrect>{totalScore}</styles.ResultCorrect>
          {` / ${totalQuizAmount}`}
        </styles.Result>
      </styles.QuestionResult>
      <styles.QuizCommentBox>
        <span>???</span>
        <p>{makeComment()}</p>
      </styles.QuizCommentBox>
      <styles.ShareBox>
        <p>
          문제를 친구에게 <span>공유</span>해보세요!
        </p>
        <div>
          <UrlLinkSvg onClick={shareToNavigator} />
          <FacebookSvg onClick={shareToFacebook} />
          <TwitterSvg onClick={shareToTwitter} />
          <KakaoTalkSvg onClick={shareToKakaoTalk} />
        </div>
      </styles.ShareBox>
      <styles.ButtonBox>
        <styles.Button onClick={() => redirectToUrl('/')}>
          메인 메뉴
        </styles.Button>
        {/*FIXME: 퀴즈 목록 url 설정하기*/}
        <styles.Button onClick={() => redirectToUrl('/search')}>
          다른 문제 풀기
        </styles.Button>
      </styles.ButtonBox>
    </styles.QuizResultWrapper>
  );
};

export default QuizResult;