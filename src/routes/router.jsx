import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
]);
