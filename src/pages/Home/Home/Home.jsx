import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';

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
        </>
    );
};

export default Home;
