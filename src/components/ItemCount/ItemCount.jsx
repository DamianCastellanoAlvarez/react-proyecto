import React, { useState } from "react";
import '../ItemCount/ItemCount.css';


const ItemCount = ({stock, initial}) => {
    const [cuenta, setCuenta] = useState(initial)

    const sumar = () =>{
        cuenta < stock && setCuenta(cuenta + 1)
            cuenta >= stock && alert('STOCK INSUFICIENTE')
    }

    const restar = () =>{
        setCuenta(Math.max (cuenta - 1, 1))
    }

    const onAdd = () => {
        alert(`Agregaste al carrito ${cuenta} productos de PAUSA MARKET`)
    }

    return (
        <div class="justify-content-evenly">
            <div class="d-flex justify-content-around">
                <button onClick={restar}>-</button>
                <p className="numero">{cuenta}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div class="d-flex justify-content-evenly">
                <button type="button" className="" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount