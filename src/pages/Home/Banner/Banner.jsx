import { Swiper, SwiperSlide } from 'swiper/react';
import HeroBannerSlides01 from '../../../components/HeroBannerSlides/HeroBannerSlides01';
import HeroBannerSlides02 from '../../../components/HeroBannerSlides/HeroBannerSlides02';
import HeroBannerSlides03 from '../../../components/HeroBannerSlides/HeroBannerSlides03';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="px-3 lg:px-12">
            <div className="bg-white rounded-md md:rounded-2xl">
                <div className="px-4 md:px-12 2xl:px-24 py-12 lg:py-20">
                    <Swiper
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {/* Slider 01 */}
                        <SwiperSlide>
                            <HeroBannerSlides01 />
                        </SwiperSlide>

                        {/* Slider 02 */}
                        <SwiperSlide>
                            <HeroBannerSlides02 />
                        </SwiperSlide>

                        {/* Slider 03 */}
                        <SwiperSlide>
                            <HeroBannerSlides03 />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;
