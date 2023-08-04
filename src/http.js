
export async function  fetchEmployees(){
  try{
const res = await fetch('https://dummy.restapiexample.com/api/v1/employees');
/*if(!res.ok){
 throw new Error("error found")
}*/
 const responseJson = await res.json();
 //console.log(data);
 return responseJson?.data;
} catch(error){
console.log(error);
}

}

export function getEmployeeDetails(){

  fetchEmployees()?.then((data)=>
  {
    console.log('getEmployeeDetails',data);
    return data
  })
}
