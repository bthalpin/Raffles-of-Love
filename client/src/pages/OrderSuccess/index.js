import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_SUCCESS} from '../../utils/queries';
import { ADD_ORDER } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";

function OrderSuccess () {
    const [addOrder,results] = useMutation(ADD_ORDER)
    const [state, dispatch] = useStoreContext();

    // Prevent double order
    const [saved,setSaved] = useState(false)
    const {sessionId} = useParams()
    console.log(sessionId)
    const { loading, data } = useQuery(QUERY_SUCCESS,{
        variables:{sessionId:sessionId}
    });
    useEffect(() => {
        async function saveOrder() {
          const cart = await idbPromise('cart', 'get');
          const products = cart.map((item) => item._id);
    
          if (products.length) {
            console.log('here')
            const { data } = await addOrder({ variables: { products } });
            const productData = data.addOrder.products;
    
            productData.forEach((item) => {
              idbPromise('cart', 'delete', item);
            });
          }
    
          setTimeout(() => {
            window.location.assign('/');
          }, 5000);
        }
    
        saveOrder();
      }, [addOrder]);

    console.log(state.cart)
    return (
        <>
            <h2>SUCCESS!!!</h2>
        </>
    )
}

export default OrderSuccess;