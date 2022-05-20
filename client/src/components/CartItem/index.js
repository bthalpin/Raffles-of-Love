import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import {Button} from 'react-bootstrap';
import './CartItem.css'

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: item._id,
      quantity: parseInt(value)
    });
    idbPromise('cart', 'put', { ...item, quantity: parseInt(value) });
  }

  return (
    <div className="cartItem d-flex justify-content-between align-items-center mx-1 mb-1 p-1">
      <div>
        <img
          className="cartImage m-1"
          src={item.image}
          alt=""
        />
      </div>
      <div>
        <div>
          <label htmlFor="quantity">Qty:</label>
          <input
            className="m-1 rounded"
            name="quantity"
            type="number"
            max={item.ticketCount-item.tickets.length}
            min='1'
            placeholder={item.quantity}
            value={item.quantity}
            onChange={onChange}
          />
          <Button
            className="removeBtn btn-secondary"
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            Remove Ticket
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
