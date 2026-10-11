import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const SocilaLogin = ({ title }) => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // Handle Google sign in
    const handleGoogleSignIn = async () => {
        try {
            // 1. Google Sign In
            const result = await signInGoogle();

            toast('Done | Sign In');

            navigate(location.state || '/');
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <>
            <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 w-full bg-gray-200 text-dark-13 font-semibold rounded-md px-4 py-2.5 hover:shadow-btn-inner duration-300 active:scale-95 cursor-pointer"
            >
                <FcGoogle className="text-xl" /> {title} with google
            </button>
        </>
    );
};

export default SocilaLogin;
