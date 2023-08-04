import { useContext, useEffect, useState } from 'react';
import'./employee.css';
import { ClassContext } from '../../context/classContext';

export const Employee=({emp})=>{

    const [employee, setEmployee] = useState(emp);
    const classNameVal = useContext(ClassContext);
    useEffect(()=>{
        setEmployee(emp);
    });


    function setEmployeeName(event){

        setEmployee(event.target.value);
        console.log(employee);

    }

    return ( <> 
        <div className=" widthCss p-3 mb-2 bg-primary text-white bg-blue w-30 pt-3">
            <div className={classNameVal}>
                <span>
                    Name:
                </span>
                {employee.employee_name}
            </div>
            <div>
                <span>
                age:
                </span>
                {employee.employee_age}
            </div>
            <div>
                <span>
                  Salary
                </span>
                <input value={employee.salary}  onChange ={setEmployeeName}/>
            </div>
          

        </div>
        </>
    );

}