import HeroBannerSlides01 from '../../../components/HeroBannerSlides/HeroBannerSlides01';

const Banner = () => {
    return (
        <div className="px-3 lg:px-12">
            <div className="bg-white rounded-md md:rounded-2xl">
                <div className="px-4 md:px-12 2xl:px-24 py-12 lg:py-20">
                    <HeroBannerSlides01 />
                </div>
            </div>
        </div>
    );
};

export default Banner;
