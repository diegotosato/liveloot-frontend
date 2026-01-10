import { Swiper, SwiperSlide } from 'swiper/react';
import {
    EffectCoverflow,
    Navigation,
    Mousewheel,
    Autoplay
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export default function SwiperComponent() {
    return (
        <>
            <div className="swiper-wrapper-container">
                <Swiper
                    modules={[EffectCoverflow, Navigation, Mousewheel, Autoplay]}
                    effect={'coverflow'}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView='auto'
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    mousewheel={{ enabled: true, sensitivity: 1 }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                        scale: 0.8
                    }}
                    className="mySwiper continuous"
                >
                    <SwiperSlide>
                        <a href="#">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                </Swiper>

                {/* Frecce custom */}
                <div className="custom-prev">
                    <i className="bi bi-caret-left-fill"></i>
                </div>
                <div className="custom-next">
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            </div>
        </>
    )
}