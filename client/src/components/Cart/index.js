import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import {Button,Card,Container} from 'react-bootstrap';
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
                {state.cart.map((item,index)=>{
                    return(
                        <Card key={index}>
                            <div className="d-flex justify-content-between">                       
                                <p>{item.name}</p>
                                <p>{item.price}</p>             
                            </div>
                                <CartItem key={item._id} item={item} />
                        </Card>
                        
                    )
                })}
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