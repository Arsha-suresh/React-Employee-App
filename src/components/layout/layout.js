import { useLoaderData } from "react-router-dom";
import { Employee } from "../employee/employee";
import {ClassContext} from '../../context/classContext.js';

export function Layout(){
  const employeeDetails = useLoaderData();
  
    return (<>
 
    { 
     employeeDetails?.map(
        (emp)=>{
            console.log(emp);
            return (<div>
                
                <ClassContext.Provider value='bg-warning'>
                <Employee emp={emp}></Employee>
                </ClassContext.Provider>
                </div>);
        }
    )};
    </>);
}