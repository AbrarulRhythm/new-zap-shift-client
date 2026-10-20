import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import PrivateRoute from './PrivateRoute';
import Rider from '../pages/Rider/Rider';
import SendParcel from '../pages/SendParcel/SendParcel';

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
            {
                path: 'sendParcel',
                element: (
                    <PrivateRoute>
                        <SendParcel></SendParcel>
                    </PrivateRoute>
                ),
                loader: () => fetch('/serviceCenter.json').then((res) => res.json()),
            },
            {
                path: 'rider',
                element: (
                    <PrivateRoute>
                        <Rider></Rider>
                    </PrivateRoute>
                ),
            },
        ],
    },

    // Auth
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
        ],
    },
]);
