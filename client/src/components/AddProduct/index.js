import React, { useState } from 'react';
import { ProductCard } from '..';
import { Button, Modal, Card, Form } from 'react-bootstrap';
import { tempProductData } from '../../tempProductData';
import { SINGLE_CHARITY, PRODUCTS_BY_CHARITY } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT} from '../../utils/mutations';

function EditProduct({charityId}) {
    const [productName, setProductName] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [showProduct, setShowProduct] = useState(false)
    const [productTicketCount, setProductTicketCount] = useState(0)
    const [addProduct, result] = useMutation(ADD_PRODUCT);
    const handleProductClose = () => {
        setShowProduct(false)
    };
    const handleProductShow = () => setShowProduct(true);

    const { loading, data } = useQuery(PRODUCTS_BY_CHARITY, {
        variables: { charityId: charityId },
    });

    const saveProduct = async (e) => {
        e.preventDefault()
        try {
            await addProduct({ variables: { charity:charityId,name: productName, image: productImage, description: productDesc, price: parseInt(productPrice), ticketCount: parseInt(productTicketCount) } })

        } catch (error) {
            console.error(error)
        }
        handleProductClose()
        window.location.reload()
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
                                    <Form.Control onChange={(e) => setProductName(e.target.value)} type="text" placeholder='Product Name' value={productName} autoFocus />

                                </Form.Group>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                
                                    <Form.Group className="py-2" controlId="formProductImage">
                                        <Form.Label>Enter Image URL</Form.Label>
                                        <Form.Control onChange={(e) => setProductImage(e.target.value)} type="text" placeholder='Enter URL' value={productImage} />

                                    </Form.Group>
                                   
                            </p>

                            <Form.Group className="py-2" controlId="formProductDesc">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control onChange={(e) => setProductDesc(e.target.value)} type="text" placeholder='Product Description' value={productDesc} />

                            </Form.Group>

                            <Form.Group className="py-2" controlId="formProductPrice">
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control onChange={(e) => setProductPrice(e.target.value)} type="text" placeholder='Product Price' value={productPrice} />

                            </Form.Group>

                            <Form.Group className="py-2" controlId="formProductTicketCount">
                                <Form.Label>Ticket Count</Form.Label>
                                <Form.Control onChange={(e) => setProductTicketCount(e.target.value)} type="text" placeholder='Number of Tickets' value={productTicketCount} />

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