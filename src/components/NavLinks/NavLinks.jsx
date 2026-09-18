import { Link } from 'react-router';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Be a Rider', href: '/be-a-rider' },
];

const NavLinks = ({ toggleNav, setToggleNav }) => {
    const handleLinkClick = () => {
        setToggleNav(false);
    };

    return (
        <nav>
            <ul className="hidden lg:flex space-x-6">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.href}
                            className="font-semibold hover:text-theme-primary duration-300 text-center h-24 flex items-center"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Nav */}
            <ul
                className={`flex lg:hidden flex-col absolute left-0 right-0 top-[99%] mx-3 space-x-6 bg-white border border-dark-5 rounded-md px-5 py-2 shadow-xl transition-all duration-300 ease-in-out transform origin-top
                ${
                    toggleNav
                        ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }
                `}
            >
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            onClick={handleLinkClick}
                            to={link.href}
                            className="font-semibold hover:text-theme-primary duration-300 block py-2"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks;
