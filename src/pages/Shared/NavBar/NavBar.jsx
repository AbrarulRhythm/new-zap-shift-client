import { Link } from 'react-router';
import Logo from '../../../components/Logo/Logo';
import NavLinks from '../../../components/NavLinks/NavLinks';
import { GoArrowUpRight } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import useAuth from '../../../hooks/useAuth';
import ProfileMenu from '../../../components/ProfileMenu/ProfileMenu';
import defaultImage from '../../../assets/default.jpg';

const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [toggleProfileMenu, setToggleProfileMenu] = useState(false);
    const menuRef = useRef(null);
    const { user } = useAuth();

    return (
        <div className="px-3 lg:px-12 py-4 lg:py-8">
            <div className="bg-white rounded-md md:rounded-2xl">
                <div className="flex justify-between items-center px-4 lg:px-8">
                    {/* logo */}
                    <Logo></Logo>

                    {/* Nav Links */}
                    <NavLinks toggleNav={toggleNav} setToggleNav={setToggleNav}></NavLinks>

                    {/* Right Side (Buttons) */}
                    <div>
                        {user ? (
                            <div ref={menuRef} className="relative">
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setToggleProfileMenu(!toggleProfileMenu);
                                    }}
                                    className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden border border-dark-5 cursor-pointer"
                                >
                                    <img
                                        src={user?.photoURL || defaultImage}
                                        className="w-14 h-14 rounded-full object-cover bg-gray-300"
                                        alt="Profile Image"
                                    />
                                </div>
                                <ProfileMenu
                                    menuRef={menuRef}
                                    toggleProfileMenu={toggleProfileMenu}
                                    setToggleProfileMenu={setToggleProfileMenu}
                                ></ProfileMenu>
                            </div>
                        ) : (
                            <div className="hidden md:flex items-center space-x-4">
                                <div>
                                    <Link to="/login" className="button button-white">
                                        Sign In
                                    </Link>
                                </div>
                                <div className="flex">
                                    <Link to="/be-a-rider" className="button button-color">
                                        Be a rider
                                    </Link>
                                    <Link
                                        to="/"
                                        className="w-15 h-15 flex justify-center items-center text-2xl bg-dark-12 text-theme-primary rounded-full hover:bg-theme-primary hover:text-dark-12 duration-300"
                                    >
                                        <GoArrowUpRight />
                                    </Link>
                                </div>
                            </div>
                        )}
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
