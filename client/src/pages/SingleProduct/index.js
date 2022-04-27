import React, { useEffect } from 'react';
import {ProductCard} from '../../components';
import {Card,Container,Button} from 'react-bootstrap';
// import { tempProductData } from '../../tempProductData';
import { SINGLE_PRODUCT } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import {useParams} from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";

import './singleProduct.css';

function SingleProduct () {
    const {productId} = useParams()
    const [state, dispatch] = useStoreContext();
    const tempProductData = state.products;
    const { loading,data}  = useQuery(SINGLE_PRODUCT,
        
            {variables:{
                productId:productId
            }}
        )
    console.log(data)
    
    // useEffect(()=>{

    // },[data])

    const addToCart = (product) => {
        dispatch({
            type: ADD_TO_CART,
            product: { ...product }
          });
    }
    console.log(state,productId)
    
    return (
        <>
            {data?
            <Container className="singleProductPage d-flex flex-wrap justify-content-around mt-5 mx-auto">
                        <Card className="singleProductCard m-2 p-3 text-center">
                            <Card.Title>{data.product.name}</Card.Title>
                            <img className="singleProductImage" src={data.product.image}/>
                            <Card.Body>{data.product.description}</Card.Body>
                            <Button onClick={()=>addToCart(data.product)}>Buy Ticket</Button>
                        </Card>
            </Container>
            
            :<></>}
        </>

                    
                

    )
}

export default SingleProduct;