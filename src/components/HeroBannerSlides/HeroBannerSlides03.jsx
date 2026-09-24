import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router';
import slider03 from '../../assets/slide03.png';

const HeroBannerSlides03 = () => {
    return (
        <div className="container">
            <div className="flex flex-wrap -mx-3 items-center">
                <div className="w-full lg:w-6/12 px-3">
                    {/* vactor image */}
                    {/* <img src={vactor01} className="mb-4" alt="vactor" /> */}

                    {/* heading */}
                    <h1 className="text-blue-10 font-extrabold text-3xl md:text-5xl 2xl:text-6xl  leading-[1.2]">
                        We Make Sure Your <span className="text-theme-primary">Parcel Arrives</span> On Time – No Fuss.
                    </h1>

                    <p className="mt-4 max-w-150">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business
                        shipments — we deliver on time, every time.
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center gap-7 md:gap-4 mt-8">
                        <div className="flex items-center">
                            <Link className="button button-color button-full-round">Track Your Parcel</Link>
                            <Link
                                to="/"
                                className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-2xl md:text-3xl bg-dark-12 text-theme-primary rounded-full hover:bg-theme-primary hover:text-dark-12 duration-300"
                            >
                                <GoArrowUpRight />
                            </Link>
                        </div>
                        <div>
                            <Link className="button button-white">Be A Rider</Link>
                        </div>
                    </div>
                </div>

                {/* Right side image */}
                <div className="w-full lg:w-6/12 px-3">
                    <div className="mt-8 lg:mt-0">
                        <img className="mx-auto lg:mx-0 lg:ml-auto" src={slider03} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBannerSlides03;
