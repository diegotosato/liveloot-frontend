import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react"
import {
    EffectCoverflow,
    Navigation,
    Mousewheel,
    Autoplay
} from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import {
    CaretDown
} from "@phosphor-icons/react";

export default function SwiperComponent() {
    const { setLoading, techs, setTechs } = useGlobalContext()

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/techs/all')
            .then(res => {
                setTechs(res.data)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
            })
    }, [])




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
                                <Link to={`/categories/${tech.slug}/${tech.slug_product}`}>
                                    <button className='btn-view-product rounded-pill'>
                                        Vedi prodotto <CaretDown style={{ rotate: '-90deg' }} />
                                    </button>
                                </Link>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                {/* Frecce custom */}
                <div className="custom-prev">
                    <CaretDown style={{ rotate: '90deg' }} />
                </div>
                <div className="custom-next">
                    <CaretDown style={{ rotate: '-90deg' }} />
                </div>

            </div>
        </>
    )
}