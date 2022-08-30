import React from "react"
import '../NavBar/NavBar.jsx'
import logo from '../../assets/Logo.png'
import CartWidget from "../CartWidget/CartWidget.jsx"
import '../NavBar/NavBar.css'




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
                            <a href="#" className="">Inicio</a>
                        </li>
                        <li>
                            <a href="./productos.html" className="">productos</a>
                        </li>
                        <li>
                            <a href="./blog.html" className="">Blog</a>
                        </li>
                        <li>
                            <a href="./contactos.html" className="">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <CartWidget />
        </>
    )
}


export default NavBar