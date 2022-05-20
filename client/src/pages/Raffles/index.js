import React, { useEffect } from 'react';
import {ProductCard} from '../../components';
import {PRODUCTS} from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import {Container} from 'react-bootstrap';
import { useStoreContext } from "../../utils/GlobalState";
import './raffle.css';

function Raffles () {
    const [state, dispatch] = useStoreContext();
    const { data } = useQuery(PRODUCTS);
    
    useEffect(()=>{
        if (data){
            dispatch({
                type:UPDATE_PRODUCTS,
                products:data.products,
            })

        }
    },[data,dispatch])
    return (

            <Container className="mt-5 rafflePage" >
                <h2 className="text-center">All Raffles</h2>
                <ProductCard productData={state.products} />
            </Container>
    )
}

export default Raffles;