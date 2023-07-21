import { createBrowserRouter } from 'react-router-dom';

import BasicLayout from '@/components/common/BasicLayout';
import CreateQuiz from '@/components/pages/CreateQuiz';
import Home from '@/components/pages/Home';
import Landing from '@/components/pages/Landing';
import GameManage from '@/components/common/GameManage';
import QuizAnswer from '@/components/pages/QuizAnswer';
import QuizPlay from '@/components/pages/QuizPlay';
import QuizResult from '@/components/pages/QuizResult';

const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <div>오류</div>,
      children: [
        {
          element: <BasicLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'create',
              element: <CreateQuiz />,
            },
          ]
        },
        {
          element: <GameManage />,
          path: 'quiz',
          children: [
            {
              index: true,
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
      ],
    },
  ]);

  export default router;