import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';

import '@/assets/fonts/font.css';
import BasicLayout from '@/components/common/BasicLayout';
import CreateQuiz from '@/components/pages/CreateQuiz';
import Home from '@/components/pages/Home';
import Landing from '@/components/pages/Landing';
import QuizAnswer from '@/components/pages/QuizAnswer';
import QuizPlay from '@/components/pages/QuizPlay';
import QuizResult from '@/components/pages/QuizResult';
import TestAPI from '@/components/pages/TestAPI';
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/theme';

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
        path: 'quiz',
        children: [
          {
            path: 'create',
            element: <CreateQuiz />,
          },
          {
            path: ':presetPin',
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
        ],
      },
      {
        path: 'test',
        element: <TestAPI />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>,
);
