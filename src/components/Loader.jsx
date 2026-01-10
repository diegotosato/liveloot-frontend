import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'


export default function Loader() {


    return (
        <div className="loader">
            <Helix
                size="45"
                speed="2.5"
                color="white"
            />
        </div>
    )
}