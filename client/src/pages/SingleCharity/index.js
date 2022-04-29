import React, {useEffect} from 'react';
import {ProductCard, FavoriteButton} from '../../components/';
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
    console.log(charityId)
    const { loading, data } = useQuery(SINGLE_CHARITY,{
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
    },[data])
    useEffect(()=>{
        if(results.data){
            dispatch({
                type: UPDATE_CHARITY_PRODUCTS,
                charityProducts: results.data.productsByCharity,
              })

        }
    },[results])
    console.log(state.currentCharity,state.charityProducts)
    
    return (
        <div className="singleCharityPage ">
            {data?
            <>
            <FavoriteButton/>
            <Container className="d-flex flex-wrap justify-content-around my-5 mx-auto">
                
                        
                        <Card className="singleCharityCard m-2 p-3 text-center col-lg">
                            <Card.Title className="title m-2">{state.currentCharity.name}</Card.Title>
                            <img className="singleCharityImage" src={state.currentCharity.image} alt=""/>
                            <Card.Body>
                                <p>Their Mission: </p>{state.currentCharity.mission}
                            </Card.Body>
                            <Card.Body>
                                <p>For more information, visit: <a href = {state.currentCharity.website}>{state.currentCharity.website}</a></p>
                            </Card.Body>
                        </Card>
                        
                        <Card className="singleCharityCard m-2 p-3 col-lg">
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