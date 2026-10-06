import { Navigate } from 'react-router';
import LoadingPage from '../components/LoadingPage/LoadingPage';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingPage></LoadingPage>;
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>;
    }

    return children;
};

export default PrivateRoute;
