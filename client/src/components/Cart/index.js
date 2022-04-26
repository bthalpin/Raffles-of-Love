import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import {Button} from 'react-bootstrap';

function Checkout () {
    const [state, dispatch] = useStoreContext();
    return (
            <>
            <div>
                {state.cart.map((item,index)=>{
                    return(
                        <p key={index}>{item.name}</p>
                    )
                })}

            </div>
            <div>
                Total
            </div>
            <Button>Checkout</Button>
            </>
            
    )   
}

export default Checkout;