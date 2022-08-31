import React from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";


const Item = ({producto}) => {

    const { name, price, descripcion, img } = producto;

    return (
        <div className="d-flex justify-content-evenly">
            <div>
            <Card
            className="my-2"
            style={{
            width: '18rem'
            }}>
            <CardHeader className="text-center text-success fs-3">
                {name}
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5" className="text-center text-danger">
                    {price}
                </CardTitle>
                <CardText className=" text-center fst-italic">
                <img className="img-thumbnail" src={`${img}`} />
                {descripcion}
                </CardText>
                <ItemCount initial={1} stock={5}/>
            </CardBody>
        </Card>
        </div>
        </div>
    )
}


export default Item;
