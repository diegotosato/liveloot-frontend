import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'
import { FacebookLogo, InstagramLogo, MessengerLogo, TiktokLogo } from "@phosphor-icons/react";



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
            <div className="color_footer">
                <div className="container">
                    <ul className='row padding-footer'>
                        <div className='col'>
                            <a href="#">
                                <img className='footer_logo' src={Logo}></img>
                            </a>
                        </div>
                        {list.map((items) => (
                            <div key={items.id} className='col'>
                                <h3 className='titoli-footer'><strong>{items.title}</strong></h3>
                                {
                                    items.links.map((link) => (
                                        <NavLink key={link.id}><li>{link.text}</li></NavLink>
                                    ))
                                }
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="container">

                    <div className="footer-divider"></div>
                </div>
                <div className='social'>
                    <FacebookLogo />
                    <InstagramLogo />
                    <MessengerLogo />
                    <TiktokLogo />
                </div>
                <div className='copy'>
                    &copy; Copyright. All rights reserved.
                </div>
            </div>
        </>
    )
}