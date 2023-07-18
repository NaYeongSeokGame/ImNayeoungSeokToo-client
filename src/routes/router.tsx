import { createBrowserRouter } from 'react-router-dom';

import BasicLayout from '@/components/common/BasicLayout';
import CreateQuiz from '@/components/pages/CreateQuiz';
import Home from '@/components/pages/Home';
import Landing from '@/components/pages/Landing';
import GameManage from '@/components/common/GameManage';
import QuizAnswer from '@/components/pages/QuizAnswer';
import QuizPlay from '@/components/pages/QuizPlay';
import QuizResult from '@/components/pages/QuizResult';
import TestAPI from '@/components/pages/TestAPI';

const router = createBrowserRouter([
    {
      path: '/',
      element: <BasicLayout />,
      errorElement: <div>오류</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'create',
          element: <CreateQuiz />,
        },
        {
          path: 'quiz',
          element: <GameManage />,
          children: [
            {
              path: '',
              element: <QuizPlay />,
            },
            {
              path: 'answer',
              element: <QuizAnswer />,
            },
            {
              path: 'loading',
              element: <Landing />,
            },
            {
              path: 'result',
              element: <QuizResult />,
            },
          ],
        },
        {
          path: 'test',
          element: <TestAPI />,
        },
      ],
    },
  ]);

  export default router;