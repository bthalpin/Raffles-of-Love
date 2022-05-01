import React, { useEffect } from 'react';
import {ProductCard} from '../../components';
import { tempProductData } from '../../tempProductData';
import {PRODUCTS} from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import {Container} from 'react-bootstrap';
import { useStoreContext } from "../../utils/GlobalState";
import './raffle.css';

function Raffles () {
    const [state, dispatch] = useStoreContext();
    // const tempUserData = {
    //     name:'User name',
    //     email:'user@gmail.com',
    //     street:'101 Some st',
    //     address:'City, State'
    // }
    const { loading, data } = useQuery(PRODUCTS);
    
    useEffect(()=>{
        if (data){
            dispatch({
                type:UPDATE_PRODUCTS,
                products:data.products,
            })

        }
    },[data])
    return (
            <Container className="mt-5 rafflePage" >
                
                <h2 className="text-center">All Raffles</h2>
             
                <ProductCard productData={state.products} />
                
            </Container>
    )
}

export default Raffles;