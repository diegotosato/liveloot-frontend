import SwiperComponent from "../components/SwiperComponent"
import video from "../assets/img/video-stanza.gif"
import scritta from "../assets/img/scritta-logo.png"

import axios from 'axios';
import { useState, useEffect } from "react"



export default function HomePage() {


    const [arrivals, setArrivals] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/techs/all')
            .then(res => {
                const product = []
                for (let i = 0; i < 3; i++) {
                    product.push(res.data[i])
                }
                setArrivals(product)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            {/* hero-space */}
            <div className="hero-space">
                <img src={video} className="video" />
                <img src={scritta} className="visual" />
            </div>

            {/* sfondo colorato */}
            <div className="back-gradient">

                {/* più venduti */}
                <section className="product-section best-seller">

                    {/* sfere sul fondo */}
                    <div className="sphere sphere-purple sphere-bigger"></div>
                    <div className="sphere sphere-red sphere-medium"></div>
                    <div className="sphere sphere-blue sphere-smaller"></div>
                    <div className="sphere sphere-red sphere-smaller "></div>

                    <div className="container">

                        <div className="card border-0">

                            {/* onda */}
                            <div className="wave">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* titolo sezione */}
                            <div className="content">
                                <h2>
                                    <span>i più</span> venduti
                                </h2>
                            </div>

                            {/* carosello */}
                            <div className="card-body">
                                <SwiperComponent />
                            </div>

                        </div>

                    </div>

                </section>

                {/* ultimi arrivi */}
                <section className="product-section new-arrivals">

                    {/* sfere sul fondo */}
                    <div className="sphere sphere-purple sphere-bigger"></div>
                    <div className="sphere sphere-red sphere-medium"></div>
                    <div className="sphere sphere-blue sphere-smaller"></div>
                    <div className="sphere sphere-red sphere-smaller "></div>

                    <div className="container">

                        <div className="card pb-0 border-0">

                            {/* onda */}
                            <div className="wave">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* titolo sezione */}
                            <div className="content">
                                <h2>
                                    <span>ultimi</span> arrivi
                                </h2>
                            </div>

                            <div className="shower">
                                {/* immagine SX */}
                                <div className="new-prod-smaller-sx">
                                    {
                                        <img src={`http://localhost:3000/${arrivals[1]?.image}`} />
                                    }
                                </div>
                                {/* immagine DX */}
                                <div className="new-prod-smaller-dx">
                                    {
                                        <img src={`http://localhost:3000/${arrivals[2]?.image}`} />
                                    }
                                </div>
                                {/* immagine centrale */}
                                <div className="new-prod-bigger">
                                    {
                                        <img src={`http://localhost:3000/${arrivals[0]?.image}`} />
                                    }
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
};


