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
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import {
    CaretDown
} from "@phosphor-icons/react";

export default function SwiperComponent() {
    const { techs } = useGlobalContext()





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
                        rotate: -50,
                        stretch: 50,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                        scale: 0.8
                    }}
                    passiveListeners={true}
                    breakpoints={{
                        1024: {
                            mousewheel: {
                                enabled: true,
                            },
                        },
                    }}
                    className="mySwiper continuous">
                    {
                        techs.map(tech => (
                            <SwiperSlide key={tech.id}>
                                <img src={`http://localhost:3000/${tech.image}`} />
                                <h5 className='text-center'>{tech.title}</h5>
                                <Link to={`/categorie/${tech.slug}/${tech.slug_product}`}>
                                    <button className='btn-view-product rounded-pill'>
                                        Vedi prodotto <CaretDown className="icon-rotate-neg-90" />
                                    </button>
                                </Link>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                {/* Frecce custom */}
                <div className="custom-prev">
                    <CaretDown className="icon-rotate-90" />
                </div>
                <div className="custom-next">
                    <CaretDown className="icon-rotate-neg-90" />
                </div>

            </div>
        </>
    )
}