import { Link } from 'react-router';
import logoDark from '../../assets/logo-dark.png';
import logoLight from '../../assets/logo-Light.png';

const Logo = ({ logoType = 'dark' }) => {
    return (
        <Link to="/" className="hover:opacity-80 duration-200" title="Zap Shift">
            <img src={logoType == 'light' ? logoLight : logoDark} alt="Zap Shift" />
        </Link>
    );
};

export default Logo;
