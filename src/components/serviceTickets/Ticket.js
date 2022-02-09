//dont confuse  

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Ticket = () => {
    const [ServiceTicket, set] = useState({})  // State variable for current ticket object
    const { ticketId } = useParams()  // Variable storing the route parameter
/// use params is basically saying "I want to use param from the url to view the correct items"
    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then(set)
        },
        [ ticketId ]  // Above function runs when the value of ticketId change
    )

    return (
        
        <>
        <h2>Ticket {ticketId} Ticket Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ServiceTicket.description}</h3>
                <div className="ticket__customer">Submitted by {ServiceTicket.customer?.name}</div>
                <div className="ticket__employee">Assigned to {ServiceTicket.employee?.name}</div>
            </section>
        </>
    )
}
