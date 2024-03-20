import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/assets/styles/index.scss';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary.tsx';
import { AppRouterProvider } from '@/app/providers/RouterProvider/RouterProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <AppRouterProvider />
        </ErrorBoundary>
    </React.StrictMode>,
);
