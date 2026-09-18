import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className="site-wrap">
            {/* Header */}
            <header>
                <NavBar></NavBar>
            </header>
            {/* Header End */}

            {/* ==================== - Main - ==================== */}
            <main>
                <Outlet></Outlet>
            </main>

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
            {/* Footer End */}
        </div>
    );
};

export default RootLayout;
