import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_SUCCESS} from '../../utils/queries';

function OrderSuccess () {
    const {sessionId} = useParams()
    console.log(sessionId)
    const { loading, data } = useQuery(QUERY_SUCCESS,{
        variables:{sessionId:sessionId}
    });
    useEffect(()=>{
        if(data){
            console.log(data)
        }
    },data)
    return (
        <>
            <h2>SUCCESS!!!</h2>
        </>
    )
}

export default OrderSuccess;