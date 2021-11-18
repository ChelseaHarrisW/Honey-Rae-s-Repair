import React, { useEffect, useState } from "react"
// above importing declarations that will allow me to manage state throuought the module using the react library

// the initial null value is serving as the transient state this function below is returning all the JSX or HTML

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessages] = useState("")
    //declaing export function CustomerList to store the varibles which are Arrays that hold information about the customer
    // the varibles are setting the value initially to null by using an empty string, and empty array.

    // we are using useEffect here to store the customer that  we have fetched from the server (denoted with the /customers link) in the customers array once the promice is complete.
    // then storing it on the null value below.

    useEffect(
        () => {
            fetch("http://localhost:8088/Customers")
                .then(res => res.json())
                .then(
                    (customerArray) => { setCustomers(customerArray) }
                )
        },
        []
    )

    //below we are using useEffect to to filter down the customers.length to display the updateMessages function to render the coresponding messages below only if the criteria is true.
    // this creates a boolean?
    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessages("You have 1 customer")
            }
            else {
                updateMessages(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    // Returning a div that displays a string of totalCustomerMessage followed by a map array method that will return a customerObj.name
    // we do this by way of the key customer--customerObj.id interpullated to find the customerObj.name wraped in a p tab for styling purposes
    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.map(
                    (customerObj) => {
                        return <p key={`customer--${customerObj.id}`}>{customerObj.name}</p>
                    }
                )
            }
        </>
    )
}
