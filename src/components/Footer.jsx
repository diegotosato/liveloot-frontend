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
        }
    ]
    return (
        <>
            <div className="color_footer">
                <div className="container">
                    <ul className='row padding-footer justify-content-around m-0 px-5'>
                        <div className='footer-logo-visual col-sm-12 col-xl-3'>
                            <a href="#" className=''>
                                <img className='footer_logo' src={Logo}></img>
                            </a>
                        </div>
                        {list.map((items) => (
                            <div key={items.id} className='col-sm-3'>
                                <h3 className='titoli-footer'><strong>{items.title}</strong></h3>
                                {
                                    items.links.map((link) => (
                                        <NavLink key={link.id}><li>{link.text}</li></NavLink>
                                    ))
                                }
                            </div>
                        ))}
                        <div className="col-sm-3">
                            <h3 className='titoli-footer'><strong>LIVELOOT</strong></h3>
                            <a>
                                <li>
                                    Via di Ambrogio, 42, 20124 Milano(MI)-Italia
                                </li>
                                <li>
                                    +39 02 1234 5678
                                </li>
                                <li>
                                    info@liveloot.it
                                </li>
                            </a>
                        </div>
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