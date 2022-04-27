import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import {Button} from 'react-bootstrap';
import CartItem from '../CartItem';
function Checkout () {
    const [state, dispatch] = useStoreContext();
    
    
    const getTotal = () =>{
    const currentTotal = state.cart.reduce((acc,item)=>{
      return acc+item.price
    },0)
    return currentTotal
   

  }
    return (
            <>
            <div>
                {/* {state.cart.map((item,index)=>{
                    return(
                        <div className="d-flex justify-content-between" key={index}>
                            <p >{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                        
                    )
                })} */}
                {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

            </div>
            <div className="d-flex justify-content-between" >
                <p>Total</p>
                <p>{getTotal()}</p>
            </div>
            <Button>Checkout</Button>
            </>
            
    )   
}

export default Checkout;