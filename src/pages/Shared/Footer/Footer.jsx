import { Link } from 'react-router';
import Logo from '../../../components/Logo/Logo';
import fb from '../../../assets/fb.png';
import yt from '../../../assets/yt.png';
import x from '../../../assets/x.png';
import linkedin from '../../../assets/linkedin.png';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Be a Rider', href: '/be-a-rider' },
];

const Footer = () => {
    return (
        <div className="px-3 lg:px-12 py-4 lg:py-8">
            <div className="bg-dark-13 rounded-md md:rounded-2xl">
                <div className="px-6 md:px-24.5 py-20 text-center">
                    {/* First Part */}
                    <div className="mb-8">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <Logo logoType="light"></Logo>
                        </div>

                        <p className="text-dark-5 max-w-187 mt-4 mx-auto">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business
                            shipments — we deliver on time, every time.
                        </p>
                    </div>

                    {/* Seconed Part */}
                    <ul className="flex flex-col md:flex-row justify-center items-center gap-8 py-8 border-y border-dashed border-blue-9 mb-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.href} className="text-dark-5 hover:text-theme-primary duration-300">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Third Part */}
                    <ul className="flex justify-center items-center gap-6">
                        <li>
                            <a href="#" target="_blank">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={x} alt="x/twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={fb} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={yt} alt="youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
