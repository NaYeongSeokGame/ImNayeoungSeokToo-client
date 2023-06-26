import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import '@/assets/fonts/font.css';
import BasicLayout from '@/components/common/BasicLayout';
import ModalPortal from '@/components/common/ModalPortal';
import Home from '@/components/pages/Home/Home';
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
        path: '/quiz/create',
        element: <div />,
      },
      {
        path: '/quiz/:id',
        element: <div />,
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
        <ModalPortal />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>,
);
