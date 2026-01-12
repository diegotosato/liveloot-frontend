import SwiperComponent from "../components/SwiperComponent"

export default function HomePage() {
    return (
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
    )
};


