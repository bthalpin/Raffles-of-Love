import React,{useEffect} from 'react';
import { Card, Container, ModalHeader } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {CHARITIES} from '../../utils/queries';
import { UPDATE_CHARITIES } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import './charity.css';

function Charity () {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(CHARITIES);
    useEffect(()=>{
        if(data){
            dispatch({
                type: UPDATE_CHARITIES,
                charities: data.charities,
              });
        }
    },[data])
    const tempCharities = state.charities
    
    return (
            <Container className="charityPage d-flex flex-wrap justify-content-around mx-auto">
                <Card className="frontCard p-3">  
                    <p className="my-3">
                        <span className="display-1">Welcome&nbsp;</span> to <span className="display-5">&nbsp;Raffles of Love.</span>
                    </p>
                    <p><span className='display-5'>We are&nbsp;</span> a non-profit organization created to uphold non-profit charities.</p>
                    <p><span className='display-5'>You&nbsp;</span> can donate and not only help these charities reach those in need, but also have a chance to win yourself a prize for your selflessness.</p>
                    <p><span className='display-3'>Together,&nbsp;</span> we can make the difference!</p>
                </Card>  
                <img className="imageFront" src='http://globalyouthinitiative.net/wp-content/themes/youth_speak_up_2013/images/about/about-divider-news.jpg' alt=""></img>
                <div>
                    <p className='lists my-3 bordered'>Tracking over <span className='display-4'>$46 billion</span> within the last year of 2021 in US-based charitable...</p>
                    <ul key="fact">
                        <li>Overall giving increased <span className='display-6'>9%</span> in 2021, representing a three-year increase of <span className='display-6'>19%</span>.</li>
                        <li>Online giving grew <span className='display-6'>9%</span> in 2021, representing a three-year increase of <span className='display-6'>42%</span>.</li>
                        <li><span className='display-6'>28%</span> of online contributions were made from a mobile device.</li>
                        <li>Small, medium, and large nonprofits in the United States now raise more than <span className='display-6'>10%</span> of their fundraising online in comparison to previous years.</li>
                        <li>No matter how small, even <span className='display-6'>YOU</span> can make the difference.</li>
                    </ul>
                    <img className="imageFront" src='https://www.ocpgroup.ma/media/styles/wide_x1_max_w1440/azblob/2020-07/20200130_TOGO_FOCP_128%20%281%29.jpg?itok=gNDgGzDB' alt=""></img>
                    <p className='charityTitle'>
                        <ModalHeader className="display-2 charityAnim">Charities</ModalHeader>
                    </p>
                </div>
                {tempCharities.map((charity,index)=>{
                    if(charity.name==='New-Charity-Change-Name'){
                        return
                    }
                    return (
                        <Link className="charityLink" to={`/Charity/${charity._id}`} key={index}>
                            <Card className="charityCard p-3 text-center">
                                <Card.Title className="title m-2">{charity.name}</Card.Title>
                                <Card.Body>
                                    <img alt="" className="charityImage" src={charity.logo}></img>
                                </Card.Body>
                                <Card.Body>    
                                    <p className='m-4'>{charity.description}</p>
                                </Card.Body>
                            </Card>
                        </Link>

                    )
                })}

            </Container>
    )
}

export default Charity;