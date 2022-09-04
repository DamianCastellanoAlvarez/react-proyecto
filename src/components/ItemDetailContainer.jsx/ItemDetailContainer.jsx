import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Pedirdatos from "../../helpers/Pedirdatos";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        Pedirdatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
}, [])


    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer