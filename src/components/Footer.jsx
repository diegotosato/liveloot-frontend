import { NavLink } from 'react-router-dom'


export default function Footer() {

    const list = [
        {
            id: 1,
            title: 'SUPPORTO',
            links: [
                {
                    id: 2,
                    text: 'FAQ'
                },
                {
                    id: 3,
                    text: 'Spedizioni & Resi'
                },
                {
                    id: 4,
                    text: 'Contattaci'
                },
                {
                    id: 5,
                    text: 'Assistenza'
                }
            ]
        },
        {
            id: 6,
            title: 'LEGALE',
            links: [
                {
                    id: 7,
                    text: 'Privacy Policy'
                },
                {
                    id: 8,
                    text: 'Termini e Condizioni'
                },
                {
                    id: 9,
                    text: 'Cookie Policy'
                }
            ]
        },
        {
            id: 10,
            title: 'LIVELOOT',
            links: [
                {
                    id: 11,
                    text: 'Via di Ambrogio, 42, 20124 Milano(MI)-Italia '
                },
                {
                    id: 12,
                    text: '+39 02 1234 5678'
                },
                {
                    id: 13,
                    text: 'info@liveloot.it'
                }
            ]
        }


    ]
    return (
        <>
            <div className="list_footer">
                <div className="all">
                    <div className="container">
                        <div className="up d-flex row">
                            {list.map((items) => (
                                <ul key={items.id} className='col-4'>
                                    <h3><strong>{items.title}</strong></h3>
                                    {items.links.map((link) => (
                                        <NavLink key={link.id}><li>{link.text}</li></NavLink>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}