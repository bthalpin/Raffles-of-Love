import React from 'react';
import {ProductCard} from '../../components/';
import {Card,Container} from 'react-bootstrap';
// import { tempProductData } from '../../tempProductData';
import { useStoreContext } from "../../utils/GlobalState";
import './single.css';

function Charity () {
    const [state, dispatch] = useStoreContext();
    const tempProductData = state.products
    
    const tempCharity = 
        {
            name:"Temp Name",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ",
            image:'/logo192.png'
        }
    
    return (
        <div className="singleCharityPage ">
            <Container className="d-flex flex-wrap justify-content-around my-5 mx-auto">
                
                
                        <Card className="singleCharityCard m-2 p-3 text-center">
                            <Card.Title>{tempCharity.name}</Card.Title>
                            <img className="singleCharityImage" src={tempCharity.image}/>
                            <Card.Body>{tempCharity.description}</Card.Body>
                        </Card>
            </Container>
            <ProductCard productData={tempProductData} />
        
        </div>

                    
                

    )
}

export default Charity;