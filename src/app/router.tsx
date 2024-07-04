import { MainPage } from '../pages/main-page/main-page';
import { SplashScreen } from '../shared/components/splash-screen/splash-screen';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SplashScreen />,
    },
    {
        path: '/companies',
        element: <MainPage />,
    },
]);
