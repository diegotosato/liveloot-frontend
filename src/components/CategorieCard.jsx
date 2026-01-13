import { Link } from "react-router-dom"

export default function CategorieCard(props) {
    return (
        <Link to={`/categories/${props.slug}`} className="card category col-12 col-md-6 col-lg-2 text-center m-3">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
            {props && <strong><p>{props.name}</p></strong>}
            <p>{props.description}</p>
        </Link>
    )
}
