import React from 'react';
import {Card,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";


function MyCharity ({charityInfo}) {
    
    return (
        <div className="">
           
            <Container as={Link} to={`/Charity/${charityInfo._id}`} className="d-flex flex-wrap justify-content-around my-5 mx-auto">
                
                        
                        <Card className=" m-2 p-3 text-center">
                            <Card.Title>{charityInfo.name}</Card.Title>
                            <img className="" src={charityInfo.image}/>
                            <Card.Body>{charityInfo.description}</Card.Body>
                        </Card>
                        
                       
            </Container>
            
        </div>

                    
                

    )
}

export default MyCharity;