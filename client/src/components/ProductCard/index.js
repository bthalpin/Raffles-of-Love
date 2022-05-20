import React from 'react';
import { Link } from "react-router-dom";
import {EditProduct} from '../../components'
import { Card, Container } from 'react-bootstrap';
import './product.css';


function ticketsLeft(product) {
    var num1 = product.ticketCount
    var num2 = product.tickets.length
    var sum = num1 - num2
    return sum
}


function ProductCard({ productData,myProducts }) {
    return (
        <Container className="productContainer containerLarge d-flex flex-wrap justify-content-around m-auto">
            {productData.map((product, index) => {
                return (
                    <div  key={index}>
                        <Link className="productLink"  to={`/Product/${product._id}`}>
                            <Card className="productCard p-3 text-center">
                                {
                                    window.location.pathname === '/Product' ?
                                        <Card.Header className="cardHeader">Brought to you by {product?.charity?.name}</Card.Header>
                                        : <></>
                                }
                                <Card.Title className="my-2">{product.name}</Card.Title>
                                
                                <Card.Body>
                                    <img className="productImage" src={product.image} alt='logo'></img>
                                    <br></br>
                                    <div className="proDesc">{product.description}</div>
                                </Card.Body>
                            
                                {product.ticketCount === product.tickets?.length ? 'Sold' : <>Tickets left: {ticketsLeft(product)}</>}
                                
                            </Card>
                        </Link>
                        {myProducts?<EditProduct productInfo={product}/>:<></>}
                    </div>

                )
            })}

        </Container>

        
    )
}

export default ProductCard;