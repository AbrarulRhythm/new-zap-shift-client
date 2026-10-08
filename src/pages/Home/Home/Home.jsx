import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <>
            {/*Hero Banner  */}
            <section className="hero-banner">
                <Banner></Banner>
            </section>

            {/* How It Works */}
            <section className="how-it-works pt-12 pb-6 lg:pt-25 lg:pb-19">
                <HowItWorks></HowItWorks>
            </section>

            {/* Our Services */}
            <section className="our-services">
                <div className="bg-blue-10 pt-12 pb-6 lg:pt-25 lg:pb-19 mx-3 lg:mx-12 rounded-md md:rounded-2xl px-4 md:px-12 2xl:px-24">
                    <OurServices></OurServices>
                </div>
            </section>
        </>
    );
};

export default Home;
