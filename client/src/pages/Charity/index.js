import React,{useEffect} from 'react';
import {Card,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {CHARITIES} from '../../utils/queries';
import { UPDATE_CHARITIES } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import './charity.css';

function Charity () {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(CHARITIES);
    console.log(loading,data)
    useEffect(()=>{
        if(data){
            dispatch({
                type: UPDATE_CHARITIES,
                charities: data.charities,
              });
        }
    },[data])
    const tempCharities = state.charities
    // [
    //     {
    //         name:"Temp Name",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with "

    //     },
    //     {
    //         name:"Temp Name",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with "

    //     },
    //     {
    //         name:"Temp Name",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with "

    //     },
    //     {
    //         name:"Temp Name",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with "

    //     },
    //     {
    //         name:"Temp Name",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with "

    //     },
    //     {
    //         name:"Temp Name",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with "
    //     },
    // ]
    return (
            <Container className="charityPage d-flex flex-wrap justify-content-around mx-auto">
                <p className="my-5 p-2">
                <span className="display-1">Welcome</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                {tempCharities.map((charity,index)=>{
                    return (
                        <Link className="charityLink" to={`/Charity/${charity._id}`} key={index}>
                            <Card className="charityCard m-2 p-3 text-center">
                                <Card.Title className="title">{charity.name}</Card.Title>
                                
                                <Card.Body>
                                    <img className="charityImage" src={charity.image} alt="Charity picture"></img>
                                    <p>{charity.description}</p>
                                    <p>{charity.website}</p>
                                </Card.Body>
                            </Card>
                        </Link>

                    )
                })}

            </Container>
    )
}

export default Charity;