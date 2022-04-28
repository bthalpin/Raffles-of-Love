import React, {useEffect} from 'react';
import {ProductCard} from '../../components/';
import {Card,Container} from 'react-bootstrap';
// import { tempProductData } from '../../tempProductData';
import { useStoreContext } from "../../utils/GlobalState";
import {SINGLE_CHARITY,PRODUCTS_BY_CHARITY} from '../../utils/queries';
import { UPDATE_CURRENT_CHARITY,UPDATE_CHARITY_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './single.css';

function Charity () {
    const {charityId} = useParams()
    const [state, dispatch] = useStoreContext();
    const tempProductData = state.products
    console.log(charityId)
    const { loading, data } = useQuery(SINGLE_CHARITY,{
        variables:{charityId:charityId},
    });
    const results = useQuery(PRODUCTS_BY_CHARITY,{
        variables:{charityId:charityId},
    });
    useEffect(()=>{
        if(data){
            console.log(data.charity,data)
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
    const tempCharity = 
        {
            name:"Temp Name",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ",
            image:'/logo192.png'
        }
    
    return (
        <div className="singleCharityPage ">
            {data?
            <>
            <Container className="d-flex flex-wrap justify-content-around my-5 mx-auto">
                
                        
                        <Card className="singleCharityCard m-2 p-3 text-center">
                            <Card.Title className="title m-2">{state.currentCharity.name}</Card.Title>
                            <img className="singleCharityImage" src={state.currentCharity.image}/>
                            <Card.Body>
                                <p>Their Mission: </p>{state.currentCharity.mission}
                            </Card.Body>
                            <Card.Body>
                                <p>For more information, visit: <a href = {state.currentCharity.website}>{state.currentCharity.website}</a></p>
                            </Card.Body>
                        </Card>
                        
                       
            </Container>
            <ProductCard productData={state.charityProducts} />
            </>
            :<></>}
        </div>

                    
                

    )
}

export default Charity;