import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates'; 
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <CandidateSearch />,
        },
        {
          path: '/SavedCandidates', 
          element: <SavedCandidates />, 
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // This line can be cast to "any" to bypass TypeScript error
    } as any, // TypeScript workaround: cast to "any"
  }
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
