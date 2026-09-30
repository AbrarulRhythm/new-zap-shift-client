import Logo from '../components/Logo/Logo';
import authImage from '../assets/auth.png';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="auth-wrap bg-white">
            <div className="px-3 lg:px-8 py-3 md:py-6 fixed top-0 left-0 bg-white lg:bg-transparent w-full">
                <Logo></Logo>
            </div>

            <div>
                <div className="flex flex-wrap min-h-screen">
                    <div className="w-full lg:w-6/12">
                        <Outlet></Outlet>
                    </div>

                    <div className="w-full lg:w-6/12">
                        <div className="bg-green-1 flex justify-center items-center w-full h-full px-3">
                            <img src={authImage} className="w-[80%] md:w-auto" alt="Auth Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
