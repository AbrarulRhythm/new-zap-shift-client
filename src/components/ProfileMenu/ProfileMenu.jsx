import useAuth from '../../hooks/useAuth';
import defaultImage from '../../assets/default.jpg';
import { Link } from 'react-router';
import { LuLayoutDashboard, LuUserRound } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { PiSignOutBold } from 'react-icons/pi';
import { useEffect } from 'react';

const ProfileMenu = ({ menuRef, toggleProfileMenu, setToggleProfileMenu }) => {
    const { user, singOutUser } = useAuth();

    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setToggleProfileMenu(false);
            }
        };

        const handleLinkClick = () => {
            // Close the menu when any link is clicked
            setToggleProfileMenu(false);
        };

        // Attach the link click event handler to the menu links
        const links = menuRef.current?.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', handleLinkClick);
        });

        document.addEventListener('mousedown', handleClickOutSide);

        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
            links.forEach((link) => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, [menuRef, setToggleProfileMenu]);

    // Handle Sign Out
    const handleSignOut = async () => {
        try {
            await singOutUser();

            toast.success('Successfully signed out! We hope to see you again soon.');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div
            ref={menuRef}
            className={`${toggleProfileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute bg-white right-0 top-19 w-73.5 h-auto border border-dark-5 shadow rounded-md text-sm before:content-[''] before:w-6 before:h-6  before:absolute before:-top-3 before:right-3.5 before:bg-white before:rotate-45 before:rounded-tl-sm before:border-t before:border-l before:border-dark-5 z-50`}
        >
            <div className="pt-8 mb-6">
                <img
                    src={user?.photoURL || defaultImage}
                    className="w-11 h-11 object-cover rounded-full mx-auto mb-2 border border-dark-5"
                    alt="User Profile Pic"
                />
                <h5 className="text-dark-12 text-sm font-medium text-center">{user && user.displayName}</h5>
                <span className="text-center block text-[12px]">User Role</span>
            </div>

            <ul>
                <li>
                    <Link to="/dashboard/overview" className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100">
                        <LuLayoutDashboard className="text-lg" /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100">
                        <LuUserRound className="text-lg" /> My Profile
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100">
                        <IoSettingsOutline className="text-lg" /> Account Settings
                    </Link>
                </li>

                <div className="border-t-0 border border-dark-5 my-4"></div>

                <div className="px-4 pb-3">
                    <button
                        onClick={handleSignOut}
                        className="w-full px-3 py-3 rounded-md border border-dark-5 bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer flex items-center justify-center gap-1 font-medium"
                    >
                        <PiSignOutBold className="text-lg" /> Sing Out
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default ProfileMenu;
