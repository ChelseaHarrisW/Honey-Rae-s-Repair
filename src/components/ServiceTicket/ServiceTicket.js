import React, { useEffect, useState } from "react"
// above importing declarations that will allow me to manage state throuought the module using the react library

// the initial null value is serving as the transient state this function below is returning all the JSX or HTML

export const ServiceTicketList = () => {
    const [serviceTickets, setServiceTickets] = useState([]) // called destructuring value 1. rep of state value 2. sets the state

    //declaing export function ServiceTicketList to store the varibles which are Arrays that hold information about the serviceTicket
    // the varibles are setting the value initially to null by using an empty string, and empty array.

    // we are using useEffect here to store the serviceTicket that  we have fetched from the server (denoted with the /serviceTickets link) in the serviceTickets array once the promice is complete.
    // then storing it on the null value below.

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer") //used qwery string parameter to specify 
                .then(res => res.json())
                .then(
                    (serviceTicketArray) => { setServiceTickets(serviceTicketArray) }
                )
        },
        []
    )

    //below we are using useEffect to to filter down the serviceTickets.length to display the updateMessages function to render the coresponding messages below only if the criteria is true.
    // this creates a boolean?
    return (
        <>
            {
                serviceTickets.map(
                    (serviceTicket) => {
                        return <p key={`ticket--{ticket.id}`}>
                            {serviceTicket.description} submitted by {serviceTicket.customer.name} and worked on by {serviceTicket.employee.name} </p>


                    }
                )
            }
        </>

    )
}

// Returning a div that displays a string of totalServiceTicketMessage followed by a map array method that will return a serviceTicketObj.name
// we do this by way of the key serviceTicket--serviceTicketObj.id interpullated to find the serviceTicketObj.name wraped in a p tab for styling purposes
