import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { quizPlayStateAtom } from '@/stores/quiz';
import { terminateQuizGameAtom } from '@/stores/quiz/actions';

const GameManage = () => {
  const { isPlaying } = useAtomValue(quizPlayStateAtom);
  const terminateQuizGame = useSetAtom(terminateQuizGameAtom);
  const navigate = useNavigate();

  useEffect(() => {
    // NOTE : '/quiz' 라우터 진입 시 게임이 진행되지 않았다면, 메인 페이지로 이동
    if (!isPlaying) navigate('/', { replace: true });
    
    // NOTE : '/quiz' 라우터를 벗어날 시, 게임이 진행 중이라면 이를 종료시킴.
    return () => {
      if (isPlaying) terminateQuizGame();
    };
  }, []);

  return isPlaying ? <Outlet /> : null;
};

export default GameManage;
