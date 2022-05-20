import React, { useState } from 'react';
import { Button, Modal, Card, Form } from 'react-bootstrap';
import './editProduct.css';
import { useMutation } from '@apollo/client';
import { UPDATE_PRODUCT_INFO } from '../../utils/mutations';

function EditProduct({ productInfo }) {
    const [productNameEdit, setProductNameEdit] = useState(productInfo.name)
    const [productImageEdit, setProductImageEdit] = useState(productInfo.image)
    const [productDescEdit, setProductDescEdit] = useState(productInfo.description)
    const [productPriceEdit, setProductPriceEdit] = useState(productInfo.price)
    const [showProductEdit, setShowProductEdit] = useState(false)
    const [productTicketCountEdit, setProductTicketCountEdit] = useState(productInfo.ticketCount)
    const [updateProduct] = useMutation(UPDATE_PRODUCT_INFO);
    const handleEditProductClose = () => {
        setShowProductEdit(false)
    };
    const handleEditProductShow = () => setShowProductEdit(true);

    const saveProductEdit = (e) => {
        e.preventDefault()
        updateProduct({ variables: { productId: productInfo._id, name: productNameEdit, image: productImageEdit, description: productDescEdit, price: parseInt(productPriceEdit), ticketCount: parseInt(productTicketCountEdit) } })
        handleEditProductClose()
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Button onClick={handleEditProductShow}>Edit Product</Button>

            </div>
            
            <Modal show={showProductEdit} onHide={handleEditProductClose} size="lg">
                <Modal.Header closeButton >
                    Edit Your Product
                </Modal.Header>
                <Modal.Body>

                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <Form.Group className="py-2" controlId="formEditProductName">
                                    <Form.Label>Item's Name</Form.Label>
                                    <Form.Control onChange={(e) => setProductNameEdit(e.target.value)} type="text" placeholder={productNameEdit} value={productNameEdit} autoFocus />

                                </Form.Group>
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form.Group className="py-2" controlId="formEditProductImage">
                                <Form.Label>Enter Image URL</Form.Label>
                                <Form.Control onChange={(e) => setProductImageEdit(e.target.value)} type="text" placeholder={productImageEdit} value={productImageEdit} />
                            </Form.Group>
                              
                            <Form.Group className="py-2" controlId="formEditProductDesc">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control onChange={(e) => setProductDescEdit(e.target.value)} type="text" placeholder={productDescEdit} value={productDescEdit} />
                            </Form.Group>

                            <Form.Group className="py-2" controlId="formEditProductPrice">
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control onChange={(e) => setProductPriceEdit(e.target.value)} type="text" placeholder={productPriceEdit} value={productPriceEdit} />
                            </Form.Group>

                            <Form.Group className="py-2" controlId="formEditProductTicketCount">
                                <Form.Label>Ticket Count</Form.Label>
                                <Form.Control onChange={(e) => setProductTicketCountEdit(e.target.value)} type="text" placeholder={productTicketCountEdit} value={productTicketCountEdit} />
                            </Form.Group>

                            <Button onClick={saveProductEdit}>Save</Button><Button className="mx-3 btn-secondary" onClick={handleEditProductClose}>Cancel</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default EditProduct;