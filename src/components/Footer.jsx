import { NavLink } from 'react-router-dom'


export default function Footer() {

    const list = [
        {
            id: 1,
            title: 'CONTACTS',
            links: [
                {
                    id: 2,
                    text: 'Terms Of Use'
                },
                {
                    id: 3,
                    text: 'Privacy policy (New)'
                },
                {
                    id: 4,
                    text: 'Ad Choices'
                },
                {
                    id: 5,
                    text: 'Contact Us'
                }
            ]
        },
        {
            id: 6,
            title: 'MOVIES',
            links: [
                {
                    id: 7,
                    text: 'HOME',
                    to: '/'
                },
                {
                    id: 8,
                    text: 'MOVIES',
                    to: '/'
                },
                {
                    id: 9,
                    text: 'CONTACTS',
                    to: '/contacts'
                }
            ]
        }

    ]
    return (
        <>
            <div className="content">
                <div className="all">
                    <div className="container">
                        <div className="up">
                            {list.map((items) => (
                                <ul key={items.id}>
                                    <h3><strong>{items.title}</strong></h3>
                                    {items.links.map((link) => (
                                        <NavLink to={link.to} key={link.id}><li>{link.text}</li></NavLink>
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