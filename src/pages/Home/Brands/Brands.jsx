import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay } from 'swiper/modules';

import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
import moonsar from '../../../assets/brands/moonstar.png';
import randsad from '../../../assets/brands/randstad.png';
import starPeople from '../../../assets/brands/start-people.png';
import start from '../../../assets/brands/start.png';

const Brands = () => {
    const brands = [
        { id: 1, logo: amazon, name: 'amazon' },
        { id: 2, logo: casio, name: 'casio' },
        { id: 3, logo: moonsar, name: 'moonsar' },
        { id: 4, logo: randsad, name: 'randsad' },
        { id: 5, logo: starPeople, name: 'star people' },
        { id: 6, logo: start, name: 'start' },
    ];

    return (
        <div className="container">
            <h2 className="text-3xl font-extrabold text-blue-10 mb-12.5 text-center">We've helped thousands of sales teams</h2>

            <Swiper
                autoplay={{ delay: 3000 }}
                speed={2000}
                loop={true}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {brands.map((brand) => (
                    <SwiperSlide>
                        <div key={brand.id} className="flex justify-center">
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands;
