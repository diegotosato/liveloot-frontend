
import {
    GameController, Headset, Desktop, Certificate,
} from "@phosphor-icons/react";

export default function Contatti() {
    const chiSiamo = [
        {
            id: 1,
            title: 'LA NOSTRA STORIA',
            icon: <GameController size={52} color="#57d9ec" />,
            text: 'Nati dalla passione per il gaming estremo, Live Loot seleziona solo il miglior hardware per streamer e pro-player. Ogni componente nel nostro catalogo è stato testato per garantire prestazioni imbattibili durante le sessioni più intense.'
        },
        {
            id: 2,
            title: 'CONTATTI',
            icon: <Headset size={52} color="#57d9ec" />,
            text: 'Hai bisogno di supporto tecnico per il tuo setup o informazioni su un ordine? Il nostro team di esperti è pronto ad aiutarti. Scrivici in chat o usa i nostri canali social per entrare in contatto diretto con la crew.'
        },
        {
            id: 3,
            title: 'LAVORA CON NOI',
            icon: <Desktop size={52} color="#57d9ec" />,
            text: 'Il team di Live Loot è in costante espansione. Cerchiamo talenti appassionati di tecnologia e gaming che vogliano rivoluzionare il mondo dello streaming. Inviaci il tuo portfolio e diventa parte della nostra squadra.'
        },
        {
            id: 4,
            title: 'QUALITÀ GARANTITA',
            icon: <Certificate size={52} color="#57d9ec" />,
            text: 'Non scendiamo a compromessi. Ogni prodotto Live Loot supera rigorosi controlli di qualità e affidabilità. Offriamo solo brand certificati e una garanzia totale per assicurarti che il tuo "bottino" sia sempre all’altezza delle aspettative.'
        }
    ]

    return (
        <div className="back-gradient chiSiamo">
            <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
            <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller"></div>

            <div className="main-wrapper">
                <div className="main-card-container">
                    <h1 className="title-chi-siamo">CHI SIAMO</h1>

                    <ul className="row justify-content-center list-unstyled">
                        {
                            chiSiamo.map(item => (
                                <li className="col-lg-5 card-chi-siamo" key={item.id}>
                                    <div className="icon-container">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}