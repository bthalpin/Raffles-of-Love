import React,{useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {PRODUCTS} from '../../utils/queries';
import {Container} from 'react-bootstrap';

function RaffleTicket ({tickets}) {
    console.log(tickets)
    let myProducts=[];
    let myIds=[];



    // HAVE TO GET THE PRODUCT INFO FOR THE TICKET TO DISPLAY ON PROFILE PAGE
    // if (tickets){
    //     tickets.map((ticket)=>{
    //         myProducts.push({id:ticket.productId._id,number:ticket.ticketNumber})
    //         myIds.push(ticket.productId._id)
    //     })

    // }
    // console.log(myProducts)
    // const {loading,data} = useQuery(PRODUCTS);
    
    // console.log(data)
    // useEffect(()=>{
    //     if (data&&myIds){
    //         console.log(data)
    //         const myProduct = data.products.filter((product)=>{
    //             // console.log(myProducts,product._id)
    //             return myIds.includes(product._id)
    //         })
    //         console.log(myProduct,data.products)
    //     }
    // },[data,myProducts])
    return (
            <Container className="d-flex flex-wrap justify-content-around m-auto">
                
            <p>test</p>
            </Container>
    )
}

export default RaffleTicket;