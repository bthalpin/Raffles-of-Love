import React from 'react';
import { Link } from "react-router-dom";

import {Card,Container,Button} from 'react-bootstrap';
import './product.css';

function ProductCard ({productData}) {
    
    return (
            <Container className="containerLarge d-flex flex-wrap justify-content-around m-auto">
                {productData.map((product,index)=>{
                    console.log(product)
                    return (
                        <Link className="productLink" to={`/Product/${product._id}`} key={index}>
                            <Card className="productCard m-2 p-3 text-center">
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Body>
                                <img className="productImage" src={product.image} alt='logo'></img>
                                {product.description}</Card.Body>
                                {/* <Button>Buy Ticket</Button> */}
                                {product.ticketCount===product.tickets?.length?'Sold':<></>}
                            </Card>
                        </Link>

                    )
                })}

            </Container>
    )
}

export default ProductCard;