import React, { useState } from 'react';
import { ProductCard } from '../../components/';
import { Button, Modal, Card, Form } from 'react-bootstrap';
import { tempProductData } from '../../tempProductData';
import { SINGLE_CHARITY, PRODUCTS_BY_CHARITY } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import './editProduct.css';
import { useMutation } from '@apollo/client';
import { UPDATE_PRODUCT_INFO } from '../../utils/mutations';

function EditProduct({ productInfo, charityId }) {
    const [productName, setProductName] = useState(productInfo.name)
    const [productImage, setProductImage] = useState(productInfo.image)
    const [productDesc, setProductDesc] = useState(productInfo.description)
    const [productPrice, setProductPrice] = useState(productInfo.price)
    const [showProduct, setShowProduct] = useState(false)
    const [productTicketCount, setProductTicketCount] = useState(productInfo.ticketCount)
    const [updateProduct, result] = useMutation(UPDATE_PRODUCT_INFO);
    const handleProductClose = () => {
        setShowProduct(false)
    };
    const handleProductShow = () => setShowProduct(true);

    const { loading, data } = useQuery(PRODUCTS_BY_CHARITY, {
        variables: { charityId: charityId },
    });

    const saveProduct = (e) => {
        e.preventDefault()
        updateProduct({ variables: { productId: productInfo._id, name: productName, image: productImage, description: productDesc, price: productPrice, ticketCount: productTicketCount } })
        handleProductClose()
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Button onClick={handleProductShow}>Add Product</Button>

            </div>
            {data?.productsByCharity?.length ?

                <ProductCard productData={data.productsByCharity} />
                :
                <p className="text-center m-3">No Products</p>}

            <Modal show={showProduct} onHide={handleProductClose} size="lg">
                <Modal.Header closeButton >
                    Your Raffled Item's Information
                </Modal.Header>
                <Modal.Body>

                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <Form.Group className="py-2" controlId="formProductName">
                                    <Form.Label>Item's Name</Form.Label>
                                    <Form.Control onChange={(e) => setProductName(e.target.value)} type="text" placeholder={productName} value={productName} autoFocus />

                                </Form.Group>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {productInfo.image === 'Enter Image URL' ?
                                    <Form.Group className="py-2" controlId="formProductImage">
                                        <Form.Label>Enter Image URL</Form.Label>
                                        <Form.Control onChange={(e) => setProductImage(e.target.value)} type="text" placeholder='Enter URL' value={productImage} />

                                    </Form.Group>
                                    : <img src={productInfo.image} alt={productInfo.name}></img>}
                            </p>

                            <Form.Group className="py-2" controlId="formProductDesc">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control onChange={(e) => setProductDesc(e.target.value)} type="text" placeholder={productDesc} value={productDesc} />

                            </Form.Group>

                            <Form.Group className="py-2" controlId="formProductPrice">
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control onChange={(e) => setProductPrice(e.target.value)} type="text" placeholder={productPrice} value={productPrice} />

                            </Form.Group>

                            <Form.Group className="py-2" controlId="formProductTicketCount">
                                <Form.Label>Ticket Count</Form.Label>
                                <Form.Control onChange={(e) => setProductTicketCount(e.target.value)} type="text" placeholder={productTicketCount} value={productTicketCount} />

                            </Form.Group>

                            <Button onClick={saveProduct}>Save</Button><Button className="mx-3 btn-secondary" onClick={handleProductClose}>Cancel</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default EditProduct;