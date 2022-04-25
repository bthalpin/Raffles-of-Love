import React from 'react';
import { Link } from "react-router-dom";

import {Card,Container,Button} from 'react-bootstrap';
import './product.css';

function ProductCard ({productData}) {
    
    return (
            <Container className="d-flex flex-wrap justify-content-around m-auto">
                {productData.map((product,index)=>{
                    return (
                        <Link className="productLink" to={`/Product/${product._id-1}`} key={index}>
                            <Card className="productCard m-2 p-3 text-center">
                                <Card.Title>{product.name}</Card.Title>
                                <img className="productImage" src='/logo192.png' alt='logo'></img>
                                {/* <Card.Body>{product.description}</Card.Body>
                                <Button>Buy Ticket</Button> */}
                            </Card>
                        </Link>

                    )
                })}

            </Container>
    )
}

export default ProductCard;