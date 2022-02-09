import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { Employee } from "./employees/Employee";
import { HireEmployee } from "./employees/HireEmployee";
import { ServiceTicketList } from "./serviceTickets/ServiceTickets";
import { TicketForm } from "./serviceTickets/ticketForm";
import {Ticket} from "./serviceTickets/Ticket";


//this module is responsible for holding nav bar routes. and displaing the info when the item is clicked.
//routes are listening for event. when the there is a match /customers will display customer links
//observing the patern for matches so that the components can then be rendered
//these paths will later be rendered in the KandyKorner.js mod for functionaliity

/// what is should run when the url is clicked
// we meed exact path to make sure that we get to the exact destinantion
export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>
             <Route exact path="/Employee/create">
                 <HireEmployee /> 
            </Route> 

            <Route exact path="/ServiceTickets">
                <ServiceTicketList />
            </Route>
            <Route exact path="/ServiceTickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route exact path="/Employees/:employeeId(\d+)">
                <Employee />
            </Route>



            <Route exact path="/ServiceTickets/create">
                <TicketForm />
            </Route>

        </>
    )
}
