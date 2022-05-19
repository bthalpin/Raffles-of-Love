import React from 'react';
import { Link } from "react-router-dom";
import {EditProduct} from '../../components'
import { Card, Container, Button } from 'react-bootstrap';
import './product.css';
import { PRODUCTS } from '../../utils/queries';


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
                            {/* <br></br> */}
                            <Card.Title className="my-2">{product.name}</Card.Title>
                            <Card.Body>
                                <img className="productImage" src={product.image} alt='logo'></img>
                                <br></br>
                                <div className="proDesc">{product.description}</div></Card.Body>
                            {/* <Button>Buy Ticket</Button> */}
                            {product.ticketCount === product.tickets?.length ? 'Sold' : <>Tickets left: {ticketsLeft(product)}</>}
                            
                        </Card>
                    </Link>
                    {myProducts?<EditProduct productInfo={product}/>:<></>}
         
                    </div>

                )
            })}
{/* <Modal show={showEditProduct} onHide={handleEditProductClose} size="lg">
                <Modal.Header closeButton >
                    Your Raffled Item's Information
                </Modal.Header>
                <Modal.Body>

                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <Form.Group className="py-2" controlId="formEditProductName">
                                    <Form.Label>Item's Name</Form.Label>
                                    <Form.Control onChange={(e) => setEditProductName(e.target.value)} type="text" placeholder='Product Name' value={editProductName} autoFocus />

                                </Form.Group>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                
                                    <Form.Group className="py-2" controlId="formEditProductImage">
                                        <Form.Label>Enter Image URL</Form.Label>
                                        <Form.Control onChange={(e) => setEditProductImage(e.target.value)} type="text" placeholder='Enter URL' value={editProductImage} />

                                    </Form.Group>
                                   
                            </p>

                            <Form.Group className="py-2" controlId="formEditProductDesc">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control onChange={(e) => setEditProductDesc(e.target.value)} type="text" placeholder='Product Description' value={editProductDesc} />

                            </Form.Group>

                            <Form.Group className="py-2" controlId="formEditProductPrice">
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control onChange={(e) => setEditProductPrice(e.target.value)} type="text" placeholder='Product Price' value={editProductPrice} />

                            </Form.Group>

                            <Form.Group className="py-2" controlId="formEditProductTicketCount">
                                <Form.Label>Ticket Count</Form.Label>
                                <Form.Control onChange={(e) => setEditProductTicketCount(e.target.value)} type="text" placeholder='Number of Tickets' value={editProductTicketCount} />

                            </Form.Group>

                            <Button onClick={saveEditedProduct}>Save</Button><Button className="mx-3 btn-secondary" onClick={handleEditProductClose}>Cancel</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal> */}
        </Container>

        
    )
}

export default ProductCard;