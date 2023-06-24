import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@/assets/fonts/font.css';

import App from './App.tsx';
import CreateQuiz from "./pages/CreateQuiz.tsx";
import PrepareQuiz from "./pages/PrepareQuiz.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }, {
    path: '/quiz/create',
    element: <CreateQuiz />
  }, {
    path: '/quiz/:id',
    element: <PrepareQuiz />
  }
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
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>,
);
