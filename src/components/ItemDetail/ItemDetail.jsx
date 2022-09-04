import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ( {item} ) => {

    return(
        <div>
            <h3>{item.name}</h3>
            <div>
                <ItemCount initial={1} stock={5} />
            </div>
        </div>

)           
}

export default ItemDetail