import React from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";


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
                    <div className="detalle d-flex justify-content-center">
                        <Link to={`/item/${producto.id}`}>
                            <button className="btn btn-outline-success">
                                Detalle
                            </button></Link>
                    </div>        
                </CardBody>
        </Card>
        </div>
        </div>
    )
}


export default Item;
