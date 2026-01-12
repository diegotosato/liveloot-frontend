import SwiperComponent from "../components/SwiperComponent"
import video from "../assets/img/video-stanza.gif"

export default function HomePage() {
    return (
        <>
            <div className="jumbotron">
                <img src={video} className="video"></img>
                <h2 className="bottino"> <span className="scritta">Il</span> <span className="bocchino">bottino</span> <span className="scritta">perfetto per il tuo </span> <span className="stream">STREAM</span></h2>
            </div>

            <div className="container">
                <div className="card mt-3" >
                    <h2 className="mt-2">
                        <span>i più</span> venduti
                    </h2>
                    <div className="card-body">
                        <SwiperComponent />
                    </div>
                </div>
            </div>
        </>
    )
};


