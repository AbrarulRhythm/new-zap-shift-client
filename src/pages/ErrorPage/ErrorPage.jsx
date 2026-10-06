import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import notFoundImage from '../../assets/404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="site-wrap">
            {/* Header */}
            <header className="relative">
                <NavBar></NavBar>
            </header>
            {/* Header End */}

            {/* ==================== - Main - ==================== */}
            <main className="py-10 lg:py-20">
                <div className="container">
                    <div className="flex flex-wrap -mx-3 justify-center">
                        <div className="w-full lg:w-9/12 px-3 flex justify-center items-center">
                            <div className="text-center">
                                <img src={notFoundImage} className="m-auto" alt="404" />
                                <h3 className="text-4xl lg:text-5xl font-semibold text-dark-12 mt-4">Page not found</h3>
                                <Link to="/" className="button button-color inline-block mt-4 md:mt-7 lg:mt-8">
                                    Go back home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
            {/* Footer End */}
        </div>
    );
};

export default ErrorPage;
