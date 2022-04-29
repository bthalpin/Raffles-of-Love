import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_SUCCESS} from '../../utils/queries';
import { ADD_ORDER } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { Card,Container } from 'react-bootstrap';
import { ORDER_SUMMARY } from '../../utils/actions';

function OrderSuccess () {
    const [addOrder,results] = useMutation(ADD_ORDER)
    const [state, dispatch] = useStoreContext();

    const [orderDetails,setOrderDetails] = useState(false)
    const {sessionId} = useParams()
    useEffect(() => {
        async function saveOrder() {
          const cart = await idbPromise('cart', 'get');
          
          const products = cart.flatMap((item) => {
            let multipleItems=[]
            for (let i=0;i<item.quantity;i++){
              multipleItems.push(item._id)
            }
            return multipleItems
          });
          console.log(products)
          if (products.length) {
            console.log('here')
            setOrderDetails(cart)
            const { data } = await addOrder({ variables: { products } });
            const productData = data.addOrder.products;
            dispatch({
              type:ORDER_SUMMARY,
              orderSummary:cart
            })
            productData.forEach((item) => {
              idbPromise('cart', 'delete', item);
            });
          
          }
          console.log(orderDetails)
    
        }
    
        saveOrder();
      }, [addOrder]);

    console.log(state.cart)
    return (
        <Container>
            {/* <Card>
              <Card.Header>
                <Card.Title>Order Summary</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{`${state.orderSummary[0].name} - ${state.orderSummary[0].description}`}</Card.Text>
                <Card.Text>{state.orderSummary[0].quantity} ${state.orderSummary[0].price}</Card.Text>
              </Card.Body>
            </Card> */}
        </Container>
    )
}

export default OrderSuccess;