import logo from './logo.svg';
import './App.css';
import { Employee } from './components/employee/employee';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import {  fetchEmployees, getEmployeeDetails } from './http';
import { Home } from './components/layout/home';

const router = createBrowserRouter([{
  path:'/',
  element:<Home/>,
  children:[
  {path:'/employeeDetails',
  element:<Layout/>,
  loader :fetchEmployees
  }
  ]
}]);


function App() {
  const emp =  {
    "id": "1",
    "employee_name": "Tiger Nixon",
    "employee_salary": "320800",
    "employee_age": "61",
    "profile_image": ""
    }
  return (
    
    <div className="App ">
      <RouterProvider router={router}/>
      <div className="">
      
      
      </div>
    </div>
  );
}

export default App;
