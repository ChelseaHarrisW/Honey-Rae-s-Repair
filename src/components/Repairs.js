
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { ServiceTicketList } from "./ServiceTicket/ServiceTicket"

// ^^the functions above are importing statements that are later called below to render the coresponding import location that
// below are followed from the listed items. 
// the functions below are being called in a function called Repairs which is returning the functions ability to render the HTML to the DOM setCustomers
// see corresponding function at loocation.

export const Repairs = () => {

    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
       
        <h2>Customer List</h2>
        <CustomerList />
        
        <h2>Employee List</h2>
        <EmployeeList />

        <h2>Service Tickets</h2>
        <ServiceTicketList />
        </>
       
    )
}
