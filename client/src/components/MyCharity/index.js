import React from 'react';
import {Card,Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import './myCharity.css'

function MyCharity ({charityInfo,handleEditShow}) {
    
    return (
        <div className="">
           
            <Container className="d-flex flex-wrap justify-content-around my-5 mx-auto">
                
                        
                        <Card className=" m-2 p-3 text-center">
                            <Card.Title>{charityInfo.name}</Card.Title>
                            <img className="" src={charityInfo.image}/>
                            <Card.Body>{charityInfo.description}</Card.Body>
                            <Button className="charityButton" onClick={()=>handleEditShow()}>Edit Charity Info</Button>
                        </Card>
                        
                       
            </Container>
            
        </div>

                    
                

    )
}

export default MyCharity;