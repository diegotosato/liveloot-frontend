
export default function Contatti() {

    const chiSiamo = [
        {
            id: 1,
            title: 'LA NOSTRA STORIA',
            text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tempore dolorum hic quaerat nam doloribus, sed quis totam, cupiditate voluptatibus, in laboriosam est ipsum ea vel impedit. Cumque animi vel aperiam temporibus doloribus inventore corporis quibusdam magni autem, porro eum sapiente voluptates dolor tenetur iusto, consequuntur modi explicabo! Non ullam odit doloremque aliquid, reprehenderit unde ipsum quidem mollitia expedita nihil.'
        },
        {
            id: 2,
            title: 'CONTATTI',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt veniam tempora ducimus quas eius. Consequuntur ex temporibus tenetur maiores soluta, quos quod rerum magnam tempore labore voluptatum ab neque maxime quisquam debitis expedita! Modi dicta pariatur possimus. Debitis, quod?'
        },
        {
            id: 3,
            title: 'LAVORA CON NOI',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores, laborum quidem ipsa vero id cupiditate asperiores repellendus error minima porro corporis laudantium at nisi minus nobis mollitia. Esse, repellat!'
        },
        {
            id: 4,
            title: 'GODITI I NOSTRI FILM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur dolores nulla magnam architecto. Repudiandae voluptate amet illo animi error!'
        }
    ]

    return (
        <div className="back-gradient">

            {/* sfere sul fondo */}
            <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
            <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>

            <div className="container">
                <h1 className="text-center">CHI SIAMO</h1>

                <div className="container">
                    <ul className="regular row text-center justify-content-around">
                        {
                            chiSiamo.map(item => (

                                <li className="col-5 p-3 my-5" key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text} </p>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
} 