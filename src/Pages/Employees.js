import '../App.css';
import Employee from "../Components/Employee";
import {useState} from "react";
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';


function Employees() {
  let [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {name: "Shara", role:"Developer", img: "https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", id: 123 },
      {name: "Shara", role:"Developer", img: "https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", id: 120 },
      {name: "Shara", role:"Developer", img: "https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", id: 17 },
      {name: "Shara", role:"Developer", img: "https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", id: 14 },
      {name: "Shara", role:"Developer", img: "https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", id: 11 },
      {name: "Daman", role:"Developer", img: "https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", id: 9 },
    ]
  );

  function updateEmployee(id, newName, newRole){                    //passing this fucntion to EditEmployee through prop
    const updtaedEmployees = employees.map((employee) => {
      if(id == employee.id){
        return{...employee, name: newName, role: newRole};
      }
      return employee;
    }); 
    setEmployees(updtaedEmployees);
  }

  function addEmployee(name, role, img){           //passing this function to AddEmployee through prop  
    let count = 200;
    const newEmployee = {
      id: count,
      name:name,
      role:role,
      img:img,
    };
    setEmployees([...employees, newEmployee]);
    ++count;
  }
    
  return (
    <div>
      
      <div className='flex space-x-4 content-center'>
        {employees.map((employee) =>{
          const editEmployee = <EditEmployee 
          id = {employee.id}
          name= {employee.name} 
          role={employee.role} 
          updateEmployee={updateEmployee}
         />;
            return(
              <Employee 
              key={employee.id}
              id = {employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img} 
              editEmployee={editEmployee}
              />
            );
        })}
      </div> 

      <AddEmployee addEmployee={addEmployee} /> {/* PASSING THE ADDEMPLOYEE FUNCTION AS A PROP*/}

    </div>
  ); 
}

export default Employees;