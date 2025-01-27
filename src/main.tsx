import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import CandidateSearch from './pages/CandidateSearch.tsx';
import SavedCandidatesWrapper from './pages/SavedCandidatesWrapper.tsx'; // Wrapper for passing props
import ErrorPage from './pages/ErrorPage.tsx';

// Create router with the v7_startTransition future flag
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
          element: <SavedCandidatesWrapper />, // Use wrapper to pass props
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // This line can be casted to "any" to bypass TypeScript error
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
