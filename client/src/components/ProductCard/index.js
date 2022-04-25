import React from 'react';
import {Card,Container,Button} from 'react-bootstrap';
import './product.css';

function ProductCard ({productData}) {
    
    return (
            <Container className="d-flex flex-wrap justify-content-around m-auto">
                {productData.map((product,index)=>{
                    return (
                        <Card className="productCard m-2 p-3 text-center" key={index}>
                            <Card.Title>{product.name}</Card.Title>
                            <img className="productImage" src='/logo192.png' alt='logo'></img>
                            {/* <Card.Body>{product.description}</Card.Body>
                            <Button>Buy Ticket</Button> */}
                        </Card>

                    )
                })}

            </Container>
    )
}

export default ProductCard;