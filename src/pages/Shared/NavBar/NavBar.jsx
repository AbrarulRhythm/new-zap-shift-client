import { Link } from 'react-router';
import Logo from '../../../components/Logo/Logo';
import NavLinks from '../../../components/NavLinks/NavLinks';
import { GoArrowUpRight } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <div className="px-3 lg:px-12 py-4 lg:py-8">
            <div className="bg-white rounded-md md:rounded-2xl">
                <div className="flex justify-between items-center px-4 lg:px-8">
                    {/* logo */}
                    <Logo></Logo>

                    {/* Nav Links */}
                    <NavLinks toggleNav={toggleNav} setToggleNav={setToggleNav}></NavLinks>

                    {/* Right Side (Buttons) */}
                    <div className="hidden md:flex items-center space-x-4">
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

                    <button
                        onClick={() => setToggleNav(!toggleNav)}
                        className="text-lg w-12 h-12 border border-dark-5 rounded-md flex lg:hidden justify-center items-center my-4"
                    >
                        {toggleNav ? <IoCloseSharp className="text-3xl" /> : <FaBars />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
