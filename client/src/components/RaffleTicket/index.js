import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Card,Button} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { REMOVE_TICKET } from '../../utils/mutations';
import './raffleTicket.css';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_USER_INFO } from '../../utils/actions';

function RaffleTicket ({tickets}) {  
    const [state, dispatch] = useStoreContext();
    const [removeTicket] = useMutation(REMOVE_TICKET)
    const checkWinner = (ticket) => {
        if (ticket.product.winningNumber==='000000000000000000000000'){
            return ''
        } else if (ticket.product.winningNumber===ticket._id){
            return 'won'
        } else {
            return 'lost'
        }
    }
    const checkResults = (ticket) => {
        if (ticket.product.winningNumber==='000000000000000000000000'){
            return `Tickets Left: ${ticket.product.ticketCount-ticket.product.tickets.length}`
        } else if (ticket.product.winningNumber===ticket._id){
            return 'Winning Ticket!!'
        } else {
            return 'Better Luck Next Time'
        }
    }
    const deleteLosingTicket = (ticketId) => {
       
        removeTicket({variables:{ticketId:ticketId}})
        const newTicketArray = state.user.tickets.filter(ticket=>{
           
            return ticket._id!==ticketId})
        
        dispatch({
            type:UPDATE_USER_INFO,
            user:{...state.user,tickets:newTicketArray}
        })
    }

    return (
            <Container className="d-flex flex-wrap justify-content-around m-auto">
                {state.user.tickets?.map((ticket,index)=>{                    
                    return(
                        <>
                        {ticket.product.winningNumber!=='000000000000000000000000'&&ticket.product.winningNumber!==ticket._id?
                        <div className="ticketLink m-2" onClick={()=>deleteLosingTicket(ticket._id)}>
                            <Card className="lost">
                                <Card.Header className="raffleTop">
                                    <Card.Title className="text-center">CLICK TO DELETE</Card.Title>
                                {/* } */}
                                </Card.Header>
                                <Card.Body className="">
                                    <p className='text-center'>
                                        {ticket.product.name}
                                    </p>
                                    <div className="d-flex justify-content-center" >
                                        <img className="raffleImg m-auto" src={ticket.product.image} alt={ticket.product.name}></img>
                                    </div>
                                    <p className="m-1 text-center">Better Luck Next Time</p>
                                </Card.Body>
                            </Card>
                        </div>:
                        <Link className="ticketLink m-2" 
                        
                        
                        to={`/Product/${ticket.product._id}`} 

                        key={index}>
                            <Card className={checkWinner(ticket)}>
                                <Card.Header className="raffleTop">
                                    <Card.Title className="text-center">Ticket #{ticket.ticketNumber}</Card.Title>
                                {/* } */}
                                </Card.Header>
                                <Card.Body className="">
                                    <p className='text-center'>
                                        {ticket.product.name}
                                    </p>
                                    <div className="d-flex justify-content-center" >
                                        <img className="raffleImg m-auto" src={ticket.product.image} alt={ticket.product.name}></img>
                                    </div>
                                    <p className="m-1 text-center">{checkResults(ticket)}</p>
                                </Card.Body>
                            </Card>
                        </Link>}
                        </>

                    )
                })}
                
            </Container>
    )
}

export default RaffleTicket;