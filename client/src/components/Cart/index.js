import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import { Button, Card } from 'react-bootstrap';
import CartItem from '../CartItem';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function Checkout() {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT)

  useEffect(() => {
    if (data) {
      console.log("also")
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
        console.log(res)
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      console.log(cart.length, cart)
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length]);

  function getTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        productIds.push(item._id);
      }
    });
    console.log(state.cart)
    getCheckout({
      variables: { products: productIds },
    });
  }
  return (
    <>
      <div>
        {state.cart.map((item, index) => {
          return (
            <Card key={index}>
              <div className="d-flex justify-content-between">
                <p>{item.name}</p>
                <p>${item.price}.00</p>
              </div>
              <CartItem key={item._id} item={item} />
            </Card>
          )
        })}
      </div>
      <div className="d-flex justify-content-between" >
        <p>Total</p>
        <p>${getTotal()}</p>
      </div>
      <Button onClick={submitCheckout}>Checkout</Button>
    </>

  )
}

export default Checkout;