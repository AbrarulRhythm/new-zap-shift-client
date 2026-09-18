import { Link } from 'react-router';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Be a Rider', href: '/be-a-rider' },
];

const NavLinks = () => {
    return (
        <nav>
            <ul className="flex space-x-6">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.href}
                            className="font-semibold hover:text-theme-primary duration-300 text-center h-[96px] flex items-center"
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
