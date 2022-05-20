import React from 'react';
import {EditProduct} from '../../components'
import { Card, Container } from 'react-bootstrap';


function ticketsLeft(product) {
    var num1 = product.ticketCount
    var num2 = product.tickets.length
    var sum = num1 - num2
    return sum
}


function MyProductCard({ productData,myProducts }) {
    return (
        <Container className="containerLarge d-flex flex-wrap justify-content-around m-auto">
            {productData.map((product, index) => {
                return (
                    
                    <div className="productLink" key={index}>
                        <Card className="productCard p-3 text-center">
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
                                <div className="proDesc">{product.description}</div>
                            </Card.Body>
                           
                            {product.ticketCount === product.tickets?.length ? 'Sold' : <>Tickets left: {ticketsLeft(product)}</>}
                            
                        {myProducts?<EditProduct productInfo={product}/>:<></>}
                        </Card>
                    </div>
         

                )
            })}

        </Container>

        
    )
}

export default MyProductCard;