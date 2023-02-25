import './App.css';
import Employees from './Pages/Employees';
import Navbar from './Components/Navbar';
import Customer from './Pages/Customers';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './Pages/Dictionary';
import Definition from './Pages/Definition';

function App() {

    return (
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path='/' element= {<Employees/>}/>
            <Route path='/customer' element= {<Customer/>}/>
            <Route path='/dictionary' element = {<Dictionary/>}/>
            <Route path='/definition/:search' element = {<Definition/>}/>
          </Routes>
        </Navbar>
      </BrowserRouter>
     
    );    
}

export default App;