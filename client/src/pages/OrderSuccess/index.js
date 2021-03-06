import React, { useState,useEffect } from 'react';
import { ADD_ORDER } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { Card,Container,Button } from 'react-bootstrap';
import { ORDER_SUMMARY,EMPTY_CART } from '../../utils/actions';
import {Link} from 'react-router-dom';
import './order.css';

function OrderSuccess () {
    const [addOrder] = useMutation(ADD_ORDER)
    const [state, dispatch] = useStoreContext();
    const [summary,setSummary] = useState([])
    useEffect(() => {
        async function saveOrder() {
          const cart = await idbPromise('cart', 'get');
          if(cart){

            setSummary(cart)
          }
          const products = cart.flatMap((item) => {
            let multipleItems=[]
            for (let i=0;i<item.quantity;i++){
              multipleItems.push(item._id)
            }
            return multipleItems
          });
          if (products.length) {
            const { data } = await addOrder({ variables: { products } });
            const productData = data.addOrder.products;
            
            productData.forEach((item) => {
              idbPromise('cart', 'delete', item);
            });
            dispatch({type:EMPTY_CART})
          }

    
        }
    
        saveOrder();
    }, [addOrder,dispatch]);

    useEffect(()=>{
      if (summary){
        dispatch({
          type:ORDER_SUMMARY,
          orderSummary:summary,
        })

      }
    },[summary,dispatch])

    
    return (
        <Container className="my-3 " >
          {state.orderSummary.length?
            <Card className="orderCard m-auto">
              <Card.Header>
                <Card.Title>Order Summary</Card.Title>
              </Card.Header>
                {state.orderSummary.map((item,index)=>{
                  return (
              <Card.Body key={index} className="orderContent border">
                <div className="d-flex justify-content-between flex-wrap">
                <img className="orderImage" src={item.image} alt={item.name}></img>
                <Card.Text>{`${item.name} - ${item.description} x ${item.quantity}`}</Card.Text>
                <Card.Text> ${item.price}</Card.Text>
                </div>
              </Card.Body>

                  )
                })}
              <Card.Footer className="d-flex justify-content-center"><Button as={Link} to="/Profile">Check out your profile to see the tickets you've purchased</Button></Card.Footer>

            </Card>
          :
            <>
              <Card className="orderCard m-auto">
                <Card.Header>
                  <Card.Title className="text-center">Order Information Expired</Card.Title>
                </Card.Header>
              
                <Card.Body>
                  <Card.Text className="text-center">Thank you for your generosity!</Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-center"><Button as={Link} to="/Profile">Check out your profile to see the tickets you've purchased</Button></Card.Footer>
              </Card>
            </>}
        </Container>
    )
}

export default OrderSuccess;