import React, { useState } from "react"
import { useHistory } from "react-router-dom"



export const HireEmployee = () => {
    const [employeeName, setEmployeeName] = useState() // update is the setter fx, it will be how we update the employee  info to API
    const [employeeSpecialty, setEmployeeSpecialty] = useState() // update is the setter fx, it will be how we update the employee  info to API
    
            
    
        // the varibles above are both representing transient state that have 2 different respondsibilities. the "employee" state will store user input whereas the update state take changes made by user to put them in transient state to add back to employee
        // state vs set... puttin more items in the box
        // the state here will return the info dedired obove ie a string or a boolean refer to the use state obj above
    const history = useHistory()


    const saveEmployee = (SubmitEmployeeClicked) => {
        SubmitEmployeeClicked.preventDefault()

        const submitEmployee = {
            
            name: employeeName,
            specialty: employeeSpecialty,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submitEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    //a function to submit employee to the database return will reflect such
   // if you change your form be sure to also change it in aplication views to make sure everything is consistent and matching with coresponding modules
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name</label>
                    <input
                        
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee-Name"
                        onChange={
                            (evt) => {
                                
                                setEmployeeName(evt.target.value)
                            }

                        }

                    />
                </div>
                
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description"> Your Tech Specialty</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employeeSpecialty }
                                copy.EmployeeSpecialty = evt.target.value
                            }
                        }
                        required autoFocus
                        type="text"
                        classSpecialty="form-control"
                        placeholder="Employee-Specialty"
                        onChange={
                            (evt) => {
                                
                        
                                setEmployeeSpecialty(evt.target.value)
                            }

                        }

                    />
                </div>
            </fieldset>
            
            
            <button className="btn btn-primary" onClick={saveEmployee}>
                Submit Application
            </button>
        </form>
    )
}
        
