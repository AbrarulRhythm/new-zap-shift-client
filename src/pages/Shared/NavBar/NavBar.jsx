import { Link } from 'react-router';
import Logo from '../../../components/Logo/Logo';
import NavLinks from '../../../components/NavLinks/NavLinks';
import { GoArrowUpRight } from 'react-icons/go';

const NavBar = () => {
    return (
        <div className="px-12 py-8">
            <div className="bg-white rounded-2xl">
                <div className="container">
                    <div className="flex justify-between items-center px-3">
                        {/* logo */}
                        <Logo></Logo>

                        {/* Nav Links */}
                        <NavLinks></NavLinks>

                        {/* Right Side (Buttons) */}
                        <div className="flex items-center space-x-4">
                            <div>
                                <Link className="button button-white">Sign In</Link>
                            </div>
                            <div className="flex">
                                <Link className="button button-color">Be a rider</Link>
                                <Link
                                    to="/"
                                    className="w-15 h-15 flex justify-center items-center text-2xl bg-dark-12 text-theme-primary rounded-full hover:bg-theme-primary hover:text-dark-12 duration-300"
                                >
                                    <GoArrowUpRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
