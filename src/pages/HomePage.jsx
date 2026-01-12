import SwiperComponent from "../components/SwiperComponent"
import video from "../assets/img/video-stanza.gif"
import scritta from "../assets/img/scritta-logo.png"

export default function HomePage() {
    return (
        <>
            <div className="jumbotron">
                <img src={video} className="video"></img>
                <div className="bottino">
                    <img src={scritta}></img>
                </div>
            </div>
            <div className="sfondo">
                <section className="best-seller">

                    <div className="palla viola palla-grande "></div>
                    <div className="palla rosso palla-media "></div>
                    <div className="palla azzurro palla-piccola "></div>
                    <div className="palla rosso palla-piccola "></div>

                    <div className="container">

                        <div className="card mt-3" >

                            <div className="wave">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="content">
                                <h2 className="mt-2">
                                    <span>i più</span> venduti
                                </h2>
                            </div>

                            <div className="card-body">
                                <SwiperComponent />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
};


