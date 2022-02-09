import React, { useState } from "react"
import { useHistory } from "react-router-dom"



export const TicketForm = () => {
    const [ticket, update] = useState({ // update is the setter fx, it will be how we update the ticket  info to API
            "description": "",
            "emergency": false
        });
        // the varibles above are both representing transient state that have 2 different respondsibilities. the "ticket" state will store user input whereas the update state take changes made by user to put them in transient state to add back to ticket
        // state vs set... puttin more items in the box
        // the state here will return the info dedired obove ie a string or a boolean refer to the use state obj above
    const history = useHistory()


    // prevent default prevents the default refresh
    const saveTicket = (SubmitTicketClicked) => {
        SubmitTicketClicked.preventDefault()

        const submitTicket = {
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submitTicket)
        }
        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then(() => {
                history.push("/ServiceTickets")
            })
    }

    // a function to submit ticket to the database return will reflect such
    // if you change your form be sure to also change it in aplication views to make sure everything is consistent and matching with coresponding modules
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...ticket }
                                copy.description = evt.target.value
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (evt) => {
                                const copy = { ...ticket }
                                copy.description = evt.target.value
                                update(copy)
                            }

                        }

                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const copy = { ...ticket }
                            copy.emergency = evt.target.checked
                            update(copy) // needed to track the updated copies (changes in state)
                        }

                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}
        
