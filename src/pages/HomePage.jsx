import SwiperComponent from "../components/SwiperComponent"
import video from "../assets/img/video-stanza.gif"
import scritta from "../assets/img/scritta-logo.png"

export default function HomePage() {
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

                        <div className="card">

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

                        <div className="card">

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

                            {/* carosello */}
                            <div className="card-body">
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
};


