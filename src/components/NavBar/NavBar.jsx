import React from "react"
import '../NavBar/NavBar.jsx'
import logo from '../../assets/Logo.png'
import CartWidget from "../CartWidget/CartWidget.jsx"
import '../NavBar/NavBar.css'
import { Link } from "react-router-dom"




const NavBar = () =>{
    return (
        <>
            <div>
                <img src={logo} alt="logo"  className="logo" />
            </div>
            <div className="menu">
                <nav>
                    <ul className="">
                        <li>
                            <Link to="/" >Inicio</Link>
                        </li>
                        <li>
                            <Link to='{Blog}' >Blog</Link>
                        </li>
                        <li>
                            <Link to='{Contacto}'>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <CartWidget />
        </>
    )
}


export default NavBar