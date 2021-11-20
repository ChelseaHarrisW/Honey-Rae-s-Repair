import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import {EmployeeList} from "./employees/EmployeeList";
import{ServiceTicketList} from "./serviceTickets/ServiceTickets";
import { TicketForm } from "./serviceTickets/ticketForm"; 

//this module is responsible for holding nav bar routes. and displaing the info when the item is clicked.
//routes are listening for event. when the there is a match /customers will display customer links
//observing the patern for matches so that the components can then be rendered
//these paths will later be rendered in the KandyKorner.js mod for functionaliity

export const ApplicationViews = () => {
    return (
        <>
        
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/ServiceTickets">
                <ServiceTicketList />
                </Route>

                <Route exact path="/ServiceTickets/create">
                <TicketForm />
         </Route>
        
        </>
        )
        }
