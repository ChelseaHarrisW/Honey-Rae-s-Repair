//dont confuse

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Ticket = () => {
  const [ServiceTicket, set] = useState({}); // State variable for current ticket object
  const [employees, setEmployees] = useState([]); // State variable for current ticket object
  const { ticketId } = useParams(); // Variable storing the route parameter
  /// use params is basically saying "I want to use param from the url to view the correct items"
  const history = useHistory()
  useEffect(
    () => {
      fetch(
        `http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`
      )
        .then((res) => res.json())
        .then(set);
    },
    [ticketId] // Above function runs when the value of ticketId change
  );
  // define a use effect that has an empty dependancy array
  // the respondsibility of this use state will be for a employee dropdown (assigning tickets)
  // the use state coresponding will be needed in prder for the JSX to be rendered

  useEffect(() => {
    return fetch(`http://localhost:8088/employees`)
      .then((res) => res.json())
      .then(setEmployees);
  }, []);
  // how do I know when I need a change event versus a function with React?
  const assignEmployee = (changeEvent) => {
        const newServiceTicketObject = {
     
      customerId: parseInt(localStorage.getItem('honey_customer')),
      employeeId: parseInt(changeEvent.target.value),
      description: ServiceTicket.description,
      emergency: ServiceTicket.emergency,
      dateCompleted: ServiceTicket.dateCompleted,
    }
    return (fetch(`http://localhost:8088/serviceTickets/${ticketId}`), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
         },
        body: JSON.stringify(newServiceTicketObject),
      })
        .then(res => res.json())
        .then(() => {
    history.push("/serviceTickets")
        })
    
  }

  return (
    <>
      <h2>Ticket {ticketId} Ticket Details</h2>
      <section className="ticket">
        <h3 className="ticket__description">{ServiceTicket.description}</h3>
        <div className="ticket__customer">
          Submitted by {ServiceTicket.customer?.name}
        </div>
        <div className="ticket__employee">
          <select id="employee" onChange={ assignEmployee}>
            {employees.map((employee) => {
              return <option value={employee.id}key={`employee--${employee.id}`}>{employee.name}</option>;
            })}
          </select>
        </div>
      </section>
    </>
  );
};
