import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ( {item} ) => {

    return(
        <div>
            <div>
                <ItemCount initial={1} stock={5} />
            </div>
        </div>

)           
}

export default ItemDetail