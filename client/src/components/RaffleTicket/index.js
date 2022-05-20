import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Card} from 'react-bootstrap';
import './raffleTicket.css';

function RaffleTicket ({tickets}) {    
    
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

    return (
            <Container className="d-flex flex-wrap justify-content-around m-auto">
                {tickets?.map((ticket,index)=>{                    
                    return(
                        <Link className="ticketLink m-2" to={`/Product/${ticket.product._id}`} key={index}>
                            <Card className={checkWinner(ticket)}>
                                <Card.Header className="raffleTop">
                                    <Card.Title className="text-center">Ticket #{ticket.ticketNumber}</Card.Title>
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
                        </Link>
                    )
                })}
                
            </Container>
    )
}

export default RaffleTicket;