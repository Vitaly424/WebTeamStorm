import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/components/MainLayout/MainLayout.tsx';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { HomePage } from '@/pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};
