import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainLayout from 'components/MainLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <MainLayout>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </MainLayout>
  // </React.StrictMode>
);
