import { MainLayoutFooter } from './MainLayoutFooter/MainLayoutFooter.tsx';
import { MainLayoutHeader } from './MainLayoutHeader/MainLayoutHeader.tsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PageLoader } from '@/components/ui/PageLoader/PageLoader.tsx';

export const MainLayout = () => {
    return (
        <>
            <MainLayoutHeader />
            <Suspense fallback={ <PageLoader />}>
                <Outlet />
            </Suspense>
            <MainLayoutFooter />
        </>
    );
};
