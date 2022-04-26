import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";

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
            </>
            
    )   
}

export default Checkout;