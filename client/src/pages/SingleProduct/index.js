import React from 'react';
import {ProductCard} from '../../components';
import {Card,Container,Button} from 'react-bootstrap';
// import { tempProductData } from '../../tempProductData';
import {useParams} from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import './singleProduct.css';

function SingleProduct () {
    const [state, dispatch] = useStoreContext();
    let {productId} = useParams()
    const tempProductData = state.products
    return (
        <>
            <Container className="singleProductPage d-flex flex-wrap justify-content-around mt-5 mx-auto">
                        <Card className="singleProductCard m-2 p-3 text-center">
                            <Card.Title>{tempProductData[productId].name}</Card.Title>
                            <img className="singleProductImage" src={tempProductData[productId].image}/>
                            <Card.Body>{tempProductData[productId].description}</Card.Body>
                            <Button>Buy Ticket</Button>
                        </Card>
            </Container>
        </>

                    
                

    )
}

export default SingleProduct;