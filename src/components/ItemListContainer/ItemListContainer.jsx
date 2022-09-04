import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Pedirdatos from '../../helpers/Pedirdatos'
import { Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [producto, setProductos] = useState ([])
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        Pedirdatos()
        .then(res => {
            if(!categoryId){
                setProductos(res);
            }else{
                setProductos ( res.filter((prod) => prod.category === categoryId ))
            }
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() =>{
            setLoading(false);
        })
    }, [categoryId])
    
if(loading){
    return (
        <div className="d-flex justify-content-around spinner">
            <div>
                <Spinner
                    color="success"
                    size="rm"
                    type="grow">
                </Spinner>  
            </div>
            <div>
                <Spinner
                    color="success"
                    size="rm"
                    type="grow">
                </Spinner>  
            </div>
            <div>
                <Spinner
                    color="success"
                    size="rm"
                    type="grow">
                </Spinner>  
            </div>
        </div>
    )
    }
    return (
        <>
            <ItemList productos = {producto} />
        </>
    )
}


export default ItemListContainer