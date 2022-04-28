import React, { useEffect } from 'react';
import {ProductCard} from '../../components';
import {Card,Container,Button} from 'react-bootstrap';
// import { tempProductData } from '../../tempProductData';
import { SINGLE_PRODUCT } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import {useParams, Link} from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART,UPDATE_CART_QUANTITY } from "../../utils/actions";
import Auth from '../../utils/auth';
import { idbPromise } from "../../utils/helpers";


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
        const itemInCart = state.cart.find(item=>item._id === productId)
        if (itemInCart){
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: productId,
                quantity: parseInt(itemInCart.quantity) + 1
              });
              idbPromise('cart', 'put', {
                ...itemInCart,
                quantity: parseInt(itemInCart.quantity) + 1
              });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...product,quantity:1 }
              });
              idbPromise('cart', 'put', { ...product, quantity: 1 });

        }
    }
    console.log(state,productId)
    
    return (
        <>
            {data?
            <Container className="singleProductPage d-flex flex-wrap justify-content-around mt-5 mx-auto">
                        <Card className="singleProductCard m-2 p-3 text-center">
                            <Card.Header>Brought to you by <Link to={`/Charity/${data.product.charity._id}`}>{data.product.charity.name}</Link></Card.Header>
                            <Card.Title>{data.product.name}</Card.Title>
                            <img className="singleProductImage" src={data.product.image}/>
                            <Card.Body>{data.product.description}</Card.Body>
                            {Auth.loggedIn()?data.product.winningNumber?
                            'RAFFLE OVER':
                            <Button className="buyBtn" onClick={()=>addToCart(data.product)}>Buy Ticket</Button>
                            :
                            <Button disabled>Must Log In to Buy A Ticket</Button>
                            }
                        </Card>
            </Container>
            
            :<></>}
        </>

                    
                

    )
}

export default SingleProduct;