import React, {useEffect} from 'react';
import {ProductCard} from '../../components/';
import {Card,Container} from 'react-bootstrap';
import { useStoreContext } from "../../utils/GlobalState";
import {SINGLE_CHARITY,PRODUCTS_BY_CHARITY} from '../../utils/queries';
import { UPDATE_CURRENT_CHARITY,UPDATE_CHARITY_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './single.css';

function Charity () {
    const {charityId} = useParams()
    const [state, dispatch] = useStoreContext();
    const { data } = useQuery(SINGLE_CHARITY,{
        variables:{charityId:charityId},
    });

    const results = useQuery(PRODUCTS_BY_CHARITY,{
        variables:{charityId:charityId},
    });

    useEffect(()=>{
        if(data){
            dispatch({
                type: UPDATE_CURRENT_CHARITY,
                currentCharity: data.charity,
              })

        }
    },[data,dispatch])
    useEffect(()=>{
        if(results.data){
            dispatch({
                type: UPDATE_CHARITY_PRODUCTS,
                charityProducts: results.data.productsByCharity,
              })

        }
    },[results,dispatch])
    
    
    return (
        <div className="singleCharityPage ">
            {data?
            <>
            <Card>
                <img alt="" className="charityImage1" src={state.currentCharity.logo}></img>
            </Card>
            <Container className="singleCharityContainer d-flex flex-wrap justify-content-around my-5 mx-auto">
                <Card className="singleCharityCard frontCard1 m-2 p-3 text-center col-lg">
                    <Card.Title className="title1 m-2">{state.currentCharity.name}</Card.Title>
                    <img className="singleCharityImage" src={state.currentCharity.image} alt=""/>
                    <Card.Body>
                        <p>Their Mission: </p>{state.currentCharity.mission}
                    </Card.Body>
                    <Card.Body>
                        <p className="Link">For more information, visit: <a href = {state.currentCharity.website}>{state.currentCharity.website}</a></p>
                    </Card.Body>
                </Card>
                        
                <Card className="singleCharityCard2 m-2 p-3 col-lg">
                    <iframe width="420" height="315" src={state.currentCharity.youtube} frameBorder="0" allowFullScreen="" title="youtube"></iframe>
                </Card>
                       
            </Container>

            <ProductCard productData={state.charityProducts} />
            </>
            :<></>}
        </div>

    )
}

export default Charity;