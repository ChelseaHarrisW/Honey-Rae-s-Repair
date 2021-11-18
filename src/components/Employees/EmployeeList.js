import React, { useEffect, useState } from "react"
// importing these functions from react
// for useEffect in useEffect see below
//  useEffect is a takes 2 parameters a fetch function, and a
//
export const EmployeeList = () => {
    // declaring the functional component names employee list which allow us to export what I need to see on DOM or JSX
    const [employees, setEmployees] = useState([])
    // declaring varibles which hold the array useState array which accept a function followed by an array.
    // the second varible is being used to show the changed state
    console.log(useState("hello world"))
    console.log(employees)

    useEffect(
        () => {
            fetch("http://localhost:8088/Employees")
                .then(res => res.json())
                .then(
                    (employeeFromAPI) => { setEmployees(employeeFromAPI) }
                )
        },
        []
    )
    // below the functions are following a pattern of: 1what should run, followed by: 2 what it should run. 
    // the map array method is being used below to 1. interate through the employeeObj to return a copy of the employeeObj.name by way of the key employee-- interpulated employee.id.
    // we are able to desplat the name by using dot notation to invoke the obj defined int the parameters called above denoted as employeeObj
    return (
        <>
            {
                employees.map(
                    (employeeObj) => {
                        // declaring employeeObj and returning the statement below.
                        return (
                            <>
                                <p key={`specialty--${employeeObj.id}`}>{employeeObj.specialty}</p>
                            </>
                        )
                    }
                )
            }
            {
                employees.map(
                    (employeeObj) => {
                        // declaring employeeObj and returning the statement below.
                        return (
                            <>
                                <p key={`employee--${employeeObj.id}`}>{employeeObj.name}</p>
                            </>
                        )
                    }
                )
            }
        </>
    )
}


// note the placement of the opening and closing tags in this function. this is how we are able to return the JSX which is later translated to an HTML representation of the employee
// this is being rendered on the Repairs function in the repairs JS file

//chapter Employee specilties below



    // useEffect(() => {
    //     /*
    //         1. Use .map() to get the specialty of each employee
    //         2. Then update a state variable to be a comma-separated string
    //             (e.g. "iPhone, Printers, ...")
    //     */
    //             employees.map(
    //                 (employeeObj) => {
    //                     // declaring employeeObj and returning the statement below.
    //                     return <p key={`employee--${employeeObj.id}`}>{employeeObj.specialties}</p>
    //                  }
    //             )
    // }, [employees])

    // return (
    //     <>
    //         <div>
    //             Specialties:
    //         </div>
    //         {
    //             employees.map(
    //                 (employee) => {
    //                     return <p key={`employee--${employee.id}`}>{employee.name}</p>
    //                 }
    //             )
    //         }
    //     </>
    // )

