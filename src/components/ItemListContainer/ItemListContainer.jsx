import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Pedirdatos from '../../helpers/Pedirdatos'
import { Spinner } from 'reactstrap';

const ItemListContainer = () => {

    

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Pedirdatos()
        .then(res => {
            setProductos(res);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        })
    }, [])
    
if(loading){
    return (
        <div class="d-flex justify-content-around spinner">
            <div>
                <Spinner
                    color="success"
                    size=""
                    type="grow">
                </Spinner>  
            </div>
            <div>
                <Spinner
                    color="success"
                    size=""
                    type="grow">
                </Spinner>  
            </div>
            <div>
                <Spinner
                    color="success"
                    size=""
                    type="grow">
                </Spinner>  
            </div>
        </div>
    )
}
    return (
        <>
            <ItemList key={productos.name} productos = {productos} />
        </>
    )
}


export default ItemListContainer