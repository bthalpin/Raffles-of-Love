import React from 'react';
import { Link } from "react-router-dom";

import { Card, Container, Button } from 'react-bootstrap';
import './product.css';
import { PRODUCTS } from '../../utils/queries';


function ticketsLeft(product) {
    var num1 = product.ticketCount
    var num2 = product.tickets.length
    var sum = num1 - num2
    return sum
}


function ProductCard({ productData }) {
    return (
        <Container className="containerLarge d-flex flex-wrap justify-content-around m-auto">
            {productData.map((product, index) => {
                return (
                    <Link className="productLink" to={`/Product/${product._id}`} key={index}>
                        <Card className="productCard m-2 p-3 text-center">
                            {
                                window.location.pathname === '/Product' ?
                                    <Card.Header className="cardHeader">Brought to you by {product?.charity?.name}</Card.Header>
                                    : <></>
                            }
                            <br></br>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Body>
                                <img className="productImage" src={product.image} alt='logo'></img>
                                <br></br>
                                {product.description}</Card.Body>
                            {/* <Button>Buy Ticket</Button> */}
                            {product.ticketCount === product.tickets?.length ? 'Sold' : <>Tickets left: {ticketsLeft(product)}</>}
                        </Card>
                    </Link>

                )
            })}

        </Container>
    )
}

export default ProductCard;